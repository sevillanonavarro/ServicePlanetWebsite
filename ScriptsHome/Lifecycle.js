// ==== REFERENCIAS DOM ====  
const svg       = document.getElementById('svg-clicker');
const zoomLayer = document.getElementById('zoom-layer');

// ==== CONFIGS ====  
const transformOrigins = {
  1: { x: 12, y: 20 },
  2: { x: 28, y: 88 },
  3: { x: 87, y: 68 },
  4: { x: 73, y: 15 }
};

// Orígenes Fase 2 (edítalos a mano)
const transformOriginsPhase2 = {
  1: { x: 2, y: 0 },
  2: { x: 0, y: 100 },
  3: { x: 103, y: 73 },
  4: { x: 82, y: 0 }
};

// Factores de zoom Fase 2 (edítalos aquí)
const scaleFactorsPhase2 = {
  1: 1.15,
  2: 1.30,
  3: 1.20,
  4: 1.25
};

const imageReplacements = {
  1: './Sources/LifecycleExtras/2A.png',
  2: './Sources/LifecycleExtras/2D.png',
  3: './Sources/LifecycleExtras/2C.png',
  4: './Sources/LifecycleExtras/2B.png'
};

const polygonPoints = {
  1: "16.18,57.81 15.20,53.65 18.85,49.59 15.29,44.11 16.62,38.54 18.65,33.50 22.72,27.58 28.14,22.89 33.08,19.36 39.42,16.09 46.05,14.85 50.91,14.8 56.83,15.47 58.34,9.04 53.30,7.1 46.32,6.98 39.33,8.13 32.62,10.87 26.96,13.52 21.48,17.77 17.15,21.92 13.35,27.67 9.99,34.21 8.13,42.16 7.42,48.88 8.13,55.33 9.9,60.02 16.09,57.81",
  
  2: "10.70,37.57 18.35,39.77 17.18,53.49 20.64,49.85 20.62,55.68 20.21,61.87 21.68,66.56 24.40,71.77 30.32,77.16 38.01,81.32 45.52,83.08 54.80,83.35 61.52,81.49 63.90,87.86 57.89,89.63 50.82,90.42 44.81,90.24 36.33,88.03 28.81,85.03 22.89,81.05 17.41,75.40 11.58,66.29 8.75,57.72 8.04,48.97 8.75,43.05 9.55,37.30 10.87,37.57",

  3: "79.72,32.23 85.34,28.97 87.55,32.88 89.12,37.84 90.16,43.19 90.55,50.24 89.25,57.80 86.90,66.42 83.51,72.94 78.68,78.29 73.72,82.73 66.94,86.51 61.46,88.60 59.63,82.86 68.37,78.94 73.59,74.64 78.16,69.16 81.68,62.37 83.77,54.28 84.16,46.45 82.73,39.28 79.85,32.23",

  4: "35.88,18.05 41.3,15.66 44.06,14.74 47.76,14.35 54.54,14.87 59.24,16.31 63.94,17.88 68.37,20.36 71.68,23.75 76.98,28.45 80.77,34.71 82.99,43.23 84.29,48.41 91.08,47.50 90.03,40.97 88.08,33.66 84.81,27.66 80.77,22.05 76.20,17.88 70.33,13.05 62.11,9.39 53.89,7.70 44.36,8.09 35.88,10.05"
};



