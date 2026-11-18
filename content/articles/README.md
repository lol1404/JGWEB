# Guía sencilla para publicar un artículo

Esta guía es para escribir y publicar artículos en la web. No hace falta programar ni instalar nada: solo necesitarás una cuenta con acceso al repositorio de la web en GitHub.

## 1. Prepara el artículo

Antes de abrir GitHub, ten a mano:

- **El título** que aparecerá en el artículo.
- **La fecha** de publicación, escrita como `AAAA-MM-DD`. Por ejemplo: `2026-11-18`.
- **Un resumen corto** para presentar el artículo en la página del blog.
- **El texto** del artículo.

La web muestra primero los artículos con fecha más reciente. No hay un modo de borrador: cuando los cambios se publiquen en la web, el artículo estará visible para todo el mundo.

## 2. Abre la carpeta de artículos en GitHub

1. Entra en GitHub e inicia sesión con la cuenta que tiene acceso a la web.
2. Abre el repositorio de la web.
3. Entra en la carpeta `content` y, dentro de ella, en `articles`.
4. Pulsa **Add file** y luego **Create new file**. Como ya estás dentro de `articles`, GitHub creará el archivo en esa carpeta.

Los nombres de los botones pueden aparecer traducidos si tienes GitHub en español.

## 3. Pon nombre al archivo

En el campo del nombre escribe un nombre breve para el artículo, todo en minúsculas, sin acentos y con guiones en vez de espacios. Añade `.md` al final.

Por ejemplo, para un artículo sobre escaparates:

`escaparate-para-comercios.md`

Ese nombre forma parte de la dirección del artículo en la web. No uses espacios, tildes, `ñ`, guiones bajos ni otros signos.

## 4. Copia esta plantilla

Pega este texto en el editor y sustituye los ejemplos por los datos y el contenido del artículo:

```markdown
---
title: Cómo preparar tu negocio para la temporada
date: 2026-11-18
summary: Ideas prácticas para preparar tu negocio y atraer más clientes.
image: escaparate.jpg
image-alt: Escaparate de una tienda local decorado para la temporada.
---

### Empieza con una idea

Escribe aquí el primer párrafo del artículo.

### Desarrolla el tema

Explica tus consejos con palabras claras y párrafos cortos.

- Primer consejo
- Segundo consejo
- Tercer consejo
```

Conserva las tres líneas `---`: una antes de los datos y otra después. Esas líneas separan la información del artículo de su texto.

Las líneas `image` y `image-alt` son opcionales. Si no vas a poner imagen, bórralas. Si sí vas a ponerla, sube primero el archivo a `content/articles/images` siguiendo los pasos del apartado siguiente y escribe su nombre exacto en `image`. La misma imagen aparecerá en la tarjeta del listado y al principio del artículo. En `image-alt`, describe brevemente lo que se ve para que la imagen también sea comprensible con lectores de pantalla.

## 5. Añade una imagen (opcional)

1. En GitHub, abre `content/articles/images`.
2. Pulsa **Add file** y después **Upload files**.
3. Selecciona la imagen de tu ordenador y confirma los cambios para subirla.
4. En los datos del artículo, escribe el nombre exacto del archivo en `image`. Por ejemplo, si subiste `escaparate.jpg`, escribe `image: escaparate.jpg`.
5. Escribe una descripción corta de la imagen en `image-alt`.

Se admiten imágenes JPG, JPEG, PNG, WebP, GIF y AVIF. Para que el nombre sea válido, usa minúsculas, números y guiones; por ejemplo, `escaparate-de-temporada.jpg`. No uses espacios, tildes ni `ñ`. Puedes reutilizar una imagen en más de un artículo.

## 6. Escribe y da formato al texto

Debajo de la segunda línea `---`, escribe el artículo. Puedes usar estos formatos:

- **Un subtítulo:** escribe `### ` delante del texto del subtítulo.
- **Un párrafo:** escribe el texto normalmente y deja una línea en blanco antes del siguiente párrafo.
- **Negrita:** encierra las palabras entre dos pares de asteriscos, así: `**texto importante**`.
- **Una lista:** empieza cada punto con `- `.
- **Una lista numerada:** empieza cada paso con `1. `, `2. ` y así sucesivamente.
- **Un enlace:** escribe `[texto que se verá](https://ejemplo.com)`.

No escribas el título principal otra vez en el cuerpo: la web ya lo muestra al principio del artículo.

## 7. Revisa antes de guardar

Comprueba que:

- El nombre del archivo termina en `.md` y solo tiene minúsculas, números y guiones.
- El título, la fecha y el resumen están escritos entre las dos líneas `---`.
- La fecha sigue el formato `AAAA-MM-DD`, con mes y día de dos cifras.
- El resumen es breve y el texto está debajo de la segunda línea `---`.
- Si añadiste `image`, el archivo ya está en `content/articles/images`, el nombre coincide exactamente y también rellenaste `image-alt`.

## 8. Guarda y publica

1. Pulsa **Commit changes...** para guardar el archivo en GitHub.
2. Escribe un mensaje sencillo, por ejemplo: `Añadir artículo sobre escaparates`.
3. Confirma los cambios. Si GitHub te ofrece crear una propuesta o solicitud de cambios en vez de guardar directamente, sigue los pasos para crearla y pide que la apruebe o combine alguien con permisos.
4. Al guardarse los cambios en la rama que publica la web, Netlify prepara la nueva versión automáticamente. No hace falta editar ni subir la carpeta `dist`.
5. Cuando termine la publicación, abre la web, entra en **Blog** y comprueba que aparece el artículo y que puedes abrirlo.

Si no aparece, o la publicación muestra un error, avisa a la persona que administra la web y comparte el enlace al cambio de GitHub.
