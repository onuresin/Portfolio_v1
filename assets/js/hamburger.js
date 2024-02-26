function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const modal = document.querySelector('.modal');
    const select = document.querySelector('#langModal');

    hamburger.classList.toggle('active');
    modal.classList.toggle('active');

    if (modal.classList.contains('active')) {
        select.addEventListener('click', stopPropagation);
    } else {
        select.removeEventListener('click', stopPropagation);
    }

    modal.removeEventListener('click', toggleMenu);
    modal.addEventListener('click', toggleMenu);

    function stopPropagation(event) {
        event.stopPropagation();
    } // bu fonksiyon yukarıda tanımladığım modal içinde ki select elementinin tıklanmasına olanak sağlıyor
}