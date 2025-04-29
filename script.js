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
    "Sobre Mí": "About Me",
    "Estudiante de Ingeniería en Sistemas y Redes Informáticas": "Systems and Computer Networks Engineering Student",
    "Soy Lorena Noemy Bermúdez Rodríguez, estudiante de Ingeniería en Sistemas y Redes Informáticas. Actualmente me encuentro en proceso de formación, fortaleciendo mis habilidades en programación, administración de redes y desarrollo web. Me distingo por ser una persona responsable, proactiva y con un gran compromiso por continuar creciendo y aportando en el ámbito tecnológico.":
    "I am Lorena Noemy Bermúdez Rodríguez, a student of Systems and Computer Networks Engineering. I am currently in training, strengthening my skills in programming, network administration, and web development. I am known for being responsible, proactive, and deeply committed to continuing to grow and contribute to the tech field.",
    "Descargar CV": "Download CV",
    "Proyectos": "Projects",
    "Huellitas Urbanas": "Urban Pawprints",
    "Es una aplicación web orientada a la gestión de un refugio de mascotas.": "A web application aimed at managing an animal shelter.",
    "Herramientas utilizadas: HTML5, CSS3, JavaScript, PHP.": "Tools used: HTML5, CSS3, JavaScript, PHP.",
    "Repositorio:": "Repository:",
    "Couples Game": "Couples Game",
    "Proyecto de formulario de juego de parejas en Visual Basic 2019 con lenguaje C#": "Matching game form project in Visual Basic 2019 using C# language",
    "Herramientas utilizadas: label, tablelayoutpanel y timer.": "Tools used: label, tablelayoutpanel, and timer.",
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
    'img/huellitas1.png',
    'img/huellitas2.png',
    'img/huellitas3.png'
  ],
  'Couples Game': [
    'img/couples1.png',
    'img/couples2.png',
  ]
};

// Asignamos evento click a cada imagen de proyecto
document.querySelectorAll('.proyecto img').forEach(img => {
  img.addEventListener('click', (e) => {
    const tituloProyecto = e.target.nextElementSibling.querySelector('h3').innerText;

    // Limpiamos el contenido anterior del modal
    modalContent.innerHTML = '';

    if (proyectosImagenes[tituloProyecto]) {
      const imagenes = proyectosImagenes[tituloProyecto];
      
      imagenes.forEach(src => {
        const imagen = document.createElement('img');
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

