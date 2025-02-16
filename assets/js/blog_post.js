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

        const nameInput = document.querySelector("input[name='name']").value.trim();
        const emailInput = document.querySelector("input[name='email']").value.trim();
        const commentInput = document.querySelector("textarea[name='comment']").value.trim();

        // Validaciones
        if (nameInput === "") {
            alert("Por favor, ingresa tu nombre.");
            return;
        }

        if (!emailInput.includes("@") || !emailInput.endsWith(".com")) {
            alert("Por favor, ingresa un correo electrónico válido con '@' y que termine en '.com'.");
            return;
        }

        if (commentInput === "") {
            alert("Por favor, ingresa un comentario.");
            return;
        }

        alert("¡Formulario válido! Enviado correctamente.");
        commentForm.submit();
    });
});


/*document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        themeToggle.checked = true;
    }

    themeToggle.addEventListener("change", function() {
        if (themeToggle.checked) {
            body.classList.add("dark-mode");
            localStorage.setItem("dark-mode", "enabled");
        } else {
            body.classList.remove("dark-mode");
            localStorage.setItem("dark-mode", "disabled");
        }
    });
});*/
