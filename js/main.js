/* 1. INICIALIZACIÓN DE SWIPER (Carrusel) */
const swiper = new Swiper(".mySwiper", {
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});

/* 2. LÓGICA DEL MODAL DE CONTACTO */
let servicioActual = "";

function abrirContacto(servicio) {
    servicioActual = servicio;
    const modal = document.getElementById('modalContacto');
    const titulo = document.getElementById('modalTitulo');
    const input = document.getElementById('inputServicio');

    if (modal && titulo && input) {
        titulo.innerText = servicio;
        input.value = servicio;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Bloquea scroll fondo
    }
}

function cerrarContacto() {
    const modal = document.getElementById('modalContacto');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Habilita scroll fondo
    }
}

function irAWhatsApp() {
    const texto = encodeURIComponent('Hola Daniel, te contacto por el servicio de: ' + servicioActual);
    window.open(`https://wa.me/59895362619?text=${texto}`, '_blank');
}

// Cerrar modal si el usuario hace clic fuera de la caja blanca
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modalContacto');
    if (event.target === modal) {
        cerrarContacto();
    }
});

/* 3. EFECTO DE NAVBAR AL HACER SCROLL */
// Esto hace que el navbar reaccione cuando el usuario baja la página
window.addEventListener('scroll', function() {
    const headerNav = document.querySelector('header nav');
    if (window.scrollY > 50) {
        headerNav.classList.add('shadow-2xl');
        // Aquí podrías agregar cambios de color si lo deseas en el futuro
    } else {
        headerNav.classList.remove('shadow-2xl');
    }
});