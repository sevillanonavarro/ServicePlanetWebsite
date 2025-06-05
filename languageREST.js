document.addEventListener('DOMContentLoaded', () => {
    const LANG_KEY = 'user-lang';
    let currentLang = localStorage.getItem(LANG_KEY) || 'en';
    // Función que carga el JSON y traduce la página
    function loadTranslations(lang) {
      fetch(`../Translations/${lang}.json`)
        .then(res => {
          if (!res.ok) throw new Error(`No se pudo cargar ${lang}.json`);
          return res.json();
        })
        .then(translations => {
          document.querySelectorAll('[data-text]').forEach(el => {
            const key = el.getAttribute('data-text');
            if (translations[key]) {
              el.textContent = translations[key];
            } else {
              console.warn(`Clave "${key}" no existe en ${lang}.json`);
            }
          });
        })
        .catch(err => console.error(err));
    }
  
    // Inicializamos al cargar
    loadTranslations(currentLang);
    changelaguageselected(currentLang)
  
    // Listener para cambio de idioma
    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.addEventListener('click', e => {
        e.preventDefault();
        const newLang = opt.getAttribute('data-value');
        if (newLang === currentLang) return;  // nada cambia
        changelaguageselected(newLang)
        currentLang = newLang;
        localStorage.setItem(LANG_KEY, newLang);
        loadTranslations(newLang);
      });
    });
  });
  
    function changelaguageselected(selectedLang){
      const site = document.getElementById('selected_language');
      let text = '';
      switch (selectedLang) {
        case "en-US":
          text = 'English';
          break;
        case "fr-FR":
          text = 'Français';
          break;
        case "de-DE":
          text = 'Deutsch';
          break;
        case "es-ES":
          text = 'Español';
          break;
        case "nl-NL":
          text = 'Nederlands';
          break;
      }
      site.textContent = text;
    }