
  // --- logica del modal para abir y cerrar ---
  const openButton = document.getElementById("open-contact-modal");
  const modal = document.getElementById("contact-modal");
  openButton?.addEventListener("click", () => {
    modal.style.display = "flex";
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

  // --- funcion para mostrar mensaje de exito tras completar el form ---
  function showFormSuccess({ closeModal }) {
    let success = document.getElementById('form-success-msg');
    if (!success) {
      success = document.createElement('div');
      success.id = 'form-success-msg';
      success.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/40';
      success.innerHTML = `<div class="bg-white dark:bg-dark-card rounded-2xl shadow-lg p-8 text-center max-w-xs mx-auto animate-fade-in">
        <h4 class="text-lg font-bold mb-2 text-gengar-primary">¡Mensaje enviado!</h4>
        <p class="text-gray-700 dark:text-gray-200 mb-4">Gracias por contactarme. Te responderé pronto.</p>
        <button class="mt-2 px-4 py-2 bg-gengar-primary text-white rounded-xl font-semibold" id="close-success-form">Cerrar</button>
      </div>`;
      document.body.appendChild(success);
      document.getElementById('close-success-form').onclick = () => {
        success.remove();
        if (closeModal && typeof modal !== 'undefined') {
          modal.style.display = 'none';
        }
      };
    }
  }

  // --- envio ajax para ambos forms ---
  document.addEventListener('DOMContentLoaded', function () {
    // form principal
    const mainContactForm = document.querySelector('form[name="contact-main"]');
    if (mainContactForm) {
      mainContactForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        const formData = new FormData(mainContactForm);
        if (!formData.get('form-name')) {
          formData.append('form-name', 'contact-main');
        }
        try {
          await fetch('/', {
            method: 'POST',
            body: formData,
          });
          showFormSuccess({ closeModal: false });
          mainContactForm.reset();
        } catch (err) {
          alert('Hubo un error al enviar el formulario. Intenta de nuevo.');
        }
      });
    }
    // form modal
    if (modal) {
      const contactModalForm = modal.querySelector('form[name="contact-modal"]');
      if (contactModalForm) {
        contactModalForm.addEventListener('submit', async function (e) {
          e.preventDefault();
          const formData = new FormData(contactModalForm);
          if (!formData.get('form-name')) {
            formData.append('form-name', 'contact-modal');
          }
          try {
            await fetch('/', {
              method: 'POST',
              body: formData,
            });
            showFormSuccess({ closeModal: true });
            contactModalForm.reset();
          } catch (err) {
            alert('Hubo un error al enviar el formulario. Intenta de nuevo.');
          }
        });
      }
    }
  });
