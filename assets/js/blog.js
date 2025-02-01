if(document.getElementById("contenedorSlider")){
    const sliderBlog = document.getElementById("contenedorSlider");
            const botonIzquierdo = document.createElement("button");
            botonIzquierdo.textContent = ">";
            const botonDerecho = document.createElement("button");
            botonDerecho.textContent = "<";
            botonDerecho.setAttribute("class", "boton");
            botonIzquierdo.classList = "boton";
    
            sliderBlog.appendChild(botonIzquierdo);
            sliderBlog.appendChild(botonDerecho);
    
            const miArrayImg = [
                "assets/fotos/blog-slider-post.jpg",
                "assets/fotos/blog-slider-2.webp",
                "assets/fotos/blog-slider-post-3.jpg",
                "assets/fotos/blog-slider-post-4.webp",
                
            ];
    
            let i = 0;
    
            function updateImg() {
                sliderBlog.style.backgroundImage = `url(${miArrayImg[i]})`;
            }
    
            function nextImg() {
                i = (i + 1) % miArrayImg.length;
                updateImg();
            }
    
            function prevImg() {
                i = (i - 1 + miArrayImg.length) % miArrayImg.length;
                updateImg();
            }
    
            botonIzquierdo.addEventListener('click', prevImg);
            botonDerecho.addEventListener('click', nextImg);
    
            // Inicializar con la primera imagen
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