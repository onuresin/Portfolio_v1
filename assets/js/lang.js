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
    document.querySelector('.aboutBot h5').textContent = lang === 'en' ? "I completed my undergraduate education in 2015 at Balıkesir University, studying Economics. In 2016, I started my business life in the foreign trade sector by working in the air export department.  I turned to the marketing sector. Between 2017-2023, I wanted my career to progress in a different line with the experience I gained in this sector. With this training, I gained strong knowledge and skills in HTML, CSS, Javascript and React. With my passion for learning, analytical thinking ability, problem solving capacity, teamwork and high communication skills, I would like to open a new page in my career as a Frontend Developer and gain new experiences. ":"Lisans eğitimimi 2015 yılında Balıkesir Üniversitesi'nde İktisat bölümünü okuyarak tamamladım. 2016 yılında iş hayatına dış ticaret sektöründe hava ihracat departmanında çalışarak başladım. Devamında pazarlama sektörüne yöneldim. 2017-2023 yılları arasında bu sektörde edindiğim tecrübelerle birlikte kariyerimin farklı bir çizgide ilerlemesini istedim. Acun Medya Akademi'de ‘Gelişmiş Yazılım Uzmanlığı’ eğitimini aldım. Bu eğitimle birlikte HTML, CSS, Javascript ve React konularında güçlü bilgi ve beceri kazandım. Öğrenmeye olan tutkum, analitik düşünme yeteneğim, problem çözme kapasitem, ekip çalışmasına yatkınlığım ve yüksek iletişim becerilerimle kariyerime Frontend Developer olarak yeni bir sayfa açmayı ve yeni tecrübeler edinmeyi amaçlıyorum."
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
    document.querySelector('.newsMid h6').textContent = lang === 'en' ? "React - Responsive Design" : "React - Responsive Tasarım"
    document.querySelector('.devJobTop h4').textContent = lang === 'en' ? "Devjobs Web App Project" : "Devjobs Web App Projesi"
    document.querySelector('.devJobMid h5').textContent = lang === 'en' ? "In this job board for software developers, you can find part-time or full-time international jobs.":"Yazılımcıları bekleyen bu iş ilanı uygulamasında, yarı zamanlı veya tam zamanlı uluslararası olarak çalışabileceğiniz ilanlar bulunmakta."
    document.querySelector('.devJobMid h6').textContent = lang === 'en' ? "React / Router - Responsive Design" : "React / Router - Responsive Tasarım"
    document.querySelector('.photoSnapMid h5').textContent = lang === 'en' ? "PhotoSnap is a paid app. Every photo has a story hidden in it, and it's a platform where you can share these hidden stories with those who follow you.":"PhotoSnap,ücretli bir uygulama. Her fotoğrafın içinde bir öykü gizlidir.Bu gizli öyküleri sizi takip edenlerle paylaşabileceğiniz bir platformdur."
    document.querySelector('.photoSnapMid h6').textContent = lang === 'en' ? "Only Java Script - CSS Responsive Design":"Sadece Java Script - CSS Responsive Tasarım"
    document.querySelector('.detailsEsmrt h4').textContent = lang === 'en' ? "Production / Marketing Specialist" : "Üretim / Pazarlama Sorumlusu"
    document.querySelector('.detailsEsmrt h5').textContent = lang === 'en' ? "I would visit customers face to face to negotiate weekly or monthly orders." : "Müşteriler ile yüz yüze görüşerek, haftalık veya aylık siparişler için görüşmeler için ziyarette bulunurdum."
    document.querySelector('.detailsEsmrt h6').textContent = lang === 'en' ? "I would make the production organization of incoming orders in production and make plans to complete deliveries to customers in a healthy way with daily plans.":" Üretimde gelen siparişlerin üretim organizasyonunu yapıp, günlük planlamalarla müşterilere teslimatları sağlıklı şekilde tamamlanlanmasının planlarını yapardım."
    document.querySelector('.detailsBilim h4').textContent = lang === 'en' ? "Medical Representative":"Tıbbi Mümessil"
    document.querySelector('.detailsBilim h5').textContent = lang === 'en' ? " As a result of the trainings I received, visiting the doctors in the regions we are responsible for with daily routines, informing them about the benefits of the medicines we are responsible for explaining to the patients in a short time and ensuring that they are prescribed.":" Aldığım eğitimler neticesinde sorumlu olduğumuz bölgelerde yer alan doktorları günlük rutinlerle ziyaret etmek.Anlatmakta sorumlu olduğumuz ilaçlar hakkında hastalara olan faydalarını kısa sürede bilgisini verip reçete edilmesini sağlamak."
    document.querySelector('.detailsRed h4').textContent = lang === 'en' ? "Field Sales Representative":"Saha Satış Temsilcisi"
    document.querySelector('.detailsRed h5').textContent = lang === 'en' ? "Making the plan of the day with my teammates I am responsible for, going to the field within the plans,":"Sorumlu olduğum ekip arkadaşlarımla günün planını yapıp, planlar dahilinde sahaya çıkarak,"
    document.querySelector('.detailsRed h6').textContent = lang === 'en' ? "selling the infrastructure in the region by giving information to the residents of the households one-to-one at the door.":"bölgede bulunan altyapının hanelerde oturanlara birebir kapıda bilgi verilerek satışını yapmak."
    document.querySelector('.detailsVdf h4').textContent = lang === 'en' ? "Field Sales Representative":"Saha Satış Temsilcisi"
    document.querySelector('.detailsVdf h5').textContent = lang === 'en' ? "To sell the infrastructure in the region by providing information to the residents of the households one-to-one at the door.":"Bölgede bulunan altyapının hanelerde oturanlara birebir kapıda bilgi verilerek satışını yapmak."
    document.querySelector('.detailsAsav h4').textContent = lang === 'en' ? "Air Export Sales Executive":"Hava İhracat Satış Sorumlusu"
    document.querySelector('.detailsAsav h5').textContent = lang === 'en' ? "Contacting the companies we have daily agreements with and getting the information if there are shipments to be exported, contacting the airline companies and getting the price, organizing the shipments and sending them to the destination.":"Günlük anlaşmalı olduğumuz firmalar ile iletişime geçip ihracatı yapılacak gönderileri varsa bilgilerini alıp hava yolu firmaları ile iletişime geçip fiyat alınarak, gönderilerin organizasyonu yapılıp, gideceği destinasyona gönderisini sağlamak."





}  