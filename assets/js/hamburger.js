function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const modal = document.querySelector('.modal');

    hamburger.classList.toggle('active');
    modal.classList.toggle('active');

    modal.removeEventListener('click', toggleMenu);
    modal.addEventListener('click', toggleMenu);
}