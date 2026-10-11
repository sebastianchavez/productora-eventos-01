// ============================================
// MAIN.JS - Funcionalidades globales
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initScrollReveal();
  initCounters();
  initFAQ();
  initSmoothScroll();
  highlightActiveLink();
});

// ============================================
// NAVBAR
// ============================================
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

// ============================================
// MENÚ MÓVIL
// ============================================
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('.mobile-menu');
  const overlay = document.querySelector('.mobile-menu-overlay');
  const closeBtn = document.querySelector('.mobile-close');

  if (!toggle || !menu) return;

  const openMenu = () => {
    menu.classList.add('open');
    overlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    menu.classList.remove('open');
    overlay?.classList.remove('open');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);
  overlay?.addEventListener('click', closeMenu);

  // Cerrar al hacer click en un link
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// ============================================
// ANIMACIONES ON-SCROLL
// ============================================
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Delay escalonado si hay varios elementos cercanos
        const delay = Array.from(entry.target.parentElement?.children || [])
          .filter(el => el.classList.contains('reveal') || 
                       el.classList.contains('reveal-left') || 
                       el.classList.contains('reveal-right') || 
                       el.classList.contains('reveal-scale'))
          .indexOf(entry.target) * 100;
        
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, Math.min(delay, 400));
        
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// ============================================
// CONTADORES ANIMADOS
// ============================================
function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
  const target = parseInt(element.dataset.counter);
  const suffix = element.dataset.suffix || '';
  const duration = 2000;
  const start = performance.now();

  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Easing ease-out
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);
    
    element.textContent = current.toLocaleString('es-ES') + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = target.toLocaleString('es-ES') + suffix;
    }
  };

  requestAnimationFrame(update);
}

// ============================================
// FAQ (Acordeón)
// ============================================
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      
      // Cerrar todos
      faqItems.forEach(other => other.classList.remove('open'));
      
      // Abrir el actual si no estaba abierto
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

// ============================================
// SMOOTH SCROLL
// ============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ============================================
// RESALTAR LINK ACTIVO
// ============================================
function highlightActiveLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    }
  });
}

// ============================================
// HEADER COMPONENT (reutilizable)
// ============================================
function getNavbarHTML(activePage) {
  const links = [
    { href: 'index.html', label: 'Inicio' },
    { href: 'sobre-nosotros.html', label: 'Sobre nosotros' },
    { href: 'servicios.html', label: 'Servicios' },
    { href: 'galeria.html', label: 'Galería' },
    { href: 'precios.html', label: 'Precios' },
    { href: 'contacto.html', label: 'Contacto' }
  ];

  return `
    <nav class="navbar fixed top-0 left-0 right-0 z-50 py-4">
      <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="index.html" class="flex items-center gap-3 group">
          <div class="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-300 flex items-center justify-center text-black font-serif font-bold text-xl">L</div>
          <div>
            <div class="font-serif text-xl font-bold text-white group-hover:text-yellow-400 transition">Lumière</div>
            <div class="text-xs text-gray-400 -mt-1">Eventos Premium</div>
          </div>
        </a>

        <div class="hidden lg:flex items-center gap-8">
          ${links.map(link => `
            <a href="${link.href}" class="nav-link text-sm font-medium text-gray-200 hover:text-yellow-400 ${activePage === link.href ? 'active' : ''}">${link.label}</a>
          `).join('')}
        </div>

        <div class="flex items-center gap-4">
          <a href="contacto.html" class="hidden sm:inline-flex btn-primary text-sm">
            Reservar
          </a>
          <button class="mobile-toggle lg:hidden text-white p-2" aria-label="Menú">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <div class="mobile-menu-overlay"></div>
    <div class="mobile-menu">
      <button class="mobile-close absolute top-6 right-6 text-white text-2xl" aria-label="Cerrar menú">×</button>
      ${links.map(link => `
        <a href="${link.href}" class="mobile-nav-link ${activePage === link.href ? 'active' : ''}">${link.label}</a>
      `).join('')}
      <a href="contacto.html" class="btn-primary w-full mt-8">Reservar ahora</a>
    </div>
  `;
}

