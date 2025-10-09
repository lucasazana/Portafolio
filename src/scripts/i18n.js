window.setLanguage = async function(lang) {
	function getNested(obj, path) {
		return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
	}
	try {
		localStorage.setItem('lang', lang);
		const res = await fetch(`/src/assets/i18n/${lang}.json`);
		const dict = await res.json();
		document.querySelectorAll('[data-i18n]').forEach(el => {
			const key = el.getAttribute('data-i18n');
			const value = getNested(dict, key);
			if (value) el.textContent = value;
		});
		document.querySelectorAll('[data-i18n-title]').forEach(el => {
			const key = el.getAttribute('data-i18n-title');
			const value = getNested(dict, key);
			if (value) el.textContent = value;
		});
		document.querySelectorAll('[data-i18n-desc]').forEach(el => {
			const key = el.getAttribute('data-i18n-desc');
			const value = getNested(dict, key);
			if (value) el.textContent = value;
		});

        document.querySelectorAll('[data-i18n-category]').forEach(el => {
			const key = el.getAttribute('data-i18n-category');
			const value = getNested(dict, key);
			if (value) el.textContent = value;
		});

		document.querySelectorAll('[data-i18n-label]').forEach(el => {
			const key = el.getAttribute('data-i18n-label');
			const value = getNested(dict, key);
			if (value) el.textContent = value;
		});
		document.querySelectorAll('[data-i18n-company]').forEach(el => {
			const key = el.getAttribute('data-i18n-company');
			const value = getNested(dict, key);
			if (value) el.textContent = value;
		});
		document.querySelectorAll('[data-i18n-location]').forEach(el => {
			const key = el.getAttribute('data-i18n-location');
			const value = getNested(dict, key);
			if (value) el.textContent = value;
		});
		document.querySelectorAll('[data-i18n-modality]').forEach(el => {
			const key = el.getAttribute('data-i18n-modality');
			const value = getNested(dict, key);
			if (value) el.textContent = value;
		});
		document.querySelectorAll('[data-i18n-start]').forEach(el => {
			const key = el.getAttribute('data-i18n-start');
			const value = getNested(dict, key);
			if (value) el.textContent = value;
		});
		document.querySelectorAll('[data-i18n-end]').forEach(el => {
			const key = el.getAttribute('data-i18n-end');
			const value = getNested(dict, key);
			if (value) el.textContent = value;
		});
		document.querySelectorAll('[data-i18n-status]').forEach(el => {
			const key = el.getAttribute('data-i18n-status');
			const value = getNested(dict, key);
			if (value) el.textContent = value;
		});
		document.querySelectorAll('[data-i18n-achievement]').forEach(el => {
			const key = el.getAttribute('data-i18n-achievement');
			const value = getNested(dict, key);
			if (value) el.textContent = value;
		});

		document.querySelectorAll('[data-i18n-label]').forEach(el => {
			const key = el.getAttribute('data-i18n-label');
			const value = getNested(dict, key);
			if (value) {
				if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
					el.placeholder = value;
				} else {
					el.textContent = value;
				}
			}
		});
        
		document.querySelectorAll('[data-i18n]').forEach(el => {
			const key = el.getAttribute('data-i18n');
			const value = getNested(dict, key);
			if (value) el.textContent = value;
		});

		document.querySelectorAll('[data-i18n-social]').forEach(el => {
			const key = el.getAttribute('data-i18n-social');
			const value = getNested(dict, key);
			if (value) el.textContent = value;
		});
        
        document.querySelectorAll('[data-i18n-modal-title]').forEach(el => {
			const key = el.getAttribute('data-i18n-modal-title');
			const value = getNested(dict, key);
			if (value) el.textContent = value;
		});
        
		document.querySelectorAll('[data-i18n-modal-close]').forEach(el => {
			const key = el.getAttribute('data-i18n-modal-close');
			const value = getNested(dict, key);
			if (value) el.textContent = value;
		});

		document.querySelectorAll('[data-i18n^="footer."]').forEach(el => {
			const key = el.getAttribute('data-i18n');
			const value = getNested(dict, key);
			if (value) el.textContent = value;
		});
	} catch (e) {
		console.error('Error loading language:', lang, e);
	}
};

// carga el idioma por defecto al cargar la pagina
document.addEventListener('DOMContentLoaded', () => {
	const savedLang = localStorage.getItem('lang') || 'es';
	window.setLanguage(savedLang);
});