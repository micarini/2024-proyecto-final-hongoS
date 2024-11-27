/*GALERIA 1 HOME */

// hacer una funcion que forma galeria2 y adentro vamos a tener galeria armada y esa funcion la vamos a poner adentro del boton2 y cuando toque el boton 2 va a llamar a esa funcion y va a mostrar esa galeria. adentro de esa funcion vamos a tener que ponerle que a la galeria1 le cambie el style y se oculte STYLE DISPLAY NONE y asi hacer con todas! (muerte)
//boton.onclick addeventlist etcetc

//1
if(document.getElementById("section3")){
let seccion3 = document.querySelector("#section3");

// Función para crear una galería y agregarla al DOM
function crearGaleria(productos, gridId) {
    let grid = document.createElement("div");
    grid.setAttribute("id", gridId);
    grid.classList.add("galeria");

    for (let i=0; i<productos.length; i++) {
        let card = document.createElement("div");
        card.setAttribute("class", "card");

        let titulo = document.createElement("h3");
        titulo.className = "titulo";
        titulo.textContent = productos[i].titulo;

        let img = document.createElement("img");
        img.src = productos[i].img;
        img.className = "foto";

        let precio = document.createElement("p");
        precio.className = "precio";
        precio.textContent = productos[i].precio;

        // Eventos para cambiar la imagen al hacer hover
        img.addEventListener("mouseover", function(e) {
            e.target.src = productos[i].imgHover;
        });

        img.addEventListener("mouseout", function(e) {
            e.target.src = productos[i].img;
        });

        card.appendChild(img);
        card.appendChild(titulo);
        card.appendChild(precio);
        grid.appendChild(card);
    }

    // Agregar el grid a la sección
 seccion3.appendChild(grid)
}

// Datos de productos
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

let productos2 = [
    { titulo: "Antique Wood Chair", precioOriginal: "£150.00", precio: "£130.00", img: "assets/fotos/foto1-featuredp.webp", imgHover: "assets/fotos/foto1-featuredp-imghover.webp" },
    { titulo: "Paige Backless Stool", precioOriginal: "£10.00 – £100.00", precio: "£10.00 – £100.00", img: "assets/fotos/foto2-featuredp.webp", imgHover: "assets/fotos/foto2-featuredp-imghover.webp" },
    { titulo: "Viola Table Lamp", precioOriginal: "£50.00", precio: "£25.00", img: "assets/fotos/foto3-featuredp.webp", imgHover: "assets/fotos/foto3-featuredp-imghover.webp" },
    { titulo: "Grey Brown Chair", precioOriginal: "£180.00", precio: "£150.00", img: "assets/fotos/foto4-featuredp.webp", imgHover: "assets/fotos/foto4-featuredp-imghover.webp" },
    { titulo: "Lounge Accent Chair", precioOriginal: "£240.00", precio: "£220.00", img: "assets/fotos/foto5-featuredp.webp", imgHover: "assets/fotos/foto5-featuredp-imghover.webp" },
    { titulo: "Wood Mini Stool", precioOriginal: "£240.00", precio: "£220.00", img: "assets/fotos/foto6-featuredp.webp", imgHover: "assets/fotos/foto6-featuredp-imghover.webp" },
    { titulo: "Wooden Dining Chair", precioOriginal: "£240.00", precio: "£220.00", img: "assets/fotos/foto7-featuredp.webp", imgHover: "assets/fotos/foto7-featuredp-imghover.webp" },
    { titulo: "Round Coffee Table", precioOriginal: "£240.00", precio: "£220.00", img: "assets/fotos/foto8-featuredp.webp", imgHover: "assets/fotos/foto8-featuredp-imghover.webp" }
];

let productos3 = [
    { titulo: "Black Brown Chair", precioOriginal: "£180.00", precio: "£150.00", img: "assets/fotos/foto1-bests.webp", imgHover: "assets/fotos/foto1-bests-imghover.webp" },
    { titulo: "Coal Paige Stool", precioOriginal: "£50.00", precio: "£25.00", img: "assets/fotos/foto2-bests.webp", imgHover: "assets/fotos/foto2-bests-imghover.webp" },
    { titulo: "Normal Wood Chair", precioOriginal: "£10.00 – £100.00", precio: "£10.00 – £100.00", img: "assets/fotos/foto3-bests.webp", imgHover: "assets/fotos/foto3-bests-imghover.webp" },
    { titulo: "Oscar Wood Stool", precioOriginal: "£150.00", precio: "£130.00", img: "assets/fotos/foto4-bests.webp", imgHover: "assets/fotos/foto4-bests-imghover.webp" },
    { titulo: "Sitting Chair", precioOriginal: "", precio: "£255.00", img: "assets/fotos/foto5-bests.webp", imgHover: "assets/fotos/foto5-bests-imghover.webp" },
    { titulo: "Outdoor Armchair", precioOriginal: "", precio: "£255.00", img: "assets/fotos/foto6-bests.webp", imgHover: "assets/fotos/foto6-bests-imghover.webp" },
    { titulo: "Wooden Living Stool", precioOriginal: "", precio: "£255.00", img: "assets/fotos/foto7-bests.webp", imgHover: "assets/fotos/foto7-bests-imghover.webp" },
    { titulo: "Bar Stools", precioOriginal: "", precio: "£255.00", img: "assets/fotos/foto8-bests.webp", imgHover: "assets/fotos/foto8-bests-imghover.webp" }
];

// Crear las tres galerías
crearGaleria(productos1, "grid1");
crearGaleria(productos2, "grid2");
crearGaleria(productos3, "grid3");

// Función para mostrar la galería seleccionada y ocultar las demás
function mostrarGaleria(id) {
    let galerias = document.querySelectorAll(".galeria");
    for (let i = 0; i < galerias.length; i++) {
        galerias[i].style.display = "none";
    }
    document.getElementById(id).style.display = "grid";
}

// Asignar eventos a los botones para cambiar entre galerias
document.getElementById("boton1").addEventListener("click", function () {
    mostrarGaleria("grid1");
}); 

document.getElementById("boton2").addEventListener("click", function () {
    mostrarGaleria("grid2");
});

document.getElementById("boton3").addEventListener("click", function () {
    mostrarGaleria("grid3");
});

// Ocultar todas las galerías al inicio excepto la primera
mostrarGaleria("grid1");

}

