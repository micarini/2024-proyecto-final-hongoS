/*GALERIA SHOP CONTAINER */
if (document.getElementById("shop-container")) {
    const shopContainer = document.querySelector("#shop-container");

    let gridShop = document.createElement("div");
    gridShop.setAttribute("id", "gridShop");
    shopContainer.appendChild(gridShop);

    let productosShop = [ //array de objetos de productos
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

    for (let i = 0; i < productosShop.length; i++) { //recorro el array de productos
        let cardShop = document.createElement("div");
        cardShop.setAttribute("class", "cardShop");
        cardShop.setAttribute("data-id", i);  //agrego un identificador único para cada card
        cardShop.setAttribute("data-color", productosShop[i].color);  //asigno el color al producto
        cardShop.setAttribute("data-size", productosShop[i].size);    //asigno el tamaño al producto
        cardShop.setAttribute("data-precio", productosShop[i].precio.replace("£", "")); //asigno el precio al producto
        cardShop.setAttribute("data-rating", productosShop[i].rating);  //asigno el rating al producto

        let titulo = document.createElement("h3"); //creo el h3 para el titulo
        titulo.setAttribute("class", "titulo"); //le asigno una clase
        titulo.textContent = productosShop[i].titulo; //le asigno el texto al titulo

        let img = document.createElement("img");
        img.setAttribute("src", productosShop[i].img);
        img.setAttribute("class", "foto");

        let precio = document.createElement("p");
        precio.setAttribute("class", "precio");
        precio.textContent = productosShop[i].precio;

        //calculo y muestro el descuento si hay precio original
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

        //evento mouseover para cambiar la imagen
        img.addEventListener("mouseover", () => {
            img.setAttribute("src", productosShop[i].imgHover);
        });

        //evento mouseout para restaurar la imagen original
        img.addEventListener("mouseout", () => {
            img.setAttribute("src", productosShop[i].img);
        });

        //evento click para redirigir al producto
        cardShop.addEventListener("click", () => {
            window.location.href = `product.html`; 
        });
    }

    let pagination = document.querySelector(".pagination");
    if (pagination) {
        gridShop.after(pagination); //los numeros de las paginas maquetadas
        //se inserta pagination después de gridShop en el DOM.
    }
}


document.addEventListener("DOMContentLoaded", function () {
    //formulario del footer
    const newsletterForm = document.getElementById("newsletterForm");

    //agregamos un evento 'submit' al formulario
    newsletterForm.addEventListener("submit", function (event) {
        event.preventDefault(); //evita el envío del formulario por defecto

        const emailInput = document.getElementById("emailFooter").value;

        //valida si el correo contiene "@" y termina con ".com"
        if (emailInput.includes("@") && emailInput.endsWith(".com")) {
            alert("¡Correo válido! Formulario enviado.");
        } else {
            alert("Por favor, ingresa un correo electrónico válido con '@' y que termine en '.com'.");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    //obtiene la URL de la página actual sin el dominio. si la URL es https://midominio.com/blog.html, el resultado es /blog.html
    let currentPage = window.location.pathname.split("/").pop();
    //split("/") divide la cadena en partes separadas por /, obteniendo un array
   //.pop() obtiene el último elemento del array, que sería "blog.html" en este caso
  
    //selecciono todos los enlaces del menú
    let menuLinks = document.querySelectorAll("nav ul li a");
  
    //recorro los enlaces con un for
    for (let i = 0; i < menuLinks.length; i++) {
        if (menuLinks[i].getAttribute("href") === currentPage) { //obtiene el valor del href de cada enlace
            menuLinks[i].classList.add("active"); //agrega la clase "active"
            break; //sale del bucle cuando encuentra coincidencia
        }
    }
  });


document.addEventListener("DOMContentLoaded", function () {
    //selecciono todos los inputs de los filtros
    const filters = {
        color: document.querySelectorAll(".filter-color input"), //filtros de color
        size: document.querySelectorAll(".filter-size input"),   //filtros de tamaño
        rating: document.querySelectorAll(".filter-rating input") //filtros de rating
    };

    function applyFilters() {
        //bbtiene el valor del color seleccionado (si hay uno marcado)
        let selectedColor = "";
         //recorre la lista de filtros de color
        for (let i = 0; i < filters.color.length; i++) {
            if (filters.color[i].checked) { //si el filtro está marcado (seleccionado)
                //guarda el valor del color seleccionado
            break; //sale del bucle después de encontrar el primer color seleccionado
            }
        }

        //obtiene los tamaños seleccionados (puede haber más de uno)
        let selectedSizes = [];
        for (let i = 0; i < filters.size.length; i++) {
            if (filters.size[i].checked) {
                selectedSizes.push(filters.size[i].value);
            }
        }

        //obtiene los ratings seleccionados (puede haber más de uno)
        let selectedRatings = [];
        for (let i = 0; i < filters.rating.length; i++) {
            if (filters.rating[i].checked) {
                selectedRatings.push(parseInt(filters.rating[i].value));
            }
        }

        //selecciona todos los productos dentro del contenedor "gridShop"
        let productos = document.getElementById("gridShop").getElementsByClassName("cardShop");

        //recorre cada producto para aplicar los filtros
        for (let i = 0; i < productos.length; i++) {
            let producto = productos[i]; //obtiene el producto actual

            //obtiene los atributos personalizados del producto
            let colores = producto.getAttribute("data-color").split(","); //convierte a array
            let tamaños = producto.getAttribute("data-size").split(","); //convierte a array
            let precio = parseInt(producto.getAttribute("data-precio")); //convierte a número
            let ratings = producto.getAttribute("data-rating").split(",").map(Number); //convierte a array de números
            //se usa .getAttribute("data-..."), que obtiene el valor del atributo HTML como un string. .split(",") separa la cadena en un array de valores usando la coma como delimitador. ARRAY DE STRINGS

            //inicializa la variable que indica si el producto se muestra
            let mostrar = true; //se asume inicialmente que el producto debe mostrarse (true). si algún filtro no se cumple, se cambia a false para ocultarlo.

            //filtra por color (debe estar incluido en la lista de colores del producto)
            if (selectedColor && !colores.includes(selectedColor)) {
                mostrar = false;
            } //si el usuario ha seleccionado un color (selectedColor tiene valor). se verifica si ese color está en la lista colores del producto (que viene del atributo data-color). si el color seleccionado no está en la lista, se oculta el producto (mostrar = false).

            //filtra por tamaño (el producto debe tener al menos uno de los tamaños seleccionados)
            if (selectedSizes.length > 0 && !selectedSizes.some(size => tamaños.includes(size))) {
                mostrar = false;
            } //si el usuario seleccionó al menos un tamaño (selectedSizes.length > 0). se usa .some(...) para verificar si alguno de los tamaños seleccionados está en tamaños (del producto). si ninguno coincide, se oculta el producto (mostrar = false).
            

            //filtra por rating (el producto debe tener al menos uno de los ratings seleccionados)
            if (selectedRatings.length > 0 && !selectedRatings.some(rating => ratings.includes(rating))) {
                mostrar = false; 
            } //funciona igual que el filtro de tamaño, pero con ratings (selectedRatings). si al menos un rating seleccionado coincide con los ratings del producto, se muestra. si ningún rating coincide, se oculta.

            //filtra por precio (compara con el valor del input de precio)
            let maxPrecio = parseInt(document.querySelector(".filter-price input").value);
            if (precio > maxPrecio) {
                mostrar = false;
            } //se obtiene el precio máximo seleccionado por el usuario (maxPrecio). se convierte a número con parseInt(...). si el precio del producto (precio) es mayor que maxPrecio, se oculta.

            //si el producto pasa los filtros, se muestra; de lo contrario, se oculta
            producto.style.display = mostrar ? "block" : "none";

        }
    }

    //llama a la función para aplicar los filtros inicialmente
    applyFilters();

    //agrego event listeners a los filtros para que se actualicen en tiempo real

    //para el filtro de color
    for (let i = 0; i < filters.color.length; i++) {
        filters.color[i].addEventListener("change", applyFilters);
    }

    //para el filtro de tamaño
    for (let i = 0; i < filters.size.length; i++) {
        filters.size[i].addEventListener("change", applyFilters);
    }

    //para el filtro de rating
    for (let i = 0; i < filters.rating.length; i++) {
        filters.rating[i].addEventListener("change", applyFilters);
    }

    //agrego un event listener al filtro de precio
    document.querySelector(".filter-price input").addEventListener("input", applyFilters);
});


const toggleButton = document.getElementById("theme-toggle"); //guardo boton
const body = document.body; //guardo body

// verifico con localStorage si el usuario ya activó el modo oscuro previamente
if (localStorage.getItem("modo-oscuro") === "activado") {
  body.classList.add("modo-oscuro"); //si existe y tiene el valor "activado", se activa el modo oscuro, añadiendo la clase modo-oscuro al body y marcando el checkbox correspondiente.
  toggleButton.checked = true; // aseguro que el checkbox esté marcado
}


//alterna modo oscuro
function cambiarModoOscuro() {
    //el método .classList.toggle() agrega o quita la clase modo-oscuro del elemento body. si la clase no está presente, toggle() la agrega. si la clase ya está presente, toggle() la elimina.
    body.classList.toggle("modo-oscuro");
  
    // guarda el estado del modo oscuro en localStorage
    if (body.classList.contains("modo-oscuro")) {
      localStorage.setItem("modo-oscuro", "activado");
    } else {
      localStorage.removeItem("modo-oscuro");
    }
  
  } //cuando el usuario cambia el estado del modo oscuro (marcando o desmarcando el checkbox), la clase modo-oscuro se alterna en el body. si el modo oscuro está activado, se guarda en localStorage con setItem(), de modo que persista. si se desactiva el modo oscuro, se elimina el valor de localStorage con removeItem().
  
  toggleButton.addEventListener("change", cambiarModoOscuro);