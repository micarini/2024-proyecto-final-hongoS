if(document.getElementById("contenedorSlider")){ //ponemos el if para que este codigo se ejecute si encuentra el contenedor y no se rompa nada del js
    const sliderBlog = document.getElementById("contenedorSlider");
    const botonIzquierdo = document.getElementById("prev");  
    const botonDerecho = document.getElementById("next");   
    
    const miArrayImg = [ //array de fotos q pasan en el slider
        "assets/fotos/blog-slider-post.jpg",
        "assets/fotos/blog-slider-2.webp",
        "assets/fotos/blog-slider-post-3.jpg",
        "assets/fotos/blog-slider-post-4.webp",
    ];
    
    let i = 0; //indice para saber qué imagen se está mostrando actualmente
    let autoSlide = setInterval(nextImg, 1000); //cambia automáticamente la imagen cada 1 segundo
    
    function updateImg() {
        sliderBlog.style.backgroundImage = `url(${miArrayImg[i]})`; //cambia la imagen de fondo del sliderBlog según el índice i
        sliderBlog.style.backgroundSize = "cover";  //asegura que la imagen cubra todo el espacio 
        sliderBlog.style.backgroundPosition = "center";
    }
    
    function nextImg() {
        i = (i + 1) % miArrayImg.length; //incrementa i en 1 para mostrar la siguiente imagen. % miArrayImg.length hace que el índice vuelva a 0 cuando llega al final del array, creando un efecto de ciclo infinito.
        updateImg();
    }
    
    function prevImg() {
        i = (i - 1 + miArrayImg.length) % miArrayImg.length; //decrementa i en 1 para mostrar la imagen anterior. % miArrayImg.length maneja el caso donde i es negativo, asegurando que el slider siga funcionando en bucle infinito
        updateImg();
    }
    
    //freno auto-slide permanentemente cuando el usuario interactúa con los botones
    function stopAutoSlide() {
        clearInterval(autoSlide); 
    }
    
    botonIzquierdo.addEventListener("click", function() { //si toco btn izq va a la imagen anterior
        prevImg();
        stopAutoSlide(); //freno auto-slide cuando se hace click
    });
    
    botonDerecho.addEventListener("click", function() { //si toco btn der va a la imagen siguiente
        nextImg();
        stopAutoSlide(); 
    });
    
    //inicializo con la primer imagen
    updateImg();
        
}


    document.addEventListener("DOMContentLoaded", function () { // domcontentloaded garantiza que el js se ejecute solo después de que toda la estructura HTML esté disponible en el DOM para evitar problemas en los que js intenta manipular elementos que aún no se cargaron.

        //seleccionamos el formulario del footer
        const newsletterForm = document.getElementById("newsletterForm");
        
        //agregamos un evento 'submit' al formulario
        newsletterForm.addEventListener("submit", function (event) {
        event.preventDefault(); //evita el envío del formulario por defecto
        
        const emailInput = document.getElementById("emailFooter").value; //guardo el valor del input en una variable
        
        //validar si el correo contiene "@" y termina con ".com"
        if (emailInput.includes("@") && emailInput.endsWith(".com")) {
            alert("¡Correo válido! Formulario enviado.");
        } else {
            alert("Por favor, ingresa un correo electrónico válido con '@' y que termine en '.com'.");
            }
        });
    });

        const galleryPostItems = [
            { class: "div1", imgSrc: "assets/fotos/blog-gallery-1.jpg.webp" },
            { class: "div2", imgSrc: "assets/fotos/blog-gallery-4.jpg.webp" },
            { class: "div3", imgSrc: "assets/fotos/blog-gallery-2.jpg.webp" },
            { class: "div4", imgSrc: "assets/fotos/blog-gallery-5.jpg.webp" },
            { class: "div5", imgSrc: "assets/fotos/blog-gallery-3.jpg.webp" }
        ];
        
        const galleryPostContainer = document.querySelector(".gallery-post");
        
        for (let i = 0; i < galleryPostItems.length; i++) {
            const item = galleryPostItems[i];
            const div = document.createElement("div");
            div.className = item.class;
            
            const img = document.createElement("img");
            img.src = item.imgSrc;
            
            div.appendChild(img);
            galleryPostContainer.appendChild(div);
        }

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

        const buttons = document.querySelectorAll(".post-btn"); 
        
        buttons.forEach(function (button) { // foreach es un método de bucle que ejecuta una función para cada elemento de la lista de botones
            button.addEventListener("click", function () {
                window.location.href = "blog_post.html"; //cambia la URL de la página actual
            });
        });

        document.addEventListener("DOMContentLoaded", function () {
            const toggleButton = document.getElementById("theme-toggle");
            const body = document.body;
        
            // verifico si el usuario ya activó el modo oscuro previamente
            if (localStorage.getItem("modo-oscuro") === "activado") {
                body.classList.add("modo-oscuro"); // activo en el body
                toggleButton.checked = true; // aseguro que el checkbox esté marcado
            }
        
            function cambiarModoOscuro() {
                // alterma la clase 'modo-oscuro' en el body
                body.classList.toggle("modo-oscuro");
        
                // guarda el estado del modo oscuro en localStorage
                if (body.classList.contains("modo-oscuro")) {
                    localStorage.setItem("modo-oscuro", "activado"); // guardo que está activo
                } else {
                    localStorage.removeItem("modo-oscuro"); // si se desactiva, removemos el item
                }
            }
        
            toggleButton.addEventListener("change", cambiarModoOscuro);
        
        });
        