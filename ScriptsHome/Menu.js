AOS.init();
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
    

    
  
    


  



  