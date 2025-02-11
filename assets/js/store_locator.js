if(document.getElementsByClassName("accordion")){
  function funAccordion() {
    let acc = document.getElementsByClassName("accordion");
  
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        console.log("Accordion clicked:", this);
  
        const isActive = this.classList.contains("active");
  
        // Cierra todos los paneles
        for (let j = 0; j < acc.length; j++) {
          let panel = acc[j].nextElementSibling;
          acc[j].classList.remove("active");
          panel.style.maxHeight = null;
          panel.style.display = "none"; // Oculta el panel cuando se cierra
        }
  
        // Si no estaba activo, abrir este y mostrar el contenido
        if (!isActive) {
          this.classList.add("active");
          let panel = this.nextElementSibling;
          panel.style.display = "block"; // Asegura que el panel se muestre antes de calcular el alto
          setTimeout(() => {
            panel.style.maxHeight = panel.scrollHeight + "px"; // Expande el panel
          }, 10); // Pequeño retraso para que el navegador detecte el cambio
        }
      });
    }
  }
  
  // Ejecutar la función cuando el DOM haya cargado
  document.addEventListener("DOMContentLoaded", function () {
    funAccordion();
  });
  
}

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