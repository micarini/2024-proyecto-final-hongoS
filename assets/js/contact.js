/*SLIDER CONTACT*/
// Datos del slider
const sliderTexts = [
    {
        number: "01",
        subtitle: "LET'S MAKE SOMETHING BEAUTIFUL",
        title: "Unlimited power and customization possibilities",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry. Lorem Ipsum has been the industry's standard dummy text since. Lorem Ipsum is simply dummy text of the typesetting industry.",
        buttonText: "ABOUT COMPANY"
    },
    {
        number: "02",
        subtitle: "WE ARE DIGITAL MEDIA AGENCY",
        title: "We are delivering beautiful digital products for you",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry. Lorem Ipsum has been the industry's standard dummy text since. Lorem Ipsum is simply dummy text of the typesetting industry.",
        buttonText: "ABOUT COMPANY"
    },
    {
        number: "03",
        subtitle: "WE CREATE DESIGNS AND TECHNOLOGY",
        title: "We provide high quality and cost effective services",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry. Lorem Ipsum has been the industry's standard dummy text since. Lorem Ipsum is simply dummy text of the typesetting industry.",
        buttonText: "ABOUT COMPANY"
    }
];

// Inicializa el índice actual
let currentInd = 0;

// Referencias a los elementos del slider
const slideNumber = document.getElementById('slide-number');
const slideSubtitle = document.getElementById('slide-subtitle');
const slideTitle = document.getElementById('slide-title');
const slideContent = document.getElementById('slide-content');
const slideButton = document.getElementById('slide-button');

// Referencia al contenedor del slider para manejar el hover
const sliderContainer = document.getElementById('slider-sec4');

// Función para actualizar el contenido del slider
function updateContent() {
    const currentText = sliderTexts[currentInd];
    slideNumber.textContent = currentText.number;
    slideSubtitle.textContent = currentText.subtitle;
    slideTitle.textContent = currentText.title;
    slideContent.textContent = currentText.content;
    slideButton.textContent = currentText.buttonText;
}

// Inicializa el contenido del slider al cargar la página
updateContent();

// Función para ir al slide anterior
function anterior() {
    currentInd--;
    if (currentInd < 0) {
        currentInd = sliderTexts.length - 1;
    }
    updateContent();
}

// Función para ir al siguiente slide
function posterior() {
    currentInd++;
    if (currentInd >= sliderTexts.length) {
        currentInd = 0;
    }
    updateContent();
}

// Botones para controlar el slider
document.getElementById('prev-contact').addEventListener("click", anterior);
document.getElementById('next-contact').addEventListener("click", posterior);

// Intervalo para que el slider cambie automáticamente cada 3 segundos
let auto3s;
function startAuto() {
    auto3s = setInterval(posterior, 3000); // 3000 ms son 3 segundos
}

// Inicia la automatización al cargar la página
startAuto();

// Detiene el intervalo cuando el mouse pasa sobre el slider
sliderContainer.addEventListener("mouseenter", () => {
    clearInterval(auto3s);
});

// Reinicia el intervalo cuando el mouse sale del slider
sliderContainer.addEventListener("mouseleave", () => {
    startAuto();
});

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

const contactForm = document.getElementById("formcontact");

//evento 'submit' al formulario
contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); //evita el envío del formulario por defecto

    const nameInput = document.querySelector("input[name='name']").value;
    const emailInput = document.querySelector("input[name='email']").value;
    const subjectInput = document.querySelector("input[name='subject']").value;
    const messageInput = document.querySelector("input[name='message']").value;

    //validaciones
    if (nameInput.trim() === "") { //.trim() se usa para asegurarse de que el usuario no ingrese solo espacios en los campos del formulario.
        alert("Por favor, ingresa tu nombre.");
        return;
    }
    
    if (!emailInput.includes("@") || !emailInput.endsWith(".com")) {
        alert("Por favor, ingresa un correo electrónico válido con '@' y que termine en '.com'.");
        return;
    }

    if (subjectInput.trim() === "") {
        alert("Por favor, ingresa un asunto.");
        return;
    }

    if (messageInput.trim() === "") {
        alert("Por favor, ingresa un mensaje.");
        return;
    }

    alert("¡Formulario válido! Enviado correctamente.");
    contactForm.submit();
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    toggleButton.addEventListener("change", function () {
        body.classList.toggle("modo-oscuro");
        aplicarModoOscuroContact();
    });

    aplicarModoOscuroContact(); // Aplicar cambios si el usuario ya tenía activado el modo oscuro
});
