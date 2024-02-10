const darkModeBtn = document.querySelectorAll(".darkModeBtn");
const lightModeBtn = document.querySelectorAll(".lightModeBtn");
const body = document.body

darkModeBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        body.classList.add("dark-mode");
        localStorage.setItem('dark-mode', 'true');
    });
});

lightModeBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        body.classList.remove("dark-mode");
        localStorage.removeItem('dark-mode');
    });
});

window.addEventListener('load', () => {
    const darkMode = localStorage.getItem('dark-mode');

    if (darkMode === 'true') {
        body.classList.add("dark-mode");
    }
})