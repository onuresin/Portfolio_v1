window.addEventListener('scroll', function(e) {
    if(window.scrollY > 60) {
        document.querySelector('header').classList.add('scroll');
    } else {
        document.querySelector('header').classList.remove('scroll');
    }
})