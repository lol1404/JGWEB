document.getElementById('year').textContent = new Date().getFullYear();

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

// Contact form (front-end only demo)
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('formMsg').textContent = '¡Gracias! Te responderé lo antes posible.';
  this.reset();
});
