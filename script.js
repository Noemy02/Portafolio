let menuVisible = false;
//Función que oculta o muestra el menú
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
const translations = {
    "La creatividad mueve el mundo": "Creativity moves the world",
    "INICIO": "HOME",
    "SOBRE MI": "ABOUT ME",
    "PROYECTOS": "PROJECTS",
    "CONTACTO": "CONTACT",
    "Sobre Mí": "About Me",
    "Estudiante de Ingeniería en Sistemas y Redes Informáticas": "Systems and Computer Networks Engineering Student",
    "Soy Lorena Noemy Bermúdez Rodríguez, estudiante de Ingeniería en Sistemas y Redes Informáticas. Actualmente me encuentro en proceso de formación, fortaleciendo mis habilidades en programación, administración de redes y desarrollo web. Me distingo por ser una persona responsable, proactiva y con un gran compromiso por continuar creciendo y aportando en el ámbito tecnológico.":
    "I am Lorena Noemy Bermúdez Rodríguez, a student of Systems and Computer Networks Engineering. I am currently in training, strengthening my skills in programming, network administration, and web development. I am known for being responsible, proactive, and deeply committed to continuing to grow and contribute to the tech field.",
    "Descargar CV": "Download CV",
    "Proyectos": "Projects",
    "Huellitas Urbanas": "Urban Pawprints",
    "Objetivo del proyecto": "Project Objective:",
     "Desarrollar una aplicación web para facilitar la gestión integral de un refugio de mascotas, permitiendo el registro, seguimiento y adopción de animales, así como la administración de recursos y personal del refugio.": "To develop a web application to facilitate the comprehensive management of a pet shelter, enabling the registration, tracking, and adoption of animals, as well as the management of shelter resources and staff.",
     "Descripción general del proceso de trabajo: El proyecto se llevó a cabo en distintas etapas: análisis de requerimientos, diseño de la interfaz de usuario, desarrollo de funcionalidades principales como registro de mascotas, perfiles de adopción, y panel administrativo.":
    "Workflow Overview: The project was carried out in several stages: requirements analysis, user interface design, development of core features such as pet registration, adoption profiles, and an administrative dashboard.",
    "Rol y responsabilidades en el proyecto: Me desempeñé como administradora de base de datos, siendo responsable del diseño lógico y físico de la base de datos.":
    "Role and responsibilities in the project: I served as a database administrator, being responsible for the logical and physical design of the database.",
    "Tecnologias Utilizadas:": "Technologies Used:",
    "Repositorio:": "Repository:",
    "Couples Game": "Couples Game",
  "Objetivo del proyecto:  Desarrollar un juego interactivo de emparejamiento de cartas como aplicación de escritorio, con el objetivo de ofrecer una experiencia lúdica y dinámica, utilizando tecnologías de desarrollo visual y programación orientada a objetos.":
    "Project Objective: To develop an interactive card matching game as a desktop application, aiming to provide a playful and dynamic experience using visual development technologies and object-oriented programming.",
  "Descripción general del proceso de trabajo: Se implementó la lógica del juego en C#, aprovechando el entorno Visual Basic 2019 para el diseño de la interfaz gráfica. Se utilizaron componentes como Label, TableLayoutPanel y Timer para representar las cartas, organizar la disposición de elementos y controlar el tiempo de juego.":
    "Workflow Overview: The game logic was implemented in C#, using the Visual Basic 2019 environment for graphical interface design. Components such as Label, TableLayoutPanel, and Timer were used to represent cards, organize layout, and control game time.",
  "Rol y responsabilidades en el proyecto: Me desempeñé como desarrolladora full-stack, liderando tanto el diseño de la interfaz de usuario como la implementación de la lógica del juego.":
    "Role and responsibilities in the project: I worked as a full-stack developer, leading both the user interface design and the implementation of the game logic.",
  "Tecnologias Utilizadas: C# (utilizando Visual Basic 2019 como entorno de desarrollo).":
    "Technologies Used: C# (using Visual Basic 2019 as the development environment).",
  "Boutique Escandalo": "Scandal Boutique",
  "Objetivo del proyecto: Desarrollar un sistema web para la gestión de productos, usuarios y procesos básicos de una boutique, como parte de un proyecto académico enfocado en la creación de aplicaciones funcionales para pequeñas empresas.":
    "Project Objective: Web-based system for managing a boutique, developed as an academic project. It allows you to manage products, search, and manage users through a simple web interface.",
  "Descripción general del proceso de trabajo: El desarrollo del sistema se estructuró en fases: análisis de requerimientos, diseño de la base de datos, creación de la interfaz de usuario y desarrollo del backend utilizando un framework de Python (Flask o Django).":
    "Workflow Overview: The system development was structured in phases: requirements analysis, database design, user interface creation, and backend development using a Python framework (Flask or Django).",
  "Rol y responsabilidades en el proyecto: Me desempeñé como diseñadora de interfaz de usuario, siendo responsable del diseño visual de la plataforma. Definí la estructura de navegación, los esquemas de color, tipografía y disposición de los elementos para lograr una experiencia estética y funcional, enfocada en la usabilidad y accesibilidad para el usuario final.": "Role and responsibilities in the project I worked as a user interface designer, responsible for the visual design of the platform. I defined the navigation structure, color schemes, typography, and element layout to achieve an aesthetic and functional user experience focused on usability and accessibility.",
    "Tecnologias Utilizadas HTML, CSS y Python (Flask o Django).": "Technologies Used HTML, CSS, Python (Flask or Django).",
    "Todos los derechos reservados.": "All rights reserved.",
    "© 2025 Lorena Noemy Bermúdez Rodríguez. Todos los derechos reservados.": "© 2025 Lorena Noemy Bermúdez Rodríguez. All rights reserved."
};