// === Datos con id ya predefinido ===
const phase2Extras = {
  1: [
    { id: 'ball-1-0', x: 44, y: 16, href: './Sources/LifecycleExtras/1A.png', width: 12, height: 12, selectedHref: './Sources/LifecycleExtras/1B.png',}
  ],
  2: [
    { id: 'ball-2-0', x: 44, y: 16, href: './Sources/LifecycleExtras/1A.png', width: 12, height: 12, selectedHref: './Sources/LifecycleExtras/1B.png', },

    { id: 'ball-2-1', x: 64, y: 62, href: './Sources/LifecycleExtras/1A.png', width: 12, height: 12, selectedHref: './Sources/LifecycleExtras/1B.png', },

    { id: 'ball-2-2', x: 69, y: 32, href: './Sources/LifecycleExtras/1A.png', width: 12, height: 12, selectedHref: './Sources/LifecycleExtras/1B.png', },

    { id: 'ball-2-3', x: 24, y: 62, href: './Sources/LifecycleExtras/1A.png', width: 12, height: 12, selectedHref: './Sources/LifecycleExtras/1B.png', },

    { id: 'ball-2-4', x: 20, y: 32, href: './Sources/LifecycleExtras/1A.png', width: 12, height: 12, selectedHref: './Sources/LifecycleExtras/1B.png', },
  ],
  3: [
    { id: 'ball-3-0', x: 44, y: 16, href: './Sources/LifecycleExtras/1A.png', width: 12, height: 12, selectedHref: './Sources/LifecycleExtras/1B.png', },

    { id: 'ball-3-1', x: 64, y: 62, href: './Sources/LifecycleExtras/1A.png', width: 12, height: 12, selectedHref: './Sources/LifecycleExtras/1B.png', },

    { id: 'ball-3-2', x: 69, y: 32, href: './Sources/LifecycleExtras/1A.png', width: 12, height: 12, selectedHref: './Sources/LifecycleExtras/1B.png', },

    { id: 'ball-3-3', x: 24, y: 62, href: './Sources/LifecycleExtras/1A.png', width: 12, height: 12, selectedHref: './Sources/LifecycleExtras/1B.png', },

    { id: 'ball-3-4', x: 20, y: 32, href: './Sources/LifecycleExtras/1A.png', width: 12, height: 12, selectedHref: './Sources/LifecycleExtras/1B.png', },
    
  ],
  4: [
    { id: 'ball-4-0', x: 44, y: 16, href: './Sources/LifecycleExtras/1A.png', width: 12, height: 12, selectedHref: './Sources/LifecycleExtras/1B.png', },
    { id: 'ball-4-1', x: 68, y: 56, href: './Sources/LifecycleExtras/1A.png', width: 12, height: 12, selectedHref: './Sources/LifecycleExtras/1B.png', },
    { id: 'ball-4-2', x: 20, y: 56, href: './Sources/LifecycleExtras/1A.png', width: 12, height: 12, selectedHref: './Sources/LifecycleExtras/1B.png', },
  ],
};

const ballText = {
  'ball-1-0': {
    title: 'Título 1-0',
    items: ['Texto 1A', 'Texto 1B', 'Texto 1C']
  },
  'ball-2-0': {
    title: 'Título 2-0',
    items: ['Texto 2A', 'Texto 2B', 'Texto 2C']
  },
  'ball-2-1': {
    title: 'Título 2-1',
    items: ['Texto 2-1A', 'Texto 2-1B', 'Texto 2-1C']
  },
  'ball-2-2': {
    title: 'Título 2-2',
    items: ['Texto 2-2A', 'Texto 2-2B', 'Texto 2-2C']
  },
  'ball-2-3': {
    title: 'Título 2-3',
    items: ['Texto 2-3A', 'Texto 2-3B', 'Texto 2-3C']
  },
  'ball-2-4': {
    title: 'Título 2-4',
    items: ['Texto 2-4A', 'Texto 2-4B', 'Texto 2-4C']
  },
  // Agrega los demás según necesites...
};

const phase2Center = {
  href: './Sources/LifecycleExtras/3.png',
  width:  38,
  height: 38,
  x: (100 - 38) / 2,  // = 31
  y: (100 - 38) / 2 -1,  // = 31
  id:    'phase2-center',
  class: 'phase2-center'
};



