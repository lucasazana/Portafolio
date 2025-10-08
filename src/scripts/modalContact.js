  const openButton = document.getElementById("open-contact-modal");
  const modal = document.getElementById("contact-modal");
  openButton?.addEventListener("click", () => {
    modal.style.display = "block";
    modal.focus();
  });

  const closeButton = document.getElementById("close-modal");
  closeButton?.addEventListener("click", () => {
    modal.style.display = "none";
  });
  window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
        modal.style.display = 'none';
  }
  });
