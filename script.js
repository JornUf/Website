//burger
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('change', () => {
        navLinks.classList.toggle('active');
        main.classList.toggle('blurred');
    });
});
