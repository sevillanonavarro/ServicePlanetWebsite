const track = document.getElementById('sliderTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const cards = Array.from(track.children);
let cardWidth = cards[0].offsetWidth;

// 1) Duplicar tarjetas al principio y al final
cards.forEach(card => {
  track.appendChild(card.cloneNode(true));
  track.insertBefore(card.cloneNode(true), track.firstChild);
});

const allCards = Array.from(track.children);
const originals = cards.length;
const total = allCards.length;

// 2) Centrar en el bloque original
let index = originals;
track.style.transform = `translateX(-${index * cardWidth}px)`;

// 3) Función de movimiento con animación
function moveTo(newIndex) {
  index = newIndex;
  track.style.transition = 'transform 0.5s ease';
  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

// 4) Listener para “recablear” al bloque original justo al terminar cada transición
track.addEventListener('transitionend', () => {
  track.style.transition = 'none';
  
  // Si nos pasamos del final del bloque original...
  if (index >= originals * 2) {
    index = originals;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }
  // Si retrocedemos antes del inicio del bloque original...
  else if (index < originals) {
    index = originals + (index);
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }
});

// 5) Botones next / prev siempre avanzan o retroceden índice
nextBtn.addEventListener('click', () => {
  moveTo(index + 1);
});
prevBtn.addEventListener('click', () => {
  moveTo(index - 1);
});

// 6) Ajuste al cambiar tamaño de ventana
window.addEventListener('resize', () => {
  cardWidth = allCards[0].offsetWidth;
  track.style.transition = 'none';
  track.style.transform = `translateX(-${index * cardWidth}px)`;
});

// 7) Controles móviles (si existen)
document.getElementById('prevBtnMobile')?.addEventListener('click', () => {
  prevBtn.click();
});
document.getElementById('nextBtnMobile')?.addEventListener('click', () => {
  nextBtn.click();
});

// 8) Swipe táctil (opcional; puedes ampliarlo con lógica de umbral)
let startX = 0, isDragging = false;
track.addEventListener('touchstart', e => {
  startX = e.touches[0].pageX;
  isDragging = true;
  track.style.transition = 'none';
});
track.addEventListener('touchmove', e => {
  if (!isDragging) return;
  const moveX = startX - e.touches[0].pageX;
  track.style.transform = `translateX(-${index * cardWidth - moveX}px)`;
});
track.addEventListener('touchend', e => {
  isDragging = false;
  const endX = e.changedTouches[0].pageX;
  const delta = startX - endX;
  // Si el swipe supera 30px avanzamos/retrocedemos
  if (delta > 30)       moveTo(index + 1);
  else if (delta < -30) moveTo(index - 1);
  else                  moveTo(index); // volvemos a posición exacta
});
