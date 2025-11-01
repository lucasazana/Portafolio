// funcion para establecer el tema y alternar iconos
function setTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    showThemeIcon('dark');
    localStorage.setItem('theme', 'dark');
    console.log('Tema cambiado: Oscuro');
  } else {
    document.documentElement.classList.remove('dark');
    showThemeIcon('light');
    localStorage.setItem('theme', 'light');
    console.log('Tema cambiado: Claro');
  }
}

function showThemeIcon(theme) {
  const sun = document.querySelector('.theme-button #theme-icon > .Sun');
  const moon = document.querySelector('.theme-button #theme-icon > .Moon');
  if (!sun || !moon) return;
  if (theme === 'dark') {
    sun.style.display = 'none';
    moon.style.display = 'block';
  } else {
    sun.style.display = 'block';
    moon.style.display = 'none';
  }
}

// alternar tema e icono
function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  showThemeIcon(isDark ? 'dark' : 'light');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  console.log('Tema cambiado:', isDark ? 'Oscuro' : 'Claro');
}

// guardar preferencia de tema en localStorage
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    showThemeIcon('dark');
  } else {
    document.documentElement.classList.remove('dark');
    showThemeIcon('light');
  }
});

// logica del boton 
const themeBtn = document.querySelector('.theme-button');
if (themeBtn) {
  themeBtn.addEventListener('click', toggleTheme);
}

