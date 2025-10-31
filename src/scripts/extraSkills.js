// Pausa animación del carrusel de habilidades adicionales al hacer hover o tocar
window.addEventListener('DOMContentLoaded', function () {
    const track = document.getElementById('extra-skills-track');
    if (track) {
    track.addEventListener('mouseenter', () => {
        track.style.animationPlayState = 'paused';
        });
        track.addEventListener('mouseleave', () => {
        track.style.animationPlayState = 'running';
        });
        track.addEventListener('touchstart', () => {
        track.style.animationPlayState = 'paused';
        });
        track.addEventListener('touchend', () => {
        track.style.animationPlayState = 'running';
        });
    }
});
