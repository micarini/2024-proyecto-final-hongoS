/*GALERIA SHOP CONTAINER */
if (document.getElementById("shop-container")) {
    const shopContainer = document.querySelector("#shop-container");

    let gridShop = document.createElement("div");
    gridShop.setAttribute("id", "gridShop");
    shopContainer.appendChild(gridShop);

    let productosShop = [
        { titulo: "Zinnia Lamp", precioOriginal: "", precio: "£150.00", img: "assets/fotos/foto1-galeria2.webp", imgHover: "assets/fotos/foto1-galeria2-imghover.webp" },
        { titulo: "Black Wood Lamp", precioOriginal: "", precio: "£2500.00", img: "assets/fotos/foto2-galeria2.webp", imgHover: "assets/fotos/foto2-galeria2-imghover.webp" },
        { titulo: "White Metal Lamp", precioOriginal: "", precio: "£150.00", img: "assets/fotos/foto3-galeria2.webp", imgHover: "assets/fotos/foto3-galeria2-imghover.webp" },
        { titulo: "Brown Crystal Vase", precioOriginal: "", precio: "£250.00", img: "assets/fotos/foto4-galeria2.webp", imgHover: "assets/fotos/foto4-galeria2-imghover.webp" },
        { titulo: "Aether Vase", precioOriginal: "£750.00", precio: "£600.00", img: "assets/fotos/foto5-galeria2.webp", imgHover: "assets/fotos/foto5-galeria2-imghover.webp" },
        { titulo: "Antic Brown Vase", precioOriginal: "", precio: "£480.00", img: "assets/fotos/foto6-galeria2.webp", imgHover: "assets/fotos/foto6-galeria2-imghover.webp" },
        { titulo: "Harrington Style Stool", precioOriginal: "", precio: "£320.00", img: "assets/fotos/foto7-galeria2.webp", imgHover: "assets/fotos/foto7-galeria2-imghover.webp" },
        { titulo: "Fabric Table Lamp", precioOriginal: "£750.00", precio: "£600.00", img: "assets/fotos/foto8-galeria2.webp", imgHover: "assets/fotos/foto8-galeria2-imghover.webp" },
        { titulo: "Lync Cali Wood", precioOriginal: "£400.00", precio: "£390.00", img: "assets/fotos/foto9-galeria-shop.webp", imgHover: "assets/fotos/foto9-galeria-shop-hover.webp" },
        { titulo: "Oyster Round Stool", precioOriginal: "£400.00", precio: "£390.00", img: "assets/fotos/foto10-galeria-shop.webp", imgHover: "assets/fotos/foto10-galeria-shop-hover.webp" },
        { titulo: "Anitz Wood Stool", precioOriginal: "£400.00", precio: "£390.00", img: "assets/fotos/foto11-galeria-shop.webp", imgHover: "assets/fotos/foto11-galeria-shop-hover.webp" },
        { titulo: "Abbey Wood Stool", precioOriginal: "£400.00", precio: "£390.00", img: "assets/fotos/foto12-galeria-shop.webp", imgHover: "assets/fotos/foto12-galeria-shop-hover.webp" }
    ];

    for (let i = 0; i < productosShop.length; i++) {
        let cardShop = document.createElement("div");
        cardShop.setAttribute("class", "cardShop");
        cardShop.setAttribute("data-id", i);  // Agregar un identificador único para cada card

        let titulo = document.createElement("h3");
        titulo.setAttribute("class", "titulo");
        titulo.textContent = productosShop[i].titulo;

        let img = document.createElement("img");
        img.setAttribute("src", productosShop[i].img);
        img.setAttribute("class", "foto");

        let precio = document.createElement("p");
        precio.setAttribute("class", "precio");
        precio.textContent = productosShop[i].precio;

        // Calcular y mostrar el descuento si hay precio original
        if (productosShop[i].precioOriginal) {
            let precioOriginal = parseFloat(productosShop[i].precioOriginal.replace("£", ""));
            let precioDescuento = parseFloat(productosShop[i].precio.replace("£", ""));
            let descuento = Math.round(((precioOriginal - precioDescuento) / precioOriginal) * 100);

            let descuentoBadge = document.createElement("div");
            descuentoBadge.setAttribute("class", "discount-badge");
            descuentoBadge.textContent = `-${descuento}%`;

            cardShop.appendChild(descuentoBadge);
        }

        cardShop.appendChild(img);
        cardShop.appendChild(titulo);
        cardShop.appendChild(precio);
        gridShop.appendChild(cardShop);

        // Evento mouseover para cambiar la imagen
        img.addEventListener("mouseover", () => {
            img.setAttribute("src", productosShop[i].imgHover);
        });

        // Evento mouseout para restaurar la imagen original
        img.addEventListener("mouseout", () => {
            img.setAttribute("src", productosShop[i].img);
        });

        // Evento click para redirigir al producto
        cardShop.addEventListener("click", () => {
            window.location.href = `product.html?id=${i}`;
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