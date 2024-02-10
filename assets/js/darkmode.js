const darkModeBtn = document.querySelectorAll(".darkModeBtn");
const lightModeBtn = document.querySelectorAll(".lightModeBtn");
const body = document.body

darkModeBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        body.classList.add("dark-mode");
    });
});

lightModeBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        body.classList.remove("dark-mode");
    });
});