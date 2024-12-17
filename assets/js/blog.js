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