// ==== UTILIDADES ====  
function applyHover(containerSvg, zoomLayerSelector, groupClass) {
  const zLayer = containerSvg.querySelector(zoomLayerSelector);
  containerSvg.querySelectorAll('.hover-area').forEach(poly => {
    const idx   = poly.dataset.index;
    const group = zLayer.querySelector(`.${groupClass}[data-index="${idx}"]`);
    const scale = (groupClass === 'zoom-group-p2' && scaleFactorsPhase2[idx]) 
      ? scaleFactorsPhase2[idx] 
      : 1.12;
    group.style.setProperty('--hover-scale', scale);

    poly.addEventListener('mouseenter', () => {
      zLayer.appendChild(group);
      void group.getBoundingClientRect();
      requestAnimationFrame(() => requestAnimationFrame(() => {
        group.classList.add('hovered');
      }));
    });
    poly.addEventListener('mouseleave', () => {
      group.classList.remove('hovered');
    });
  });
}

// ==== FASE 1 ====  
window.addEventListener('DOMContentLoaded', () => {
  Object.entries(transformOrigins).forEach(([idx, { x, y }]) => {
    const g = svg.querySelector(`.zoom-group[data-index="${idx}"]`);
    if (g) g.style.transformOrigin = `${x}px ${y}px`;
  });
  applyHover(svg, '#zoom-layer', 'zoom-group');
});

// ==== FASE 2 ====  
const imageContainer = document.createElement('div');
imageContainer.id = 'image-container';
imageContainer.style.cssText = 'display:none; width:50%; overflow:hidden; z-index:10';

const newSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
newSvg.setAttribute("viewBox", "0 0 100 100");
newSvg.setAttribute("width",  "80%");
newSvg.setAttribute("height", "100%");

const phase2Img = document.createElementNS("http://www.w3.org/2000/svg", "image");
phase2Img.setAttribute("width", "100%");
phase2Img.setAttribute("height","100%");
newSvg.appendChild(phase2Img);

const newZoomLayer = document.createElementNS("http://www.w3.org/2000/svg", "g");
newZoomLayer.id = 'new-zoom-layer';
newSvg.appendChild(newZoomLayer);

const phase2Areas = document.createElementNS("http://www.w3.org/2000/svg", "g");
phase2Areas.id = 'phase2-areas';
newSvg.appendChild(phase2Areas);

imageContainer.appendChild(newSvg);



function createZoomGroupPhase2(idx) {

  svg.querySelectorAll('.hover-area').forEach(area => {
    area.style.pointerEvents = '';
  });
  
  const group = document.createElementNS("http://www.w3.org/2000/svg","g");
  group.classList.add("zoom-group-p2");
  group.dataset.index = idx;

  const cp = document.createElementNS("http://www.w3.org/2000/svg","clipPath");
  cp.id = `zr-clip-${idx}`;
  const poly = document.createElementNS("http://www.w3.org/2000/svg","polygon");
  poly.setAttribute("points", polygonPoints[idx]);
  cp.appendChild(poly);

  const im = document.createElementNS("http://www.w3.org/2000/svg","image");
  im.setAttribute("clip-path", `url(#zr-clip-${idx})`);
  im.setAttribute("x","0");
  im.setAttribute("y","0");
  im.setAttribute("width","100%");
  im.setAttribute("height","100%");
  im.setAttributeNS('http://www.w3.org/1999/xlink','href', imageReplacements[idx]);

  group.appendChild(cp);
  group.appendChild(im);
  newZoomLayer.appendChild(group);

  // transform-origin Fase2
  const to = transformOriginsPhase2[idx];
  group.style.transformOrigin = `${to.x}px ${to.y}px`;

  return group;
}
      const svgContainer = document.querySelector('.svg-container');
      svgContainer.appendChild(imageContainer);

