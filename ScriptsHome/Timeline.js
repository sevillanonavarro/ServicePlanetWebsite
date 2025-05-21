const sliders = [document.getElementById('slider0'), document.getElementById('slider1')];

// Justo después de definir `sliders`:
sliders.forEach((el, i) => {
  el.style.display = i === 0 ? 'block' : 'none';
});


let current = 0;

function showSlider(index) {
  sliders.forEach((el, i) => {
    if (i === index) {
      // Muéstralo y activa la animación
      el.style.display = 'block';
      el.classList.add('slider-animate');
      
      // Cuando termine la animación, limpiamos la clase
      el.addEventListener('animationend', function handler() {
        el.classList.remove('slider-animate');
        el.removeEventListener('animationend', handler);
      });
    } else {
      // Oculta los otros sin animación
      el.style.display = 'none';
    }
  });
}


// Inicializa: muestra solo el slider actual
showSlider(current);

const buttons = document.querySelectorAll('.timeline-arrow-btn');

buttons[0].addEventListener('click', () => {
  current = (current - 1 + sliders.length) % sliders.length;
  showSlider(current);
});

buttons[1].addEventListener('click', () => {
  current = (current + 1) % sliders.length;
  showSlider(current);
});