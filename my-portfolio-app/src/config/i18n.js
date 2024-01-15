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
  "nav.option2": "Web Dev",
  "banner.name": "Hello, I'm Rachel Erin Frederickson",
  "box.1": "View my Web Development Projects",
  "box.2": "View my Art Gallery",
  "box.clickhere": "Click Here",
  "about.title": "About Me",
  "about.greetings": "Greetings! I'm Rachel, a multifaceted creator weaving the vibrant threads of acrylic paintings and the intricate codes of web development. With a palette of colors on canvas and a keyboard at my fingertips, I navigate between two worlds, infusing creativity into pixels and strokes alike.",
  "about.acrylic.title": "Acrylic Alchemy",
  "about.acrylic.description": "Dive into my gallery, where each brushstroke narrates a story. My acrylic paintings are more than just colors on canvas; they are a journey into emotions, nature, and the beauty that surrounds us. From bold strokes to delicate details, every piece is a testament to my passion for art.",
  "about.digital.title": "Digital Symphony",
  "about.digital.description": "Beyond the canvas, I orchestrate digital symphonies. As a skilled web developer, I architect online experiences that transcend the ordinary. Navigating through the ever-evolving landscape of technology, I bring ideas to life in the virtual realm, crafting websites that are as visually captivating as they are seamlessly functional.",
  "about.join.title": "Join Me",
  "about.join.description": "Join me on this creative odyssey where art and technology converge. Whether you're captivated by the vivid hues of my paintings or intrigued by the code that powers digital wonders, welcome to a space where creativity knows no bounds. Let's embark on this artistic and digital journey together.",
  "contact.title": "Contact me",
  "contact.name": "Name",
  "contact.email": "Email",
  "contact.message": "Message",
        "formcontact.send": "Send Message",
    "placeholder.name": "What's your name?",
  "placeholder.email": "What's your email address?",
  "placeholder.message": "Send me an email, I'll get back to you when I can",
  "contact.send": "Send Message",
},
        },
        es: {
          translation:{
  "nav.home": "Inicio",
  "nav.about": "Acerca de",
  "nav.contact": "Contacto",
  "nav.portfolio": "Portafolio",
  "nav.option1": "Arte",
  "nav.option2": "Desarrollo Web",
  "banner.name": "Hola, soy Rachel Erin Frederickson",
  "box.1": "Ver mis proyectos de desarrollo web",
  "box.2": "Ver mi galería de arte",
  "box.clickhere": "Haz clic aquí",
  "about.title": "Acerca de mí",
  "about.greetings": "¡Saludos! Soy Rachel, una creadora polifacética que teje los hilos vibrantes de pinturas acrílicas y los códigos intrincados del desarrollo web. Con una paleta de colores en lienzo y un teclado al alcance de mis dedos, navego entre dos mundos, infundiendo creatividad en píxeles y pinceladas por igual.",
  "about.acrylic.title": "Alquimia Acrílica",
  "about.acrylic.description": "Sumérgete en mi galería, donde cada pincelada narra una historia. Mis pinturas acrílicas son más que simples colores en lienzo; son un viaje a las emociones, la naturaleza y la belleza que nos rodea. Desde trazos audaces hasta detalles delicados, cada obra es un testimonio de mi pasión por el arte.",
  "about.digital.title": "Sinfonía Digital",
  "about.digital.description": "Más allá del lienzo, orquesto sinfonías digitales. Como desarrolladora web experta, diseño experiencias en línea que trascienden lo ordinario. Navegando a través del siempre cambiante paisaje tecnológico, doy vida a ideas en el ámbito virtual, creando sitios web tan visualmente cautivadores como funcionalmente impecables.",
  "about.join.title": "Únete a mí",
  "about.join.description": "Únete a mí en esta odisea creativa donde el arte y la tecnología se encuentran. Ya sea que te cautiven los tonos vívidos de mis pinturas o te intrigue el código que impulsa maravillas digitales, bienvenido a un espacio donde la creatividad no conoce límites. Embarquémonos juntos en este viaje artístico y digital.",
  "contact.title": "Contáctame",
  "contact.name": "Nombre",
  "contact.email": "Correo Electrónico",
  "contact.message": "Mensaje",
      "contact.send": "Enviar Mensaje",
    "placeholder.name": "¿Cuál es tu nombre?",
  "placeholder.email": "¿Cuál es tu dirección de correo electrónico?",
  "placeholder.message": "Envíame un correo electrónico, te responderé cuando pueda",
  "placeholder.send": "Enviar Mensaje",
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