svg.querySelectorAll('.hover-area').forEach(poly => {
  
  poly.addEventListener('click', () => {

    svg.querySelectorAll('.hover-area').forEach(area => {
      area.style.pointerEvents = 'none';
    });
    const idx = poly.dataset.index;
    const src = imageReplacements[idx];
    if (!src) return;

    // limpiar previos ANTES de animación
    newZoomLayer.querySelectorAll('.zoom-group-p2').forEach(el => el.remove());
    phase2Areas.innerHTML = '';

    const r = svg.getBoundingClientRect();
    Object.assign(imageContainer.style, {
      top:  `${r.top + window.scrollY}px`,
      left: `${r.left + window.scrollX}px`,
      width:  `${r.width}px`,
      height: `${r.height}px`
    });
    
    // 3) Inicia fade-out
    svg.classList.add('fade-out');
    svg.addEventListener('animationend', function fin1(ev) {
      if (ev.animationName !== 'fancyFadeOut') return;
      svg.removeEventListener('animationend', fin1);
    
      // **Aquí sí** lo mostramos, justo al acabar el fade-out
      imageContainer.style.display = 'block';
    
      svg.style.display = 'none';
      svg.classList.remove('fade-out');
    
      // … y arrancas el montaje de Fase 2 (fade-in, etc.) …
    });


    phase2Img.setAttributeNS('http://www.w3.org/1999/xlink','href', src);
    phase2Img.classList.add('fade-in');
    
    phase2Img.addEventListener('animationend', function onFadeIn() {
      phase2Img.removeEventListener('animationend', onFadeIn);

      

      createZoomGroupPhase2(idx);

      const a = document.createElementNS("http://www.w3.org/2000/svg","polygon");
      a.setAttribute("points", polygonPoints[idx]);
      a.classList.add("hover-area");
      a.dataset.index = idx;
      phase2Areas.appendChild(a);

      const textGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
      textGroup.id = 'phase2-center-text-group';
      newSvg.appendChild(textGroup);


      applyHover(newSvg, '#new-zoom-layer', 'zoom-group-p2');


      addPhase2Center();

      addPhase2Extras(idx);

      a.addEventListener('click', () => {
        
        const textGroup = newSvg.querySelector('#phase2-center-text-group');
            textGroup.innerHTML = ''; // Limpiar textos anteriores
        imageContainer.classList.add('fade-out');
        imageContainer.addEventListener('animationend', function fin2() {
          imageContainer.removeEventListener('animationend', fin2);
          imageContainer.style.display = 'none';
          imageContainer.classList.remove('fade-out');
          svg.style.display = 'block';
          svg.classList.add('fade-in');
          svg.addEventListener('animationend', function fin3() {
            svg.removeEventListener('animationend', fin3);
            svg.classList.remove('fade-in');
            
          });
        });
      });
    });

    
  });
});



