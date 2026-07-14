document.getElementById('year').textContent = new Date().getFullYear();

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if(hamburger && navMenu){
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
  
  // Cerrar menú al hacer click en un link
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// Typewriter effect for search bar
const phrases = ['peluquería cerca de mí', 'notaría cerca de mí', 'catering para eventos'];
const typedEl = document.getElementById('typed-text');
let pIndex = 0, cIndex = 0, deleting = false;

function typeLoop(){
  const current = phrases[pIndex];
  if(!deleting){
    cIndex++;
    typedEl.textContent = current.slice(0, cIndex);
    if(cIndex === current.length){
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    cIndex--;
    typedEl.textContent = current.slice(0, cIndex);
    if(cIndex === 0){
      deleting = false;
      pIndex = (pIndex + 1) % phrases.length;
    }
  }
  setTimeout(typeLoop, deleting ? 35 : 60);
}
typeLoop();

// Replay pin-drop animation periodically
function replayPins(){
  ['pin1','pin2','pin3','pinYou','mockCard'].forEach(id => {
    const el = document.getElementById(id);
    el.style.animation = 'none';
    void el.offsetWidth;
    el.style.animation = '';
  });
}
setInterval(replayPins, 6000);

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// Modal para planes
function openPlanModal(name, price, renewal){
  const modal = document.getElementById('planModal');
  document.getElementById('modalPlanName').textContent = name;
  document.getElementById('modalPriceFirst').textContent = price;
  document.getElementById('modalPriceRenew').textContent = 'Renovación: ' + renewal;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closePlanModal(){
  document.getElementById('planModal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

window.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') closePlanModal();
});

// FAQ toggle
function toggleFaq(el){
  const item = el.closest('.faq-item');
  item.classList.toggle('active');
  el.classList.toggle('active');
}

// Contact form with Netlify
document.getElementById('contactForm').addEventListener('submit', function(e){
  const formMsg = document.getElementById('formMsg');
  formMsg.textContent = 'Enviando tu mensaje...';
  formMsg.style.color = '#1b6e63';
  
  // Mostrar alerta elegante
  setTimeout(() => {
    alert('✓ ¡Mensaje enviado!\n\nTe responderé lo antes posible.\n\nGracias por contactar.');
  }, 300);
});