// ============================================
// FOOTER COMPONENT
// ============================================
function getFooterHTML() {
  return `
    <footer class="bg-[#0a0a0a] border-t border-[#2a2a2a] pt-16 pb-8 mt-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-300 flex items-center justify-center text-black font-serif font-bold text-xl">L</div>
              <div>
                <div class="font-serif text-xl font-bold text-white">Lumière</div>
                <div class="text-xs text-gray-400 -mt-1">Eventos Premium</div>
              </div>
            </div>
            <p class="text-gray-400 text-sm leading-relaxed mb-4">
              Creamos momentos que brillan para siempre. Productora de eventos premium en Chile y Latinoamérica.
            </p>
            <div class="flex gap-3">
              <a href="${LUMIERE_DATA.brand.social.instagram}" class="w-9 h-9 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition" aria-label="Instagram">📷</a>
              <a href="${LUMIERE_DATA.brand.social.facebook}" class="w-9 h-9 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition" aria-label="Facebook">f</a>
              <a href="${LUMIERE_DATA.brand.social.youtube}" class="w-9 h-9 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition" aria-label="YouTube">▶</a>
              <a href="${LUMIERE_DATA.brand.social.tiktok}" class="w-9 h-9 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition" aria-label="TikTok">♪</a>
            </div>
          </div>

          <div>
            <h4 class="text-white font-semibold mb-4 font-serif">Navegación</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="index.html" class="text-gray-400 hover:text-yellow-400 transition">Inicio</a></li>
              <li><a href="sobre-nosotros.html" class="text-gray-400 hover:text-yellow-400 transition">Sobre nosotros</a></li>
              <li><a href="servicios.html" class="text-gray-400 hover:text-yellow-400 transition">Servicios</a></li>
              <li><a href="galeria.html" class="text-gray-400 hover:text-yellow-400 transition">Galería</a></li>
              <li><a href="precios.html" class="text-gray-400 hover:text-yellow-400 transition">Precios</a></li>
              <li><a href="contacto.html" class="text-gray-400 hover:text-yellow-400 transition">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-white font-semibold mb-4 font-serif">Servicios</h4>
            <ul class="space-y-2 text-sm">
              ${LUMIERE_DATA.services.slice(0, 6).map(s => `
                <li><a href="servicios.html#${s.id}" class="text-gray-400 hover:text-yellow-400 transition">${s.title}</a></li>
              `).join('')}
            </ul>
          </div>

          <div>
            <h4 class="text-white font-semibold mb-4 font-serif">Contacto</h4>
            <ul class="space-y-3 text-sm text-gray-400">
              <li class="flex items-start gap-2">
                <span class="text-yellow-500 mt-0.5">📍</span>
                <span>${LUMIERE_DATA.brand.address}<br>${LUMIERE_DATA.brand.city}</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-yellow-500">📞</span>
                <a href="tel:${LUMIERE_DATA.brand.phone}" class="hover:text-yellow-400 transition">${LUMIERE_DATA.brand.phone}</a>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-yellow-500">✉</span>
                <a href="mailto:${LUMIERE_DATA.brand.email}" class="hover:text-yellow-400 transition">${LUMIERE_DATA.brand.email}</a>
              </li>
            </ul>
            <div class="mt-4">
              <p class="text-xs text-gray-500 mb-2">Síguenos en redes</p>
              <p class="text-xs text-gray-400">@eventoslumiere</p>
            </div>
          </div>
        </div>

        <div class="pt-8 border-t border-[#2a2a2a] flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© ${new Date().getFullYear()} Eventos Lumière. Todos los derechos reservados.</p>
          <div class="flex gap-6">
            <a href="privacidad.html" class="hover:text-yellow-400 transition">Política de privacidad</a>
            <a href="terminos.html" class="hover:text-yellow-400 transition">Términos y condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// ============================================
// INJECT COMPONENTS
// ============================================
function injectComponents(activePage) {
  const navbarContainer = document.getElementById('navbar-container');
  const footerContainer = document.getElementById('footer-container');

  if (navbarContainer) {
    navbarContainer.innerHTML = getNavbarHTML(activePage);
  }
  if (footerContainer) {
    footerContainer.innerHTML = getFooterHTML();
  }

  // Reinicializar tras inyectar
  initNavbar();
  initMobileMenu();
  highlightActiveLink();
}