function addPhase2Extras(idx) {
  
  
  const extras = phase2Extras[idx] || [];

  extras.forEach(({ id, x, y, href, selectedHref, width, height }) => {

    

    const img = document.createElementNS("http://www.w3.org/2000/svg", "image");
    img.id = id;
    img.classList.add("phase2-ball", "fade-in-inside"); // Añadir ambas clases
    img.setAttribute("x", x);
    img.setAttribute("y", y);
    img.setAttribute("width", width);
    img.setAttribute("height", height);
    img.setAttributeNS("http://www.w3.org/1999/xlink", "href", href);
    
    img.dataset.original = href;
    img.dataset.selected = selectedHref;
    
    img.addEventListener("click", (event) => {
      const target = event.currentTarget;

      // Restaurar otras bolas
      phase2Areas.querySelectorAll(".phase2-ball").forEach((b) => {
        b.classList.remove("grow");
        b.setAttributeNS("http://www.w3.org/1999/xlink", "href", b.dataset.original);
      });

      rotateCenterTo(target);
      target.classList.remove("fade-in-inside")
      target.classList.add("grow");
      target.setAttributeNS("http://www.w3.org/1999/xlink", "href", target.dataset.selected);

      const onScaleUpEnd = (ev) => {
        if (ev.propertyName !== "transform") return;

        target.removeEventListener("transitionend", onScaleUpEnd);

        target.style.opacity = "0.6";

          target.setAttributeNS("http://www.w3.org/1999/xlink", "href", target.dataset.selected);
          target.style.opacity = "1";
          target.class.add("fade-in-inside")
          target.classList.remove("grow");
      };

      const textGroup = newSvg.querySelector('#phase2-center-text-group');
      textGroup.innerHTML = ''; // Limpiar textos anteriores

      const key = img.id;
      const data = ballText[key];

      if (data) {
        const titleEl = document.createElementNS("http://www.w3.org/2000/svg", "text");
        titleEl.setAttribute("x", "50");
        titleEl.setAttribute("y", "38"); // Más arriba (antes: 45)
        titleEl.setAttribute("text-anchor", "middle");
        titleEl.setAttribute("class", "phase2-text-title");
        titleEl.textContent = data.title;
        textGroup.appendChild(titleEl);

        data.items.forEach((text, i) => {
          const line = document.createElementNS("http://www.w3.org/2000/svg", "text");
          line.setAttribute("x", "50");
          line.setAttribute("y", `${43 + i * 5}`); // Más arriba (antes: 52 + i * 5)
          line.setAttribute("text-anchor", "middle");
          line.setAttribute("class", "phase2-text-item");
          line.textContent = text;
          textGroup.appendChild(line);
        });
      }
    });

    phase2Areas.appendChild(img);
    
  });
  
}




function addPhase2Center() {
  const img = document.createElementNS("http://www.w3.org/2000/svg", "image");
  img.setAttribute("id",    phase2Center.id);
  img.setAttribute("class", phase2Center.class);
  img.setAttribute("x",     phase2Center.x);
  img.setAttribute("y",     phase2Center.y);
  img.setAttribute("width",  phase2Center.width);
  img.setAttribute("height", phase2Center.height);
  img.setAttributeNS("http://www.w3.org/1999/xlink", "href", phase2Center.href);

  // Guarda el ángulo actual en un data-attribute, empezando en 0
  img.dataset.angle = "0";

  phase2Areas.appendChild(img);

  // Texto central vacío
  const txt = document.createElementNS("http://www.w3.org/2000/svg","text");
  txt.setAttribute("id", "phase2-center-text");
  phase2Areas.appendChild(txt);
}

function rotateCenterTo(target) {
  const centerImg = newSvg.querySelector('#phase2-center');

  // 1) Calcula el centro de rotación
  const cb = centerImg.getBBox();
  const cx = cb.x + cb.width  / 2;
  const cy = cb.y + cb.height / 2;

  // 2) Calcula el nuevo ángulo de la misma forma
  const bb = target.getBBox();
  let angle = Math.atan2(
    (bb.y + bb.height/2) - cy,
    (bb.x + bb.width/2)  - cx
  ) * 180 / Math.PI + 90;

  // 3) Recoge el ángulo previo
  const prev = parseFloat(centerImg.dataset.angle || 0);

  // 4) Limpia cualquier animación previa
  const oldAnim = centerImg.querySelector('animateTransform');
  if (oldAnim) oldAnim.remove();

  // 5) Crea el <animateTransform> y lo arrancas
  const anim = document.createElementNS("http://www.w3.org/2000/svg", "animateTransform");
  anim.setAttribute("attributeName", "transform");
  anim.setAttribute("type",          "rotate");
  anim.setAttribute("from",          `${prev} ${cx} ${cy}`);
  anim.setAttribute("to",            `${angle} ${cx} ${cy}`);
  anim.setAttribute("dur",           "0.5s");
  anim.setAttribute("fill",          "freeze");
  centerImg.appendChild(anim);
  anim.beginElement();

  // 6) Guarda el nuevo ángulo
  centerImg.dataset.angle = angle.toString();
}
