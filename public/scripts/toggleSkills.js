  const hardButton = document.getElementById("hard-skills-button");
  const softButton = document.getElementById("soft-skills-button");
  const hardSkills = document.getElementById("hard-skills-cards");
  const softSkills = document.getElementById("soft-skills-cards");

  function setToggleVisual(active) {
    if (!hardButton || !softButton) return;
    const base =
      "toggle-button px-8 py-2 rounded-xl text-base md:text-lg font-semibold transition-all duration-250 shadow-none border-none";
    const activeClass = hardButton.dataset.activeClass || "bg-gengar-primary text-white";
    const inactiveClass = hardButton.dataset.inactiveClass || "bg-transparent text-gengar-primary dark:text-gengar-light";

    if (active === "hard") {
      hardButton.className = `${activeClass} ${base}`;
      softButton.className = `${inactiveClass} ${base}`;
      hardButton.setAttribute("aria-pressed", "true");
      hardButton.setAttribute("aria-selected", "true");
      softButton.setAttribute("aria-pressed", "false");
      softButton.setAttribute("aria-selected", "false");
    } else {
      softButton.className = `${activeClass} ${base}`;
      hardButton.className = `${inactiveClass} ${base}`;
      softButton.setAttribute("aria-pressed", "true");
      softButton.setAttribute("aria-selected", "true");
      hardButton.setAttribute("aria-pressed", "false");
      hardButton.setAttribute("aria-selected", "false");
    }
  }

  hardButton?.addEventListener("click", () => {
    setToggleVisual("hard");
    if (hardSkills) {
      hardSkills.style.display = "grid";
      hardSkills.setAttribute("aria-hidden", "false");
    }
    if (softSkills) {
      softSkills.style.display = "none";
      softSkills.setAttribute("aria-hidden", "true");
    }
  });

  softButton?.addEventListener("click", () => {
    setToggleVisual("soft");
    if (softSkills) {
      softSkills.style.display = "grid";
      softSkills.setAttribute("aria-hidden", "false");
    }
    if (hardSkills) {
      hardSkills.style.display = "none";
      hardSkills.setAttribute("aria-hidden", "true");
    }
  });

  // Inicializa el estado visual correcto al cargar
  setToggleVisual("hard");
