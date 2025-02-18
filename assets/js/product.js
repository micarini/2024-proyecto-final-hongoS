if (document.getElementById("product-container")) {
    const prodContainer = document.querySelector("#product-container");

    let gridProduct = document.createElement("div");
    gridProduct.setAttribute("id", "gridProduct");
    prodContainer.appendChild(gridProduct);

    let imgProduct = [
        { img: "assets/fotos/foto8-galeria2.webp" },
        { img: "assets/fotos/foto8-galeria2-imghover.webp" },
        { img: "assets/fotos/foto3-galeria2-imghover.webp" },
        { img: "assets/fotos/foto3-galeria2.webp" },
    ];

    for (let i = 0; i < imgProduct.length; i++) {
        cardProd1 = document.createElement("div");
        cardProd1.setAttribute("class", "cardProd1");

        let img = document.createElement("img");
        img.setAttribute("src", imgProduct[i].img);
        img.setAttribute("class", "foto");

        cardProd1.appendChild(img);

        gridProduct.appendChild(cardProd1);
    }
}

/*GRID YOU MAY ALSO LIKE */
if (document.getElementById("product-container2")) {
    const prodContainer2 = document.querySelector("#product-container2");

    let gridProduct2 = document.createElement("div");
    gridProduct2.setAttribute("id", "gridProduct2");
    prodContainer2.appendChild(gridProduct2);

    let productosProd = [
        {
            titulo: "Sampson Wood Chair", precio: "£255.00", img: "assets/fotos/foto4-galeria1.webp",
            imgHover: "assets/fotos/foto4-galeria1-imghover.webp"
        },
        {
            titulo: "Wood Mini Stool", precio: "£255.00", img: "assets/fotos/foto7-galeria1.webp",
            imgHover: "assets/fotos/foto7-galeria1-imghover.webp"
        },
        {
            titulo: "Classic Chairs", precio: "£255.00", img: "assets/fotos/foto8-galeria1.webp",
            imgHover: "assets/fotos/foto8-galeria1-imghover.webp"
        },
        {
            titulo: "Wooden Dining Chair", precio: "£200.00", img: "assets/fotos/foto6-galeria1.webp",
            imgHover: "assets/fotos/foto6-galeria1-imghover.webp"
        }
    ];


    for (let i = 0; i < productosProd.length; i++) {
        cardProd2 = document.createElement("div");
        cardProd2.setAttribute("class", "cardProd2");

        let titulo = document.createElement("h3");
        titulo.setAttribute("class", "titulo");
        titulo.textContent = productosProd[i].titulo;

        let img = document.createElement("img");
        img.setAttribute("src", productosProd[i].img);
        img.setAttribute("class", "foto");

        let precio = document.createElement("p");
        precio.setAttribute("class", "precio");
        precio.textContent = productosProd[i].precio;

        cardProd2.appendChild(img);
        cardProd2.appendChild(titulo);
        cardProd2.appendChild(precio);

        gridProduct2.appendChild(cardProd2);

        // Evento mouseover para cambiar la imagen
        img.addEventListener("mouseover", () => {
            img.setAttribute("src", productosProd[i].imgHover);
        });

        // Evento mouseout para restaurar la imagen original
        img.addEventListener("mouseout", () => {
            img.setAttribute("src", productosProd[i].img);
        });
    }
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

const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    toggleButton.addEventListener("change", function () {
        body.classList.toggle("modo-oscuro");
        aplicarModoOscuroProductos();
    });


    
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".accordion-boton");
    let activePanel = null;
    let activeButton = null;

    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i];
        let panel = button.nextElementSibling;
        let icon = button.querySelector(".accordion-icon");

        button.addEventListener("click", function () {
            // si hay otro panel abierto, lo cierro
            if (activePanel && activePanel !== panel) {
                activePanel.style.display = "none";
                activeButton.classList.remove("active");
                activeButton.querySelector(".accordion-icon").textContent = "+";
            }

            // cambio clases del panel actual
            if (panel.style.display === "block") {
                panel.style.display = "none";
                icon.textContent = "+";
                button.classList.remove("active");
                activePanel = null;
                activeButton = null;
            } else {
                panel.style.display = "block";
                icon.textContent = "−";
                button.classList.add("active");
                activePanel = panel;
                activeButton = button;
            }
        });
    }
});
