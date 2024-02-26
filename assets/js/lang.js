const langSelect = document.querySelectorAll('.langSelect');

//Dil değiştirme olayını takip eder
langSelect.forEach(langSelect => {
    langSelect.addEventListener('change', () => {
        const lang = langSelect.value;
        updateTextContext(lang, langSelect);
        localStorage.setItem('selected-language', lang);
    });
});

//sayfa yüklendiğinde localStorage en son hangi dil seçimi varsa onu basar
window.addEventListener('load', () => {
    const storedLang = localStorage.getItem('selected-language');

    if (storedLang) {
        langSelect.forEach((select) => {
            select.value = storedLang;
            updateTextContext(storedLang, select);
        });
    }
});

function updateTextContext(lang, langSelect) {
    const langOptions = document.querySelectorAll('option');

    langOptions.forEach(option => {
        option.textContent = lang === 'en' ? (option.value === 'en' ? '🇬🇧 English' : '🇹🇷 Turkish') : (option.value === 'tr' ? '🇹🇷 Türkçe' : '🇬🇧 İngilizce');
    });
    document.querySelector('#about h6').textContent = lang === 'en' ? "Hello there! I'm" : 'Merhaba, ben';
    document.querySelector('.aboutBot h5').textContent = lang === 'en' ? "Born in Istanbul and graduated from Balıkesir Bandırma University with a degree in economics, this professional spent the first years of his life blending the energy of Istanbul. After successfully completing his university education and building a strong foundation in economics, he gained experience in the marketing sector for 4-5 years. This expert, who stands out with his strategic thinking, communication skills and analytical perspective, has mastered the dynamics in the sector with his experience in marketing. Adding value to his/her working life and open to continuous learning, this professional stands out with motivation and leadership in solving business challenges." :"İstanbul doğumlu ve Balıkesir Bandırma Üniversitesi iktisat bölümü mezunu olan bu profesyonel, hayatının ilk yıllarını İstanbul'un enerjisiyle harmanlayarak geçirdi. Üniversite eğitimini başarıyla tamamlayan ve iktisat alanında güçlü bir temel oluşturan kişi, ardından 4-5 yıl boyunca pazarlama sektöründe deneyim kazandı. Stratejik düşünme yeteneği, iletişim becerileri ve analitik bakış açısıyla öne çıkan bu uzman, pazarlama alanında elde ettiği tecrübelerle sektördeki dinamiklere hakim oldu. Çalışma hayatına değer katan ve sürekli öğrenmeye açık olan bu profesyonel, iş dünyasındaki zorlukları çözme konusunda motivasyon ve liderlikle ön plana çıkıyor."
    document.querySelector('.projectTitle h4').textContent = lang === 'en' ? "My Projects" :"Projelerim"
    document.querySelector('.experienceTitle p').textContent = lang === 'en' ? "ExperIence" :"Deneyimerim"
    document.querySelector('.contactTitle h4').textContent = lang === 'en' ? "Contact" :"İletişim"
    document.querySelector('.aboutL').textContent = lang === 'en' ? "About Me" :"Hakkımda"
    document.querySelector('.aboutModal').textContent = lang === 'en' ? "About Me" :"Hakkımda"
    document.querySelector('.projectL').textContent = lang === 'en' ? "Projects" :"Projeler"
    document.querySelector('.projectsModal').textContent = lang === 'en' ? "Projects" :"Projeler"
    document.querySelector('.experienceL').textContent = lang === 'en' ? "My Experience" :"Deneyimlerim"
    document.querySelector('.experienceModal').textContent = lang === 'en' ? "My Experience" :"Deneyimlerim"
    document.querySelector('.contactL').textContent = lang === 'en' ? "Contact" :"İletişim"
    document.querySelector('.contactModal').textContent = lang === 'en' ? "Contact" :"İletişim"
    document.querySelector('.bmiTop h4').textContent = lang === 'en' ? "BMI Calculator" : "VKE Hesaplama"
    document.querySelector('.bmiMid h5').textContent = lang === 'en' ? "A tool to calculate your body mass index" : "Vücut kitle indeksinizi hesaplayabileceğiniz bir araç"
    document.querySelector('.bmiMid h6').textContent = lang === 'en' ? "React - Responsive Design" : "React - Responsive Tasarım"
    document.querySelector('.ageTop h4').textContent = lang === 'en' ? "Detailed Age Calculator" : "Detaylı Yaş Hesaplayıcı"
    document.querySelector('.ageMid h5').textContent = lang === 'en' ? "Calculates your age in days, months and years based on your current date" : "İçinde bulunduğunuz tarihe göre yaşınızı gün, ay ve yıl olarak size hesaplar"
    document.querySelector('.ageMid h6').textContent = lang === 'en' ? "React - Responsive Design" : "React - Responsive Tasarım"
    document.querySelector('.memoryTop h4').textContent = lang === 'en' ? "Memory Game" : "Hafıza Oyunu"
    document.querySelector('.memoryMid h5').textContent = lang === 'en' ? "In this project, a memory game with emojis was coded using react. When you restart at the end of each game, you can play with different emojis in different order." : "Bu projede react kullanılarak emojilerle hafıza oyunu kodlandı. Her oyun sonunda yeniden başlattığınızda farklı emojiler, farklı sırada olacak şekilde oynayabilirsiniz."
    document.querySelector('.memoryMid h6').textContent = lang === 'en' ? "React - Responsive Design" : "React - Responsive Tasarım"
    document.querySelector('.dictionMid h6').textContent = lang === 'en' ? "React - Responsive Design" : "React - Responsive Tasarım"
    document.querySelector('.quizMid h6').textContent = lang === 'en' ? "React - Responsive Design" : "React - Responsive Tasarım"
    document.querySelector('.quizTop h4').textContent = lang === 'en' ? "Front-End QuizApp (Turkish)" : "Front-End QuizApp (Türkçe)"
    document.querySelector('.quizMid h5').textContent = lang === 'en' ? "Front-End Question Application with 4 categories and 10 questions in each category" : "4 Kategoriden oluşan, her kategoride 10 soru bulunan Front-End Soru Uygulaması"
    document.querySelector('.dictionTop h4').textContent = lang === 'en' ? "English Dictionary App" : "İngilizce Sözlük Uygulaması"
    document.querySelector('.dictionMid h5').textContent = lang === 'en' ? "Application that teaches the pronunciation and spelling of English words" : "İngilizce kelimelerin okunuşlarını ve yazılışlarını öğreten uygulama"
    document.querySelector('.newsTop h4').textContent = lang === 'en' ? "Newslatter Registration" : "Bülten Kaydı"
    document.querySelector('.newsMid h5').textContent = lang === 'en' ? "A simple newsletter signup example. An example where you can go to the registration screen with a correctly spelled e-mail address." : "Basit bir bültene kayıt olma örneği. Doğru yazılmış bir mail adresi ile kayıt ekranına geçebildiğiniz bir örnek."

}  