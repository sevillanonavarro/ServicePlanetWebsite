const sliders = [document.getElementById('slider0'), document.getElementById('slider1')];
const buttons = document.querySelectorAll('.timeline-arrow-btn'); // [botón izquierda, botón derecha]

let current = 0;

function showSlider(index) {
  sliders.forEach((el, i) => {
    if (i === index) {
      el.style.display = 'block';
      el.classList.add('slider-animate');
      el.addEventListener('animationend', function handler() {
        el.classList.remove('slider-animate');
        el.removeEventListener('animationend', handler);
      });
    } else {
      el.style.display = 'none';
    }
  });

  // Mostrar u ocultar flechas según el slider actual
  buttons[0].style.display = (index === 0) ? 'none' : 'flex';       // Flecha izquierda oculta si estamos en el primero
  buttons[1].style.display = (index === sliders.length - 1) ? 'none' : 'flex'; // Flecha derecha oculta si estamos en el último
}

// Inicializa el slider y el estado de las flechas
showSlider(current);

buttons[0].addEventListener('click', () => {
  if (current > 0) {
    current--;
    showSlider(current);
  }
});

buttons[1].addEventListener('click', () => {
  if (current < sliders.length - 1) {
    current++;
    showSlider(current);
  }
});
