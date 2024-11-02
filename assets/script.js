/*GALERIA 1 HOME */

/* function mostrar_grid(){        
    const filter = this.getAttribute("select_grid");
    let data_ref;
    switch(filter){
        case "recent":
            data_ref = productos1;
            break;
        case "featured":
            data_ref = productos3;
            break;
        case "best":
            data_ref = productos4;
            break;
    }
    const container1 = document.querySelector("#contenedor_img");
    container1.setAttribute("id","container1");
    let content=0; */
//for (const producto of data_ref)  */
/*let article = document.createElement("article");
const img = '<img class="card1" src="'+producto.img+'">';
const title = '<h3 class="titulo">'+producto.titulo+'</h3>';
const precio = '<p class="precio">'+producto.precio+'</p>';
article.innerHTML = img + title + precio;
content.appendChild(article);*/
/* const article = `
     <article class="card1>
         <img class="card1" src="${producto.img}">
         <h3 class="titulo">${producto.titulo}</h3>
         <p class="precio">${producto.precio}</p>
     </article>`
 if(content===0){
     content = article;
 } else{
     content+=article;
 }
}
container1.innerHTML = content;
}

let productos3 = [
{}
];
let productos4 = [
{}
]; */


const seccion3 = document.querySelector("#section3");

let h4_seccion3 = document.createElement("h4");
h4_seccion3.textContent = "RECENT PRODUCTS";
//h4_seccion3.addEventListener("click",);
//h4_seccion3.setAttribute("select_grid", "recent");
seccion3.appendChild(h4_seccion3);

let grid1 = document.createElement("div");
grid1.setAttribute("id", "grid1"); //cambiandole el atributo id por el que quiero
seccion3.appendChild(grid1);

let productos1 = [
    { titulo: "Charcoal Linen Stool", precio: "£510.00", img: "assets/fotos/foto1-galeria1.webp", imgHover: "assets/fotos/foto1-galeria1-imghover.webp" },
    { titulo: "Elton Arm Chair", precio: "£50.00", img: "assets/fotos/foto2-galeria1.webp", imgHover: "assets/fotos/foto2-galeria1-imghover.webp" },
    { titulo: "Valeria ArmChair", precio: "£20.00 - £50.00", img: "assets/fotos/foto3-galeria1.webp", imgHover: "assets/fotos/foto3-galeria1-imghover.webp" },
    { titulo: "Sampson Wood Chair", precio: "£200.00", img: "assets/fotos/foto4-galeria1.webp", imgHover: "assets/fotos/foto4-galeria1-imghover.webp" },
    { titulo: "Round Coffee Table", precio: "£265.00", img: "assets/fotos/foto5-galeria1.webp", imgHover: "assets/fotos/foto5-galeria1-imghover.webp" },
    { titulo: "Wooden Dining Chair", precio: "£255.00", img: "assets/fotos/foto6-galeria1.webp", imgHover: "assets/fotos/foto6-galeria1-imghover.webp" },
    { titulo: "Wood Mini Stool", precio: "£255.00", img: "assets/fotos/foto7-galeria1.webp", imgHover: "assets/fotos/foto7-galeria1-imghover.webp" },
    { titulo: "Classic Chairs", precio: "£255.00", img: "assets/fotos/foto8-galeria1.webp", imgHover: "assets/fotos/foto8-galeria1-imghover.webp" },
];

let card1;
for (let i = 0; i < productos1.length; i++) {
    card1 = document.createElement("div");
    card1.setAttribute("class", "card1");

    let titulo = document.createElement("h3");
    titulo.setAttribute("class", "titulo");
    titulo.textContent = productos1[i].titulo;

    let img = document.createElement("img");
    img.setAttribute("src", productos1[i].img);
    img.setAttribute("class", "foto");

    let precio = document.createElement("p");
    precio.setAttribute("class", "precio");
    precio.textContent = productos1[i].precio;

    card1.appendChild(img);
    card1.appendChild(titulo);
    card1.appendChild(precio)

    grid1.appendChild(card1);

    //Evento mouseover para cambiar la imagen
img.addEventListener("mouseover", function () {
    img.setAttribute("src", productos1[i].imgHover);
});

// Evento mouseout para restaurar la imagen original
img.addEventListener("mouseout", function () {
    img.setAttribute("src", productos1[i].img);
});

}



