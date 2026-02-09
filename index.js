// Add subtle animation to input on page load
window.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('main input');
    input.style.opacity = 0;
    input.style.transform = 'translateY(20px)';
    setTimeout(() => {
        input.style.transition = 'all 0.6s ease';
        input.style.opacity = 1;
        input.style.transform = 'translateY(0)';
    }, 300);
});

// Add background parallax effect on scroll (optional)
window.addEventListener('scroll', () => {
    const main = document.querySelector('main');
    const offset = window.scrollY;
    main.style.backgroundPositionY = `${offset * 0.5}px`;
});
