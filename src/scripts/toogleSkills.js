  const hardButton = document.getElementById("hard-skills-button");
  const softButton = document.getElementById("soft-skills-button");
  const hardSkills = document.getElementById("hard-skills-cards");
  const softSkills = document.getElementById("soft-skills-cards");

  hardButton?.addEventListener("click", () => {
    hardButton.classList.add("active");
    hardButton.setAttribute("aria-pressed", "true");
    hardButton.setAttribute("aria-selected", "true");
    softButton?.classList.remove("active");
    softButton?.setAttribute("aria-pressed", "false");
    softButton?.setAttribute("aria-selected", "false");

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
    softButton.classList.add("active");
    softButton.setAttribute("aria-pressed", "true");
    softButton.setAttribute("aria-selected", "true");
    hardButton?.classList.remove("active");
    hardButton?.setAttribute("aria-pressed", "false");
    hardButton?.setAttribute("aria-selected", "false");

    if (softSkills) {
      softSkills.style.display = "grid";
      softSkills.setAttribute("aria-hidden", "false");
    }
    if (hardSkills) {
      hardSkills.style.display = "none";
      hardSkills.setAttribute("aria-hidden", "true");
    }
  });
