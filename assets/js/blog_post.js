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
    } else {
        alert("Por favor, ingresa un correo electrónico válido con '@' y que termine en '.com'.");
    }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("commentsForm");

    commentForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const name = commentForm.querySelector("input[type='text']").value.trim();
        const email = commentForm.querySelector("input[type='email']").value.trim();
        const comment = commentForm.querySelector("textarea").value.trim();

        //sin trim(), un usuario podría ingresar " " (solo espacios) en el campo de nombre y pasaría la validación

        if (name === "" || email === "" || comment === "") {
            alert("Por favor complete todos los campos requeridos.");
            return;
        }

        if (!email.includes("@") && !email.endsWith(".com")) {
            alert("Por favor, ingresa un correo electrónico válido con '@' y que termine en '.com'");
            return;
        }

        alert("¡Formulario enviado exitosamente!");
    });
});
