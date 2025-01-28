/*accordion store locator*/
let acc = document.getElementsByClassName("accordion");

function funAccordion() {
  // Contenidos para los paneles, definidos en JS (si los necesitas más adelante)
  const panelContents = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since."
  ];

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      console.log("Accordion clicked:", this);

      // Verifica si el acordeón clicado ya estaba activo
      const isActive = this.classList.contains("active");

      // Cierra todos los paneles
      for (let j = 0; j < acc.length; j++) {
        let panel = acc[j].nextElementSibling;
        acc[j].classList.remove("active");
        panel.style.maxHeight = "0"; // Cerrar todos los paneles
      }

      // Si no estaba activo, abrir este y agregar su contenido
      if (!isActive) {
        this.classList.add("active");
        let panel = this.nextElementSibling;
        panel.style.maxHeight = panel.scrollHeight + "px"; // Abrir panel
      }
    });
  }
}

// Llama la función para asignar los eventos de clic
funAccordion();

document.addEventListener("DOMContentLoaded", function () {
  // Seleccionamos el formulario del footer
  const newsletterForm = document.getElementById("newsletterForm");

  // Agregamos un evento 'submit' al formulario
  newsletterForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Evitar el envío del formulario por defecto

      const emailInput = document.getElementById("emailFooter").value;

      // Validar si el correo contiene "@" y termina con ".com"
      if (emailInput.includes("@") && emailInput.endsWith(".com")) {
          alert("¡Correo válido! Formulario enviado.");
          // Si necesitas enviar el formulario realmente, quita el event.preventDefault() de arriba
      } else {
          alert("Por favor, ingresa un correo electrónico válido con '@' y que termine en '.com'.");
      }
  });
});