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
    document.querySelector('.aboutBot h5').textContent = lang === 'en' ? "Born in Istanbul and graduated from Balıkesir Bandırma University with a degree in economics, this professional spent the first years of his life blending the energy of Istanbul. After successfully completing his university education and building a strong foundation in economics, he gained experience in the marketing sector for 4-5 years. This expert, who stands out with his strategic thinking, communication skills and analytical perspective, has mastered the dynamics in the sector with his experience in marketing. Adding value to his/her working life and open to continuous learning, this professional stands out with motivation and leadership in solving business challenges." :"İstanbul doğumlu ve Balıkesir Bandırma Üniversitesi iktisat bölümü mezunu olan bu profesyonel, hayatının ilk yıllarını İstanbul'un enerjisiyle harmanlayarak geçirdi. Üniversite eğitimini başarıyla tamamlayan ve iktisat alanında güçlü bir temel oluşturan kişi, ardından 4-5 yıl boyunca pazarlama sektöründe deneyim kazandı. Stratejik düşünme yeteneği, iletişim becerileri ve analitik bakış açısıyla öne çıkan bu uzman, pazarlama alanında elde ettiği tecrübelerle sektördeki dinamiklere hakim oldu. Çalışma hayatına değer katan ve sürekli öğrenmeye açık olan bu profesyonel, iş dünyasındaki zorlukları çözme konusunda motivasyon ve liderlikle ön plana çıkıyor."
}