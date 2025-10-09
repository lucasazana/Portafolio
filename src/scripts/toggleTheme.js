

// Función para establecer el tema
function setTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark');
    console.log('Tema cambiado: Oscuro');
  } else {
    document.body.classList.remove('dark');
    console.log('Tema cambiado: Claro');
  }
}

// Función para alternar el tema
function toggleTheme() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  console.log('Tema cambiado:', isDark ? 'Oscuro' : 'Claro');
}

// Lógica para el botón simple (si existe)
const themeBtn = document.querySelector('.theme-button');
if (themeBtn) {
  themeBtn.addEventListener('click', toggleTheme);
}

// Lógica para el dropdown de tema (si existe)
(function() {
  const btn = document.getElementById("theme-toggle-btn");
  const menu = document.getElementById("theme-menu");
  if (!btn || !menu) return;

  let open = false;
  btn.addEventListener("click", () => {
    open = !open;
    menu.style.display = open ? "block" : "none";
  });

  menu.querySelectorAll("button[data-theme]").forEach((option) => {
    option.addEventListener("click", (e) => {
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;
      const theme = target.getAttribute("data-theme");
      setTheme(theme);
      menu.style.display = "none";
      open = false;
    });
  });

  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!btn.contains(target) && !menu.contains(target)) {
      menu.style.display = "none";
      open = false;
    }
  });
})();