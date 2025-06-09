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
  ],
  'Boutique Escandalo': [
    'img/boutique1.jpeg',
    'img/boutique2.jpeg',
    'img/boutique3.jpeg',
    'img/boutique4.jpeg',
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

document.addEventListener("DOMContentLoaded", function () {
    const nav = document.getElementById("nav");
    const toggle = document.querySelector(".nav-responsive i");
    const links = nav.querySelectorAll("a");

    // Mostrar u ocultar menú en móvil
    toggle.addEventListener("click", () => {
      nav.classList.toggle("menu-visible");
    });

    // Resaltar el enlace activo al hacer clic
    links.forEach(link => {
      link.addEventListener("click", () => {
        // Eliminar clase activa de todos
        links.forEach(l => l.classList.remove("active"));
        // Agregar clase al actual
        link.classList.add("active");

        // Ocultar menú (modo móvil)
        nav.classList.remove("menu-visible");
      });
    });
  });
 // Agregar funcionalidad a los botones de idioma
    document.getElementById("english").addEventListener("click", () => {
    window.location.href = "index-en.html";
  });

    document.getElementById("spanish").addEventListener("click", () => {
    window.location.href = "index.html";
  });