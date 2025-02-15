/*GALERIA SHOP CONTAINER */
if (document.getElementById("shop-container")) {
    const shopContainer = document.querySelector("#shop-container");

    let gridShop = document.createElement("div");
    gridShop.setAttribute("id", "gridShop");
    shopContainer.appendChild(gridShop);

    let productosShop = [
        { titulo: "Zinnia Lamp", precioOriginal: "", precio: "£150.00", img: "assets/fotos/foto1-galeria2.webp", imgHover: "assets/fotos/foto1-galeria2-imghover.webp", color: ["yellow", "silver"], size: ["L", "M"], rating: "3" },
        { titulo: "Black Wood Lamp", precioOriginal: "", precio: "£2500.00", img: "assets/fotos/foto2-galeria2.webp", imgHover: "assets/fotos/foto2-galeria2-imghover.webp", color: ["black", "brown"], size: ["L", "XL"], rating: ["4", "3"] },
        { titulo: "White Metal Lamp", precioOriginal: "", precio: "£150.00", img: "assets/fotos/foto3-galeria2.webp", imgHover: "assets/fotos/foto3-galeria2-imghover.webp", color: ["white", "brown"], size: ["S", "XL"], rating: ["4", "5"] },
        { titulo: "Brown Crystal Vase", precioOriginal: "", precio: "£250.00", img: "assets/fotos/foto4-galeria2.webp", imgHover: "assets/fotos/foto4-galeria2-imghover.webp", color: ["blue", "green", "brown"], size: ["S", "M"], rating: ["3", "5"] },
        { titulo: "Aether Vase", precioOriginal: "£750.00", precio: "£600.00", img: "assets/fotos/foto5-galeria2.webp", imgHover: "assets/fotos/foto5-galeria2-imghover.webp", color: ["brown", "red", "blue"], size: ["XL", "M"], rating: ["5", "4"] },
        { titulo: "Antic Brown Vase", precioOriginal: "", precio: "£480.00", img: "assets/fotos/foto6-galeria2.webp", imgHover: "assets/fotos/foto6-galeria2-imghover.webp", color: ["silver", "yellow", "black"], size: ["L", "M"], rating: ["3", "4"] },
        { titulo: "Harrington Style Stool", precioOriginal: "", precio: "£320.00", img: "assets/fotos/foto7-galeria2.webp", imgHover: "assets/fotos/foto7-galeria2-imghover.webp", color: ["yellow", "brown", "silver", "blue"], size: ["L", "S"], rating: ["5", "3"]},
        { titulo: "Fabric Table Lamp", precioOriginal: "£750.00", precio: "£600.00", img: "assets/fotos/foto8-galeria2.webp", imgHover: "assets/fotos/foto8-galeria2-imghover.webp", color: ["red", "silver", "brown", "green"], size: ["XL", "M"], rating: ["3", ""] },
        { titulo: "Lync Cali Wood", precioOriginal: "£400.00", precio: "£390.00", img: "assets/fotos/foto9-galeria-shop.webp", imgHover: "assets/fotos/foto9-galeria-shop-hover.webp", color: ["brown", "black"], size: ["L", "XL", "S"], rating: ["5", "4", "3"] },
        { titulo: "Oyster Round Stool", precioOriginal: "£400.00", precio: "£390.00", img: "assets/fotos/foto10-galeria-shop.webp", imgHover: "assets/fotos/foto10-galeria-shop-hover.webp", color: ["blue", "yellow", "green"], size: ["L", "M"], rating: ["4", "5", "3"] },
        { titulo: "Anitz Wood Stool", precioOriginal: "£400.00", precio: "£390.00", img: "assets/fotos/foto11-galeria-shop.webp", imgHover: "assets/fotos/foto11-galeria-shop-hover.webp", color: ["red", "black", "yellow"], size: ["S", "M"], rating: ["3", "4"] },
        { titulo: "Abbey Wood Stool", precioOriginal: "£400.00", precio: "£390.00", img: "assets/fotos/foto12-galeria-shop.webp", imgHover: "assets/fotos/foto12-galeria-shop-hover.webp", color: ["green", "blue", "black"], size: ["S", "XL"], rating: ["5", "4"] }
    ];

    for (let i = 0; i < productosShop.length; i++) {
        let cardShop = document.createElement("div");
        cardShop.setAttribute("class", "cardShop");
        cardShop.setAttribute("data-id", i);  // Agregar un identificador único para cada card
        cardShop.setAttribute("data-color", productosShop[i].color);  // Asignar el color al producto
        cardShop.setAttribute("data-size", productosShop[i].size);    // Asignar el tamaño al producto
        cardShop.setAttribute("data-precio", productosShop[i].precio.replace("£", "")); // Asignar el precio al producto
        cardShop.setAttribute("data-rating", productosShop[i].rating);    // Asignar el rating al producto

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

    let pagination = document.querySelector(".pagination");
    if (pagination) {
        gridShop.after(pagination);
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


document.addEventListener("DOMContentLoaded", function () {
    // Seleccionamos todos los inputs de los filtros
    const filters = {
        color: document.querySelectorAll(".filter-color input"), // Filtros de color
        size: document.querySelectorAll(".filter-size input"),   // Filtros de tamaño
        rating: document.querySelectorAll(".filter-rating input") // Filtros de rating
    };

    function applyFilters() {
        // Obtiene el valor del color seleccionado (si hay uno marcado)
        let selectedColor = "";
        for (let i = 0; i < filters.color.length; i++) {
            if (filters.color[i].checked) {
                selectedColor = filters.color[i].value;
                break;
            }
        }

        // Obtiene los tamaños seleccionados (puede haber más de uno)
        let selectedSizes = [];
        for (let i = 0; i < filters.size.length; i++) {
            if (filters.size[i].checked) {
                selectedSizes.push(filters.size[i].value);
            }
        }

        // Obtiene los ratings seleccionados (puede haber más de uno)
        let selectedRatings = [];
        for (let i = 0; i < filters.rating.length; i++) {
            if (filters.rating[i].checked) {
                selectedRatings.push(parseInt(filters.rating[i].value));
            }
        }

        // Selecciona todos los productos dentro del contenedor "gridShop"
        let productos = document.getElementById("gridShop").getElementsByClassName("cardShop");

        // Recorre cada producto para aplicar los filtros
        for (let i = 0; i < productos.length; i++) {
            let producto = productos[i]; // Obtiene el producto actual

            // Obtiene los atributos personalizados del producto
            let colores = producto.getAttribute("data-color").split(","); // Convierte a array
            let tamaños = producto.getAttribute("data-size").split(","); // Convierte a array
            let precio = parseInt(producto.getAttribute("data-precio")); // Convierte a número
            let ratings = producto.getAttribute("data-rating").split(",").map(Number); // Convierte a array de números

            // Inicializa la variable que indica si el producto se muestra
            let mostrar = true;

            // Filtra por color (debe estar incluido en la lista de colores del producto)
            if (selectedColor && !colores.includes(selectedColor)) {
                mostrar = false;
            }

            // Filtra por tamaño (el producto debe tener al menos uno de los tamaños seleccionados)
            if (selectedSizes.length > 0 && !selectedSizes.some(size => tamaños.includes(size))) {
                mostrar = false;
            }

            // Filtra por rating (el producto debe tener al menos uno de los ratings seleccionados)
            if (selectedRatings.length > 0 && !selectedRatings.some(rating => ratings.includes(rating))) {
                mostrar = false;
            }

            // Filtra por precio (compara con el valor del input de precio)
            let maxPrecio = parseInt(document.querySelector(".filter-price input").value);
            if (precio > maxPrecio) {
                mostrar = false;
            }

            // Si el producto pasa los filtros, se muestra; de lo contrario, se oculta
            producto.style.display = mostrar ? "block" : "none";

        }
    }

    // Llama a la función para aplicar los filtros inicialmente
    applyFilters();

    // Agrega event listeners a los filtros para que se actualicen en tiempo real

    // Para el filtro de color
    for (let i = 0; i < filters.color.length; i++) {
        filters.color[i].addEventListener("change", applyFilters);
    }

    // Para el filtro de tamaño
    for (let i = 0; i < filters.size.length; i++) {
        filters.size[i].addEventListener("change", applyFilters);
    }

    // Para el filtro de rating
    for (let i = 0; i < filters.rating.length; i++) {
        filters.rating[i].addEventListener("change", applyFilters);
    }

    // Agrega un event listener al filtro de precio
    document.querySelector(".filter-price input").addEventListener("input", applyFilters);
});

/*function highlightSelectedFilters() {
    for (let i = 0; i < filters.color.length; i++) {
        let label = filters.color[i].parentNode;
        if (filters.color[i].checked) {
            label.classList.add("selected-filter");
        } else {
            label.classList.remove("selected-filter");
        }
    }
}
*/

document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Comprobar si el usuario ya tiene un tema guardado en localStorage
    if (localStorage.getItem("modo-oscuro") === "true") {
        body.classList.add("modo-oscuro");
        themeToggle.checked = true;
    }

    themeToggle.addEventListener("change", function () {
        body.classList.toggle("modo-oscuro");
        localStorage.setItem("modo-oscuro", body.classList.contains("modo-oscuro"));
    });
});
