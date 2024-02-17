const langSelect = document.querySelectorAll('#lang');

langSelect.forEach(langSelect => {
    langSelect.addEventListener('change', ()=> {
        const lang = langSelect.value;
        updateTextContext(lang);
    })
});

function updateTextContext(lang) {
    const langOptions = document.querySelectorAll('#lang option');

    langOptions.forEach(option => {
        option.textContent = lang === 'en' ? (option.value === 'en' ? 'English' : 'Turkish') : (option.value === 'tr' ? 'Türkçe' : 'İngilizce')
    });
    document.querySelector('#about h6').textContent = lang === 'en' ? "Hello there! I'm" : 'Merhaba, ben';
}