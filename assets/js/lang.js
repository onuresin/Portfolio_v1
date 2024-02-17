const langSelect = document.querySelector('#lang');

langSelect.addEventListener('change', () => {
    const lang = langSelect.value;
    updateTextContent(lang);
});

function updateTextContent(lang) {
    if(lang === 'en') {
        document.querySelector('#lang option[value="en"]').textContent = 'English';
        document.querySelector('#lang option[value="tr"]').textContent = 'Turkish';
        document.querySelector('#lang option[value="en"]').selected = true;

        document.querySelector('#about h6').textContent = "Hello there! I'm";
    } else {
        document.querySelector('#lang option[value="tr"]').textContent = 'Türkçe';
        document.querySelector('#lang option[value="en"]').textContent = 'English';
        document.querySelector('#lang option[value="tr"]').selected = true;

        document.querySelector('#about h6').textContent = 'Merhaba, ben';
    }
}