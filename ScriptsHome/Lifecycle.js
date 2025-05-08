const svg        = document.getElementById('svg-clicker');
const coordOutput= document.getElementById('coords');
const linesGroup = document.getElementById('lines-group');
const zoomLayer  = document.getElementById('zoom-layer');

// 1) Configura aquí los transform-origins (en unidades SVG)
const transformOrigins = {
  1: { x: 12, y: 20 },
  2: { x: 28, y: 88 },
  3: { x: 87, y: 68 },
  4: { x: 73, y: 15 }
};

// 2) Aplica los orígenes justo al cargar
window.addEventListener('DOMContentLoaded', () => {
  Object.entries(transformOrigins).forEach(([idx, { x, y }]) => {
    const group = svg.querySelector(`.zoom-group[data-index="${idx}"]`);
    if (group) {
      group.style.transformOrigin = `${x}px ${y}px`;
    }
  });
});


// 4) Hover / zoom + mover al frente tras la transición
svg.querySelectorAll('.hover-area').forEach(poly => {
    const idx   = poly.dataset.index;
    const group = svg.querySelector(`.zoom-group[data-index="${idx}"]`);
  
    poly.addEventListener('mouseenter', () => {
      // 1️⃣ mueve al frente
      zoomLayer.appendChild(group);
      // 2️⃣ fuerza reflow
      void group.getBoundingClientRect();
      // 3️⃣ en el siguiente frame, arranca la transición
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          group.classList.add('hovered');
        });
      });
    });
  
    poly.addEventListener('mouseleave', () => {
      // al quitar la clase, hace zoom out suavemente
      group.classList.remove('hovered');
    });
  });