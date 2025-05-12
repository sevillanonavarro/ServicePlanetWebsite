AOS.init({   
  once: true          // ← aquí: anima solo 1 vez
});
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
  
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('open');
    });


    function adjustBackgroundShapeHeight() {
      const mainSection = document.querySelector('.section-wrapper');
      const shape = document.querySelector('.background-shape');
    
      // Añade margen extra para asegurar que el recorte cubra todo
      const extra = 180; // puedes ajustar este valor según necesidad
      shape.style.height = (mainSection.offsetHeight + extra) + 'px';
    }
    
    window.addEventListener('load', adjustBackgroundShapeHeight);
    window.addEventListener('resize', adjustBackgroundShapeHeight);
    

    
    const toggle = document.querySelector('.language-selector .dropdown-toggle');
    const menu   = document.querySelector('.language-menu');
    
    toggle.addEventListener('click', e => {
      e.stopPropagation();
      menu.classList.toggle('show');
    });
    
    // para cerrar al hacer click fuera
    document.addEventListener('click', () => {
      menu.classList.remove('show');
    });
    


  



  