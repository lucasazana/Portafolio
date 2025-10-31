const toggleButton = document.getElementById('language-toggle');
const selectedLang = document.getElementById('selected-lang');
if (toggleButton && selectedLang) {
    toggleButton.addEventListener('click', async () => {
        const current = selectedLang.textContent.trim().toUpperCase();
        const next = current === 'ES' ? 'EN' : 'ES';
        selectedLang.textContent = next;
        if (window.setLanguage) {
            await window.setLanguage(next.toLowerCase());
        }
    });
}
