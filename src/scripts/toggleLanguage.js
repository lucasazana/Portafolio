const toggleButton = document.getElementById('language-toggle');
const menu = document.getElementById('language-menu');
const selectedLang = document.getElementById('selected-lang');
let open = false;
toggleButton.addEventListener('click', () => {
    open = !open;
    menu.style.display = open? 'block' : 'none';
});
document.querySelectorAll('#language-menu button').forEach(button => {
    button.addEventListener('click', async () => {
        selectedLang.textContent = button.dataset.lang.toUpperCase();
        menu.style.display = 'none';
        open = false;
        if (window.setLanguage) {
            await window.setLanguage(button.dataset.lang.toLowerCase());
        }
    });
});

document.addEventListener('click', (event) => {
    if (!toggleButton.contains(event.target) && !menu.contains(event.target)) {
        menu.style.display = 'none';
        open = false;
    }
});