// ============================================
// GALERÍA - Filtros y Lightbox
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initGallery();
});

function initGallery() {
  renderGallery('all');
  initFilters();
  initLightbox();
}

function renderGallery(category) {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  const items = category === 'all' 
    ? LUMIERE_DATA.gallery 
    : LUMIERE_DATA.gallery.filter(item => item.category === category);

  grid.innerHTML = items.map((item, index) => {
    // Patrón para que algunas imágenes sean más altas
    const isTall = index % 5 === 1;
    return `
      <div class="gallery-item ${isTall ? 'tall' : ''}" 
           data-id="${item.id}"
           data-category="${item.category}"
           style="opacity:0; animation: scaleIn 0.5s ease ${index * 50}ms forwards">
        <img src="${item.src}" alt="${item.title}" loading="lazy">
        <div class="gallery-item-overlay">
          <div class="w-full">
            <p class="text-xs uppercase tracking-wider text-yellow-400 mb-1">${item.category}</p>
            <h3 class="text-white font-semibold">${item.title}</h3>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Re-bind lightbox
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const id = parseInt(item.dataset.id);
      const data = LUMIERE_DATA.gallery.find(g => g.id === id);
      if (data) openLightbox(data);
    });
  });
}

function initFilters() {
  const filterContainer = document.getElementById('gallery-filters');
  if (!filterContainer) return;

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'bodas', label: 'Bodas' },
    { id: 'corporativos', label: 'Corporativos' },
    { id: 'conciertos', label: 'Conciertos' },
    { id: 'conferencias', label: 'Conferencias' },
    { id: 'lanzamientos', label: 'Lanzamientos' },
    { id: 'privados', label: 'Privados' }
  ];

  filterContainer.innerHTML = categories.map(cat => `
    <button class="filter-btn ${cat.id === 'all' ? 'active' : ''}" 
            data-filter="${cat.id}">
      ${cat.label}
    </button>
  `).join('');

  filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGallery(btn.dataset.filter);
    });
  });
}

// ============================================
// LIGHTBOX
// ============================================
function initLightbox() {
  // Crear elemento lightbox si no existe
  if (!document.getElementById('lightbox')) {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
      <button class="lightbox-close" aria-label="Cerrar">×</button>
      <img id="lightbox-img" src="" alt="">
      <p id="lightbox-caption" class="lightbox-caption"></p>
    `;
    document.body.appendChild(lightbox);

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });
  }
}

function openLightbox(data) {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');
  
  if (!lightbox) return;
  
  img.src = data.src.replace('w=800', 'w=1600');
  img.alt = data.title;
  caption.textContent = data.title;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}
