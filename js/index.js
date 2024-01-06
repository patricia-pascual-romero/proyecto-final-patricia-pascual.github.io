

/* Barra de navegación (se repite en todas las páginas)

fetch('../components/navbar.html')
then(response => response.text())
.then(data => {
    document.querySelector('.nav-bar').innerHTML = data;
})
.catch

*/







// Página Nosotros - Sección EQUIPO (Recopilar los departamentos según se hace scroll)


/* Solucionar!! Que se quede pegado más abajo sin que lo tape la barra de navegación (y sin que de problemas porque al cambiar el sticky en px va raro) */

document.addEventListener("DOMContentLoaded", function() {
    // Variable - Conectar con la sección "departament-section" en HTMl
    let sections = document.querySelectorAll(".department-section");

    // Cuando hacemos scroll 
    window.addEventListener("scroll", function() {
        // Obtener la posición de desplazamiento actual
        let scrollPosition = window.scrollY;

        // Para cada sección en la página
        sections.forEach(section => {
            // Obtener la posición superior e inferior de la sección
            let sectionTop = section.offsetTop;
            let sectionBottom = sectionTop + section.offsetHeight;

            // Verificar si la posición de desplazamiento está dentro de los límites de la sección
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Si es así, hacer que la sección se quede pegada en la parte superior de la pantalla
                section.style.position = "sticky";
                section.style.top = "0"; // Pegada en la parte superior
            } else {
                // Si no, volver a la posición normal (relativa)
                section.style.position = "relative";
            }
        });
    });
});




// Menu desplegable (TERMINAR BIEN)
let menu = document.querySelector("#popup-ov-menu");


function popup () {
    menu.classList.toggle("active"); 
}



// Carrousel Página Servicios

// 1ª PARTE

// - Variables

let sliderImg = document.querySelectorAll('.slider--img'); // -- Guardamos en una variable todos los elementos img que darán como valor una array.
let sliderInner = document.querySelector('.slider--inner'); // -- Guardamos en una variable el contenedor de las imágenes para moverlo posteriormente.
let sliderActual = 0; // -- Creamos una variable un contador del slider actual.

// 2ª PARTE

// - Funciones


setInterval(() => {  // -- Creamos un intervalo con una función arrow.

    if(sliderActual<sliderImg.length - 1) {  // --- Si el valor del slider actual es menor que la cantidad de img almacenadas en la variable -1:
        sliderActual++;  // ---- Aumenta el valor del slider actual.
        let calculo = sliderActual * -100;   // ---- Se declara una variable para hacer un cálculo que multiplique el slider actual por -100
        sliderInner.style.transform = `translateX(${calculo}vw)`;  // ---- Modificamos el atributo style del contenedor de las imágenes agregandole un transform translateX con el valor de la variable anterior. Le añadimos la medida al final del resultado, por ejemplo vw.
    
    } else if (sliderActual == sliderImg.length - 1) {  // --- Si no es menor, pero si es el valor del slider actual igual que la cantidad de img almacenadas en la variable -1:
        sliderActual = 0; // ---- El valor del slider actual pasa a 0.
        let calculo = sliderActual * -100;  // ---- Se declara una variable para hacer un cálculo que multiplique el slider actual por -100.
        sliderInner.style.transform = `translateX(${calculo}vw)`;// ---- Modificamos el atributo style del contenedor de las imágenes agregandole un transform translateX con el valor de la variable anterior. Le añadimos la medida al final del resultado, por ejemplo vw.
    }

}, 3000); // -- Le damos un tiempo de ejecución al intervalo





// Slider con btns

// 1ª PARTE

// - VARIABLES

// -- Guardamos el objeto img en una variable.
let sliderItem = document.querySelector("img");

// -- Creamos una array con las url de las imágenes en formato string.
let imagenes = [
    "",
    "",
    "",
    "",
];

// -- Creamos una variable para el número del slider actual.
    let actualSlider = 0;

// -- Le asignamos la primera imagen al atributo src del img que guardamos, para que al iniciar comience con una imagen establecida.
    sliderItem.src = imagenes[actualSlider];

// 2ª PARTE

// - FUNCIONES

// -- Declaramos la función para el botón "next"

    function btnNext() {
        actualSlider++;  // --- Aumentamos el valor de la variable que almacena el slider actual.
        
        if (actualSlider >= imagenes.length) { // --- Si el valor es > o = que el largo de la array (es decir, ha llegado a la última img):
            actualSlider = 0; // ---- El valor del slider actual vuelve a 0 (vuelve a empezar desde la 1ª img).
        }
        sliderItem.src = imagenes[actualSlider];
    }                    // --- Le asignamos al atributo src del img el valor de la array en la posición de la variable con el slider actual.

// -- Declaramos la función para el botón "prev"
    function btnPrev() {
    if (actualSlider <= 0) { // --- Si el valor del slider actual es menor o igual a 0 (es decir, no hay más imágenes por detrás):
        actualSlider = imagenes.length - 1;
                            // ---- Se le asigna al slider actual el valor del "largo" de la array - 1, ya que las arrays cuentan desde 0.
    } else { // --- Si no:
        actualSlider--; // ---- Restamos el valor del slider actual.
    }
    sliderItem.src = imagenes[actualSlider]; // --- Le asignamos al atributo src del img el valor de la array en la posición de la variable con el slider actual.

    }


    