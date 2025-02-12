if(document.getElementById("contenedorSlider")){
    const sliderBlog = document.getElementById("contenedorSlider");
    const botonIzquierdo = document.getElementById("prev");  
    const botonDerecho = document.getElementById("next");   
    
    const miArrayImg = [
        "assets/fotos/blog-slider-post.jpg",
        "assets/fotos/blog-slider-2.webp",
        "assets/fotos/blog-slider-post-3.jpg",
        "assets/fotos/blog-slider-post-4.webp",
    ];
    
    let i = 0;
    let autoSlide = setInterval(nextImg, 1000); // empiezo auto-sliding
    
    function updateImg() {
        sliderBlog.style.backgroundImage = `url(${miArrayImg[i]})`;
        sliderBlog.style.backgroundSize = "cover";  
        sliderBlog.style.backgroundPosition = "center";
    }
    
    function nextImg() {
        i = (i + 1) % miArrayImg.length;
        updateImg();
    }
    
    function prevImg() {
        i = (i - 1 + miArrayImg.length) % miArrayImg.length;
        updateImg();
    }
    
    // freno auto-slide permanentemente
    function stopAutoSlide() {
        clearInterval(autoSlide); 
    }
    
    botonIzquierdo.addEventListener("click", function() {
        prevImg();
        stopAutoSlide(); // freno auto-slide cuando se hace click
    });
    
    botonDerecho.addEventListener("click", function() {
        nextImg();
        stopAutoSlide(); 
    });
    
    // inicializo con la primer imagen
    updateImg();
        
}

    function validateEmail() {
        const emailInput = document.getElementById("emailInput").value;
            
        if (emailInput.includes("@") && emailInput.endsWith(".com")) {
            alert("¡Correo válido! Formulario enviado.");
        } else {
            alert("Por favor, ingresa un correo electrónico válido con '@' y que termine en '.com'.");
        }
    }

    document.addEventListener("DOMContentLoaded", function () { // domcontentloaded garantiza que el js se ejecute solo después de que toda la estructura HTML esté disponible en el DOM para evitar problemas en los que js intenta manipular elementos que aún no se cargaron.

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