/*GALERIA 2 HOME*/

//guardo el body en una variable

if(document.getElementById("section5")){
const seccion5 = document.querySelector("#section5");

let h4_seccion5 = document.createElement("h4");
h4_seccion5.textContent = "NEW PRODUCTS";
seccion5.appendChild(h4_seccion5);

let grid4 = document.createElement("div");
//tengo que ponerle un id a mi contenedor grid
grid4.setAttribute("id", "grid4"); //cambiandole el atributo id por el que quiero
seccion5.appendChild(grid4);//inserto en el body mi grid

let productos4 = [
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

let card4;
for (let i = 0; i < productos4.length; i++) {
    card4 = document.createElement("div"); //creo el contenedor que sera la card2
    card4.setAttribute("class", "card4"); //le agrego la clase card2 para poder modificarlas todas juntas

    //creo el titulo
    let titulo = document.createElement("h3");
    titulo.setAttribute("class", "titulo"); // le agrego la clase para despues manipularlo todo junto
    titulo.textContent = productos4[i].titulo; //agrego el titulo por medio del array

    //creo el elemento imagen
    let img = document.createElement("img");
    img.setAttribute("src", productos4[i].img); // Usar la ruta de imagen desde el array
    img.setAttribute("class", "foto"); // Le agrego una clase para manipularlas juntas

    // Crear el elemento precio
    let precio = document.createElement("p");
    precio.setAttribute("class", "precio"); // Clase para estilizar después
    precio.textContent = productos4[i].precio; // Agregar el precio desde el array

    card4.appendChild(img);
    card4.appendChild(titulo);
    card4.appendChild(precio)

    //ahora agarro el grid y le pongo las cards
    grid4.appendChild(card4); //esta accion tiene que estar adentro del for para que por cada vuelta se inserte la card de cada vuelta

    //Evento mouseover para cambiar la imagen
    img.addEventListener("mouseover", function () {
        img.setAttribute("src", productos4[i].imgHover);
    });

    // Evento mouseout para restaurar la imagen original
    img.addEventListener("mouseout", function () {
        img.setAttribute("src", productos4[i].img);
    });
}
}

/*SLIDER HOME*/
if (document.getElementById("slider")) {
    const sliderContent = [
        'assets/fotos/furniture-collection1.webp',
        'assets/fotos/furniture-collection2.jpg',
        'assets/fotos/furniture-collection3.jpg'
    ];

    let currentIndex = 0;
    const foto = document.getElementById('slider'); // Corrige la selección del elemento

    // Función para actualizar la imagen de fondo
    function updateSlider() {
        foto.style.backgroundImage = `url(${sliderContent[currentIndex]})`;
    }

    // Inicializa el fondo al cargar la página
    updateSlider();

    // Funciones para cambiar las imágenes
    function goToImage01() {
        currentIndex = 0;
        updateSlider();
    }

    function goToImage02() {
        currentIndex = 1;
        updateSlider();
    }

    function goToImage03() {
        currentIndex = 2;
        updateSlider();
    }

    // Asignar eventos a los botones
    document.getElementById('button1').addEventListener("click", goToImage01);
    document.getElementById('button2').addEventListener("click", goToImage02);
    document.getElementById('button3').addEventListener("click", goToImage03);
}


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
            'https://picsum.photos/1920/1200?random=1', 
            'https://picsum.photos/1920/1200?random=2', 
            'https://picsum.photos/1920/1200?random=3'
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