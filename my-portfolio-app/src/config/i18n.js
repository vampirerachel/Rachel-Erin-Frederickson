// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "nav.home": "Home",
  "nav.about": "About",
  "nav.contact": "Contact",
  "nav.portfolio": "Portfolio",
  "nav.option1": "Art",
  "nav.option2": "Web Dev"
      },
        },
        es: {
          translation:{
  "nav.home": "Inicio",
  "nav.about": "Acerca de",
  "nav.contact": "Contacto",
  "nav.portfolio": "Portafolio",
  "nav.option1": "Arte",
  "nav.option2": "Desarrollo Web"
}
      }
    // Add more languages as needed
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
