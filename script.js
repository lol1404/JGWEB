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

// Hero text rotation
const heroText = document.getElementById('hero-text');
if(heroText){
  const phrases = [
    'Una web |profesional| no es un lujo, es la nueva tarjeta de |presentación|.',
    '|Clientes| investigan, comparan y eligen al que |aparece primero|.',
    'No necesitas más suerte. Necesitas más |visibilidad|.',
    'Si siempre haces lo |mismo|, obtendrás los |mismos| resultados.',
    'El mejor momento para crear tu web fue hace años. El |segundo mejor| es hoy.'
  ];
  
  // Parse phrase y separar palabras y resaltes
  function parsePhrase(text){
    const parts = [];
    const regex = /\|([^|]+)\||([^|]+)/g;
    let match;
    while((match = regex.exec(text)) !== null){
      if(match[1]){
        parts.push({ text: match[1], highlighted: true });
      } else {
        parts.push({ text: match[2], highlighted: false });
      }
    }
    return parts;
  }
  
  let pIndex = 0, charCount = 0, deleting = false;

  function typeHero(){
    const parts = parsePhrase(phrases[pIndex]);
    const fullText = parts.map(p => p.text).join('');
    
    if(!deleting){
      charCount++;
      if(charCount > fullText.length){
        deleting = true;
        setTimeout(typeHero, 2000);
        return;
      }
    } else {
      charCount--;
      if(charCount <= 0){
        charCount = 0;
        deleting = false;
        pIndex = (pIndex + 1) % phrases.length;
      }
    }
    
    // Construir HTML según charCount
    let html = '';
    let currentChar = 0;
    
    for(let part of parts){
      if(currentChar >= charCount) break;
      
      const partLength = part.text.length;
      const endChar = Math.min(currentChar + partLength, charCount);
      const visibleLength = endChar - currentChar;
      const visibleText = part.text.slice(0, visibleLength);
      
      if(part.highlighted){
        html += '<span class="hero-highlight">' + visibleText + '</span>';
      } else {
        html += visibleText;
      }
      
      currentChar = endChar;
    }
    
    heroText.innerHTML = html;
    setTimeout(typeHero, deleting ? 20 : 30);
  }
  typeHero();
}

// Typewriter effect for search bar
const typedEl = document.getElementById('typed-text');
if(typedEl){
  const phrases = ['peluquería cerca de mí', 'notaría cerca de mí', 'catering para eventos'];
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
}

// Replay pin-drop animation periodically
const pin1 = document.getElementById('pin1');
if(pin1){
  function replayPins(){
    ['pin1','pin2','pin3','pinYou','mockCard'].forEach(id => {
      const el = document.getElementById(id);
      if(el){
        el.style.animation = 'none';
        void el.offsetWidth;
        el.style.animation = '';
      }
    });
  }
  setInterval(replayPins, 6000);
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// Modal para planes
const planModal = document.getElementById('planModal');
if(planModal){
  window.openPlanModal = function(name, price, renewal){
    const modal = document.getElementById('planModal');
    document.getElementById('modalPlanName').textContent = name;
    document.getElementById('modalPriceFirst').textContent = price;
    document.getElementById('modalPriceRenew').textContent = 'Renovación: ' + renewal;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  };

  window.closePlanModal = function(){
    document.getElementById('planModal').style.display = 'none';
    document.body.style.overflow = 'auto';
  };

  window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') window.closePlanModal();
  });
} else {
  // Funciones dummy si no existe el modal
  window.openPlanModal = function(){};
  window.closePlanModal = function(){};
}

// FAQ toggle
window.toggleFaq = function(el){
  const item = el.closest('.faq-item');
  if(item){
    item.classList.toggle('active');
    el.classList.toggle('active');
  }
};

// Auto-fill plan from URL parameter
const planSelect = document.getElementById('plan');
if(planSelect){
  const params = new URLSearchParams(window.location.search);
  const selectedPlan = params.get('plan');
  if(selectedPlan){
    planSelect.value = selectedPlan;
  }
}

// Contact form with Netlify
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    const formMsg = document.getElementById('formMsg');
    formMsg.textContent = 'Enviando tu mensaje...';
    formMsg.style.color = '#1b6e63';
    
    // Mostrar alerta elegante
    setTimeout(() => {
      alert('✓ ¡Mensaje enviado!\n\nTe responderé lo antes posible.\n\nGracias por contactar.');
    }, 300);
  });
}
