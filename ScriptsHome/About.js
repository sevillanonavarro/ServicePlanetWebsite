// Variable para ajustar el ancho de la línea (en píxeles)
const lineAdjustment = -800; // Cambia este valor para ajustar el ancho extra de la línea

function adjustHorLine() {
  const companySpan = document.querySelector('.companyTextLinea');
  const horLine = document.querySelector('.hor-line');

  // Verificamos si los elementos están presentes en el DOM
  if (companySpan && horLine) {
      // Usamos getBoundingClientRect() para obtener las coordenadas del "COMPANY"
      const rect = companySpan.getBoundingClientRect();

      // Calculamos la distancia entre el borde izquierdo de la ventana y el borde derecho de la palabra "COMPANY"
      const rightEdge = rect.right;

      // Ajustamos el ancho de la línea hor-line para que llegue al borde de "COMPANY"
      // Añadimos el ajuste extra (lineAdjustment) al ancho
      horLine.style.width = `${rightEdge + lineAdjustment}px`;
  }
}

// Esperamos que el DOM esté completamente cargado
window.addEventListener('DOMContentLoaded', function () {
  // Ajustamos la línea inicialmente
  adjustHorLine();

  // Volver a ajustar la línea cuando la ventana cambie de tamaño
  window.addEventListener('resize', adjustHorLine);
});
