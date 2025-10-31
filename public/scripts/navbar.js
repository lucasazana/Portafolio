// actualizar el color del navbar segun la seccion
const sectionIds = ["home", "skills", "projects", "experience", "contact"];
const navItems = document.querySelectorAll(".nav-links > li > a > div");

function updateActiveNavbar() {
  const scrollY = window.scrollY + window.innerHeight / 2;
  let activeIdx = 0;
  sectionIds.forEach((id, idx) => {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= scrollY) activeIdx = idx;
  });
  navItems.forEach((item, idx) => {
    if (idx === activeIdx) {
      item.classList.add("shadow-gengar-strong", "bg-gengar", "text-white");
      item.classList.remove("shadow-gengar-soft", "bg-gengar-pastel/40", "text-dark-card");
    } else {
      item.classList.remove("shadow-gengar-strong", "bg-gengar", "text-white");
      item.classList.add("shadow-gengar-soft", "bg-gengar-pastel/40", "text-dark-card");
    }
  });
}

window.addEventListener("scroll", updateActiveNavbar);
document.addEventListener("DOMContentLoaded", updateActiveNavbar);


// ocultar el navbar en pantallas pequeñas
function handleNavbarVisibility() {
  const navbar = document.getElementById("main-navbar");
  if (!navbar) return;
  if (window.innerWidth < 768) {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "flex";
  }
}

window.addEventListener("resize", handleNavbarVisibility);
document.addEventListener("DOMContentLoaded", handleNavbarVisibility);