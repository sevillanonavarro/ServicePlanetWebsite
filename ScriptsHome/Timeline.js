const sliders = [document.getElementById('slider0'), document.getElementById('slider1')];
let current = 0;

function showSlider(index) {
  sliders.forEach((el, i) => {
    el.style.display = i === index ? 'block' : 'none';
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