// Traducciones inversas
const translationsES = {};
for (let key in translations) {
    translationsES[translations[key]] = key;
}

function translatePage(lang) {
    const dict = lang === 'en' ? translations : translationsES;
    const elements = document.body.querySelectorAll("*");

    elements.forEach(el => {
        el.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                const originalText = node.textContent.trim().replace(/\s+/g, ' ').normalize('NFC');
                if (dict[originalText]) {
                    node.textContent = dict[originalText];
                }
            }
        });
    });
const cvLink = document.getElementById('cv-link');
const cvText = document.getElementById('cv-text');

if (lang === 'en') {
    cvLink.href = 'CV-Lorena-Bermudez-Rodriguez-EN.pdf';
    cvText.textContent = 'Download CV';
} else {
    cvLink.href = 'CV-Lorena-Bermudez-Rodriguez-ES.pdf';
    cvText.textContent = 'Descargar CV';
}

}

// Botón selector de idioma
document.getElementById('language-button').addEventListener('click', () => {
    document.getElementById('language-options').classList.toggle('hidden');
});

document.getElementById('english').addEventListener('click', () => {
    translatePage('en');
    localStorage.setItem('language', 'en');
    document.getElementById('language-options').classList.add('hidden');
});

document.getElementById('spanish').addEventListener('click', () => {
    translatePage('es');
    localStorage.setItem('language', 'es');
    document.getElementById('language-options').classList.add('hidden');
});

// Aplicar idioma guardado al cargar
window.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language');
    translatePage(savedLanguage || 'es');
});

const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const closeModal = document.getElementsByClassName('close')[0];
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentSlide = 0;
let slideInterval;

// Definimos las imágenes de cada proyecto
const proyectosImagenes = {
  'Huellitas Urbanas': [
    'Img/huellitas1.png',
    'Img/huellitas2.png',
    'Img/huellitas3.png'
  ],
  'Couples Game': [
    'Img/couples1.png',
    'Img/couples2.png',
  ],
  'Boutique Escandalo': [
    'Img/boutique1.jpeg',
    'Img/boutique2.jpeg',
    'Img/boutique3.jpeg',
    'Img/boutique4.jpeg',
  ]
};

// Asignamos evento click a cada imagen de proyecto
document.querySelectorAll('.proyecto img').forEach(img => {
  img.addEventListener('click', (e) => {
    const tituloProyecto = e.target.getAttribute('data-title'); // cambio aquí

    // Limpiamos el contenido anterior del modal
    modalContent.innerHTML = '';

    if (proyectosImagenes[tituloProyecto]) {
      const imagenes = proyectosImagenes[tituloProyecto];
      
      imagenes.forEach(src => {
        const imagen = document.createElement('Img');
        imagen.src = src;
        imagen.style.display = 'none'; // ocultar todas inicialmente
        modalContent.appendChild(imagen);
      });

      currentSlide = 0;
      showSlide(currentSlide);

      modal.style.display = "block";

      startCarousel();
    }
  });
});

// Función para mostrar la imagen actual
function showSlide(index) {
  Array.from(modalContent.children).forEach(img => img.style.display = 'none');
  modalContent.children[index].style.display = 'block';
}

// Función para iniciar el carrusel automático
function startCarousel() {
  stopCarousel();
  slideInterval = setInterval(() => {
    nextSlide();
  }, 2000); // cambia cada 2 segundos
}

// Detener el carrusel
function stopCarousel() {
  clearInterval(slideInterval);
}

// Función para ir al siguiente slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % modalContent.children.length;
  showSlide(currentSlide);
}

// Función para ir al slide anterior
function prevSlide() {
  currentSlide = (currentSlide - 1 + modalContent.children.length) % modalContent.children.length;
  showSlide(currentSlide);
}

// Eventos de las flechas
nextBtn.addEventListener('click', () => {
  nextSlide();
  restartCarousel();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  restartCarousel();
});

// Reiniciar el carrusel automático cuando se navega manualmente
function restartCarousel() {
  stopCarousel();
  startCarousel();
}

// Cerrar el modal
closeModal.onclick = function() {
  modal.style.display = "none";
  stopCarousel();
}

// Cerrar si se da clic fuera del contenido
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    stopCarousel();
  }
}

