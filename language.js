// GLOBAL cache para traducciones
window.cachedTranslations = {};

window.loadTranslations = function(lang) {
  if (window.cachedTranslations[lang]) {
    applyTranslations(window.cachedTranslations[lang]);
    return;
  }

  fetch(`./Translations/${lang}.json`)
    .then(res => res.json())
    .then(translations => {
      window.cachedTranslations[lang] = translations;
      applyTranslations(translations);
    });
};

function applyTranslations(translations) {
  document.querySelectorAll('[data-text]').forEach(el => {
    const key = el.dataset.text;
    if (translations[key]) {
      el.textContent = translations[key];
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const LANG_KEY = 'user-lang';
  let currentLang = localStorage.getItem(LANG_KEY) || 'en-US';

  // ✅ Carga inicial
  window.loadTranslations(currentLang);
  changeLanguageSelected(currentLang);

  // ✅ Listeners para cambio de idioma
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', e => {
      e.preventDefault();
      const newLang = opt.getAttribute('data-value');
      if (newLang === currentLang) return;
      changeLanguageSelected(newLang);
      currentLang = newLang;
      localStorage.setItem(LANG_KEY, newLang);
      window.loadTranslations(newLang);
    });
  });
});

function changeLanguageSelected(selectedLang) {
  const site = document.getElementById('selected_language');
  let text = '';
  switch (selectedLang) {
    case "en-US": text = 'English'; break;
    case "fr-FR": text = 'Français'; break;
    case "de-DE": text = 'Deutsch'; break;
    case "es-ES": text = 'Español'; break;
    case "nl-NL": text = 'Nederlands'; break;
  }
  site.textContent = text;
}
