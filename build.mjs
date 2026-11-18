import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';

const root = path.dirname(fileURLToPath(import.meta.url));
const output = path.join(root, 'dist');
const articlesDirectory = path.join(root, 'content', 'articles');
const template = await readFile(path.join(root, 'templates', 'blog.html'), 'utf8');
const excludedPaths = new Set([
  '.git',
  '.netlify',
  'content',
  'dist',
  'node_modules',
  'templates',
  '.gitignore',
  'build.mjs',
  'netlify.toml',
  'package-lock.json',
  'package.json',
]);

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character]);
}

function fillTemplate(values) {
  return template.replace(/\{\{([A-Z_]+)\}\}/g, (_, key) => {
    if (!(key in values)) {
      throw new Error(`Falta el valor de plantilla "${key}".`);
    }
    return values[key];
  });
}

function parseArticle(source, filename) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    throw new Error(`${filename}: añade los metadatos entre delimitadores ---.`);
  }

  const metadata = {};
  for (const line of match[1].split(/\r?\n/)) {
    const field = line.match(/^([a-z]+):\s*(.*?)\s*$/);
    if (!field) {
      throw new Error(`${filename}: metadato no válido: "${line}".`);
    }
    metadata[field[1]] = field[2].replace(/^(['"])(.*)\1$/, '$2');
  }

  for (const field of ['title', 'date', 'summary']) {
    if (!metadata[field]) {
      throw new Error(`${filename}: falta el metadato obligatorio "${field}".`);
    }
  }

  const parsedDate = Date.parse(`${metadata.date}T00:00:00Z`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(metadata.date)
      || Number.isNaN(parsedDate)
      || new Date(parsedDate).toISOString().slice(0, 10) !== metadata.date) {
    throw new Error(`${filename}: la fecha debe tener el formato YYYY-MM-DD.`);
  }

  const slug = path.basename(filename, '.md');
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    throw new Error(`${filename}: usa un nombre de archivo tipo mi-articulo.md.`);
  }

  return {
    ...metadata,
    slug,
    content: match[2].trim(),
    timestamp: Date.parse(`${metadata.date}T00:00:00Z`),
    displayDate: new Intl.DateTimeFormat('es-ES', {
      dateStyle: 'long',
      timeZone: 'UTC',
    }).format(new Date(`${metadata.date}T00:00:00Z`)),
  };
}

const files = (await readdir(articlesDirectory))
  .filter((filename) => filename.endsWith('.md') && filename !== 'README.md')
  .sort();
const articles = await Promise.all(files.map(async (filename) => (
  parseArticle(
    await readFile(path.join(articlesDirectory, filename), 'utf8'),
    filename,
  )
)));
articles.sort((first, second) => second.timestamp - first.timestamp);

if (articles.length === 0) {
  throw new Error('No hay artículos Markdown en content/articles.');
}

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const entry of await readdir(root)) {
  if (excludedPaths.has(entry)) continue;
  await cp(path.join(root, entry), path.join(output, entry), { recursive: true });
}

const blogDirectory = path.join(output, 'pages', 'blog');
await mkdir(blogDirectory, { recursive: true });

const listing = articles.map((article) => `
      <article class="blog-card reveal">
        <div class="blog-date">${escapeHtml(article.displayDate)}</div>
        <h3>${escapeHtml(article.title)}</h3>
        <p>${escapeHtml(article.summary)}</p>
        <a class="blog-link" href="blog/${escapeHtml(article.slug)}.html">Leer artículo →</a>
      </article>`).join('\n');

await writeFile(path.join(output, 'pages', 'blog.html'), fillTemplate({
  BASE_PATH: '../',
  BLOG_PATH: 'pages/blog.html',
  BLOG_CONTENT: listing,
  TITLE: 'Blog: Presencia Digital para Negocios',
  SUMMARY: 'Consejos prácticos, estrategias y casos de éxito sobre cómo hacer crecer tu negocio online.',
  DATE: '',
  PAGE_TITLE: 'Blog — JGWEB',
  EYEBROW: 'Aprende',
  CONTENT: '',
}));

for (const article of articles) {
  const html = fillTemplate({
    BASE_PATH: '../../',
    BLOG_PATH: 'pages/blog.html',
    BLOG_CONTENT: '',
    TITLE: escapeHtml(article.title),
    SUMMARY: escapeHtml(article.summary),
    DATE: `<div class="blog-date">${escapeHtml(article.displayDate)}</div>`,
    PAGE_TITLE: `${escapeHtml(article.title)} — JGWEB`,
    EYEBROW: 'Artículo',
    CONTENT: `<article class="blog-post reveal"><div class="blog-content">${marked.parse(article.content)}</div></article>`,
  });
  const articlePath = path.join(blogDirectory, `${article.slug}.html`);
  await writeFile(articlePath, html);
}
