/*GALERIA SHOP CONTAINER */
if(document.getElementById("shop-container")){
    const shopContainer = document.querySelector("#shop-container");
    
    let gridShop = document.createElement("div");
    gridShop.setAttribute("id", "gridShop"); 
    shopContainer.appendChild(gridShop);
    
    let productosShop = [
        { titulo: "Zinnia Lamp", precio: "£150.00", img: "assets/fotos/foto1-galeria2.webp", imgHover: "assets/fotos/foto1-galeria2-imghover.webp" },
        { titulo: "Black Wood Lamp", precio: "£2500.00", img: "assets/fotos/foto2-galeria2.webp", imgHover: "assets/fotos/foto2-galeria2-imghover.webp" },
        { titulo: "White Metal Lamp", precio: "£150.00", img: "assets/fotos/foto3-galeria2.webp", imgHover: "assets/fotos/foto3-galeria2-imghover.webp" },
        { titulo: "Brown Crystal Vase", precio: "£250.00", img: "assets/fotos/foto4-galeria2.webp", imgHover: "assets/fotos/foto4-galeria2-imghover.webp" },
        { titulo: "Aether Vase", precio: "£600.00", img: "assets/fotos/foto5-galeria2.webp", imgHover: "assets/fotos/foto5-galeria2-imghover.webp" },
        { titulo: "Antic Brown Vase", precio: "£480.00", img: "assets/fotos/foto6-galeria2.webp", imgHover: "assets/fotos/foto6-galeria2-imghover.webp" },
        { titulo: "Harrington Style Stool", precio: "£320.00", img: "assets/fotos/foto7-galeria2.webp", imgHover: "assets/fotos/foto7-galeria2-imghover.webp" },
        { titulo: "Fabric Table Lamp", precio: "£600.00", img: "assets/fotos/foto8-galeria2.webp", imgHover: "assets/fotos/foto8-galeria2-imghover.webp" }
    ];
    
    //ahora tengo que crear la card y que esta se replique 16 veces
    //voy a hacer un for para meter adentro de esa card un titulo y una imagen
    
    for (let i = 0; i < productosShop.length; i++) {
        cardShop = document.createElement("div"); 
        cardShop.setAttribute("class", "cardShop"); 
        
        let titulo = document.createElement("h3");
        titulo.setAttribute("class", "titulo"); 
        titulo.textContent = productosShop[i].titulo; 
    
        let img = document.createElement("img");
        img.setAttribute("src", productosShop[i].img); 
        img.setAttribute("class", "foto"); 
    
        let precio = document.createElement("p");
        precio.setAttribute("class", "precio"); 
        precio.textContent = productosShop[i].precio; 
    
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
    }
    }