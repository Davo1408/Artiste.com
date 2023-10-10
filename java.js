document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].style.display = 'block';

    // Mostrar la siguiente diapositiva cada 3 segundos
    setInterval(function() {
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.display = 'block';
    }, 3000);

    // Evento para abrir el hipervínculo al hacer clic en una imagen
    slides.forEach(slide => {
        slide.addEventListener('click', function() {
            const url = slide.getAttribute('data-url');
            window.location.href = url;
        });
    });
});
