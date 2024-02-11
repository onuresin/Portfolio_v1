window.addEventListener('scroll', function(e) {
    if(window.scrollY > 100) {
        document.querySelector('header').classList.add('scroll');
    } else {
        document.querySelector('header').classList.remove('scroll');
    }
})