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

document.addEventListener("DOMContentLoaded", function () {
  //obtiene la URL de la página actual
  let currentPage = window.location.pathname.split("/").pop();

  //selecciona todos los enlaces del menú
  let menuLinks = document.querySelectorAll("nav ul li a");

  //recorre los enlaces con un bucle for
  for (let i = 0; i < menuLinks.length; i++) {
      if (menuLinks[i].getAttribute("href") === currentPage) {
          menuLinks[i].classList.add("active"); //agrega la clase "active"
          break; //sale del bucle cuando encuentra coincidencia
      }
  }
});


    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    // Verificar si el modo oscuro está activado previamente
    if (localStorage.getItem("modo-oscuro") === "activado") {
        body.classList.add("modo-oscuro");
        toggleButton.checked = true;
    }


    // Alternar modo oscuro
    function cambiarModoOscuro() {
        body.classList.toggle("modo-oscuro");

        if (body.classList.contains("modo-oscuro")) {
            localStorage.setItem("modo-oscuro", "activado");
        } else {
            localStorage.removeItem("modo-oscuro");
        }

        aplicarModoOscuroStore();
    }

    // Aplicar modo oscuro a los elementos dinámicos de Store Locator
    function aplicarModoOscuroStore() {
        let imagenes = document.querySelectorAll(".imagen-mapa-store-locator, .store-locator-store-card img");
        let titulos = document.querySelectorAll(".store-locator-store-card h3");
        let textos = document.querySelectorAll(".store-locator-store-card p");

        let isDarkMode = body.classList.contains("modo-oscuro");


        for (let i = 0; i < titulos.length; i++) {
            titulos[i].style.color = isDarkMode ? "#92c5d9" : "";
        }

        for (let i = 0; i < textos.length; i++) {
            textos[i].style.color = isDarkMode ? "#f5f5f5" : "";
        }
    }

    toggleButton.addEventListener("change", cambiarModoOscuro);
 
