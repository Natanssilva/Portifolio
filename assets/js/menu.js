

const ButtonCheckBox = document.getElementById('ck');

ButtonCheckBox.addEventListener('change', function DarkMode() {
    document.body.classList.toggle('dark')
})

window.sr = ScrollReveal({ reset: true });

sr.reveal('#home', {duration: 2200});
sr.reveal('#about', {duration: 2200});

