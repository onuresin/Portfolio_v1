const savedMode = localStorage.getItem('mode')

if (savedMode) {
    applyMode(savedMode);
}

function toggleMode(mode) {
    applyMode(mode);
    localStorage.setItem('mode', mode);
}

function applyMode(mode) {
    const body = document.body;

    if (mode === 'dark') {
        body.style.backgroundColor = '#333';
    } else {
        body.style.backgroundColor = '#fff';
    }
}