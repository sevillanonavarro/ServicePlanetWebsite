const track = document.getElementById('sliderTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const cards = Array.from(track.children);
    const cardWidth = cards[0].offsetWidth;
  
    let index = 0;
  
    // Duplicar tarjetas al principio y final
    cards.forEach(card => {
      track.appendChild(card.cloneNode(true));
      track.insertBefore(card.cloneNode(true), track.firstChild);
    });
  
    // Recalcular con duplicados
    const allCards = Array.from(track.children);
    const totalCards = allCards.length;
  
    // Centrar el carrusel
    index = cards.length; // posición inicial
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  
    function moveTo(newIndex) {
      track.style.transition = 'transform 0.5s ease';
      track.style.transform = `translateX(-${newIndex * cardWidth}px)`;
      index = newIndex;
    }




    nextBtn.addEventListener('click', () => {
      if (index >= totalCards - cards.length) {
        track.style.transition = 'none';
        index = cards.length - 1;
        track.style.transform = `translateX(-${index * cardWidth}px)`;
        setTimeout(() => moveTo(index + 1), 10);
      } else {
        moveTo(index + 1);
      }
    });
  
    prevBtn.addEventListener('click', () => {
      if (index <= 0) {
        track.style.transition = 'none';
        index = totalCards - cards.length;
        track.style.transform = `translateX(-${index * cardWidth}px)`;
        setTimeout(() => moveTo(index - 1), 10);
      } else {
        moveTo(index - 1);
      }
    });
  
    // Actualiza tamaño en resize
    window.addEventListener('resize', () => {
      const newWidth = allCards[0].offsetWidth;
      track.style.transition = 'none';
      track.style.transform = `translateX(-${index * newWidth}px)`;
    });

  document.getElementById('prevBtnMobile').addEventListener('click', () => {
    document.getElementById('prevBtn').click();
  });

  document.getElementById('nextBtnMobile').addEventListener('click', () => {
    document.getElementById('nextBtn').click();
  });

  

const sliderTrack = document.getElementById("sliderTrack");
let startX, endX, isDragging = false;

sliderTrack.addEventListener("touchstart", (e) => {
  // Detectamos donde empieza el toque
  startX = e.touches[0].pageX;
  isDragging = true;
});

sliderTrack.addEventListener("touchmove", (e) => {
  // Solo ejecutamos el movimiento si estamos arrastrando
  if (!isDragging) return;

  endX = e.touches[0].pageX;
  const moveX = startX - endX;

  // Movemos el carrusel en función del deslizamiento
  sliderTrack.style.transform = `translateX(${moveX}px)`;
});

sliderTrack.addEventListener("touchend", () => {
  // Detenemos el movimiento cuando el dedo deja de tocar
  isDragging = false;

  // Aquí se puede implementar la lógica para determinar si el carrusel se debe mover completamente
  // y actualizar la posición en consecuencia
});