// una funcion que reciba como parametro el array que quiero imprimir dinamicamente



/*GALERIA 2 HOME*/

/* la seccion5 va a crear un div que sera un grid, por otro lado se va a crear un div que sera una card para el grid, la cual constara de una foto y un titulo*/

//guardo el body en una variable
const seccion5 = document.querySelector("#section5");

let h4_seccion5 = document.createElement("h4");
h4_seccion5.textContent = "NEW PRODUCTS";
seccion5.appendChild(h4_seccion5);

let grid2 = document.createElement("div");
//tengo que ponerle un id a mi contenedor grid
grid2.setAttribute("id", "grid2"); //cambiandole el atributo id por el que quiero
seccion5.appendChild(grid2);//inserto en el body mi grid

//ahora tengo que crear las cards, para eso necesito un div que contenga una imagen y un titulo
//para los titulos tenemos dos opciones, podemos crear un array con los titulos,
//o hacer uno generico que podamos manejar con el indice del for

//array de titulos
let productos2 = [
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
//como se que tengo 16 imagenes BIEN ROTULADAS, 
//aca es muy importante la ruta y la nomenclatura de los archivos
//voy a hacer un for para meter adentro de esa card un titulo y una imagen

let card2;
for (let i = 0; i < productos2.length; i++) {
    card2 = document.createElement("div"); //creo el contenedor que sera la card2
    card2.setAttribute("class", "card2"); //le agrego la clase card2 para poder modificarlas todas juntas

    //creo el titulo
    let titulo = document.createElement("h3");
    titulo.setAttribute("class", "titulo"); // le agrego la clase para despues manipularlo todo junto
    titulo.textContent = productos2[i].titulo; //agrego el titulo por medio del array

    //creo el elemento imagen
    let img = document.createElement("img");
    img.setAttribute("src", productos2[i].img); // Usar la ruta de imagen desde el array
    img.setAttribute("class", "foto"); // Le agrego una clase para manipularlas juntas

    // Crear el elemento precio
    let precio = document.createElement("p");
    precio.setAttribute("class", "precio"); // Clase para estilizar después
    precio.textContent = productos2[i].precio; // Agregar el precio desde el array

    card2.appendChild(img);
    card2.appendChild(titulo);
    card2.appendChild(precio)

    //ahora agarro el grid y le pongo las cards
    grid2.appendChild(card2); //esta accion tiene que estar adentro del for para que por cada vuelta se inserte la card de cada vuelta

    //Evento mouseover para cambiar la imagen
img.addEventListener("mouseover", function () {
    img.setAttribute("src", productos2[i].imgHover);
});

// Evento mouseout para restaurar la imagen original
img.addEventListener("mouseout", function () {
    img.setAttribute("src", productos2[i].img);
});
}


/*slider*/
const sliderContent = ['../assets/fotos/furniture-collection1.webp', '../assets/fotos/furniture-collection2.jpg', '../assets/fotos/furniture-collection3.jpg'];

/* CONSIGNA: Escribir el código necesario para que al hacer click en su respectivo botón se circule la imagen de fondo del tag <main> con id "slider-background". Para esto deberán asignar eventos a los botones de la forma que prefieran, crear una función para iterar sobre el array "sliderContent" (si el usuario hace click para una dirección pero está en la posición final del array, la función deberá volver al primer item y viceversa) y editar el la propiedad "background-image" de nuestro <main> con id "slider-background" */


let currentIndex = 0;
const foto = document.getElementById('#slider');

//funcion para actualizar la img de fondo
function updateSlider() {
    foto.style.backgroundImage = `url(${sliderContent[currentIndex]})`;
}

//inicializa al cargar la pagina
updateSlider();

// para ir a la imagen 01
function goToImage01() {
    currentIndex = 0;
    updateSlider();
}

// para ir a la imagen 02
function goToImage02() {
    currentIndex = 1;
    updateSlider();
}

// para ir a la imagen 03
function goToImage03() {
    currentIndex = 2;
    updateSlider();
}

// botones
document.getElementById('01-button').addEventListener("click", goToImage01());
document.getElementById('02-button').addEventListener("click", goToImage02());
document.getElementById('03-button').addEventListener("click", goToImage03());

