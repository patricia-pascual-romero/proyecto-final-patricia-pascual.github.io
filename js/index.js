

// Barra de navegación (Fetch para que se repita en todas las páginas de la web)

fetch('/components/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('header').innerHTML = data;

        // Luego de cargar la barra de navegación, ejecuta el siguiente bloque de código
        initNavbar(); //Llamamos a la función para que se ejecute 
    })
    .catch


// Función para inicializar el menú desplegable
function initNavbar() {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('disable');
        navbar.classList.toggle('active');
    };
}

// Footer - Lo repetimos en todas las páginas de nuestra web

fetch('/components/footer.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('footer').innerHTML = data;
    })
    .catch







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




// SECCIÓN "QUE HACEMOS" DE LA PÁG SERVICIOS (Desplegable) 

document.addEventListener('DOMContentLoaded', function () {

    // Variable local 
    let desplegableItems = document.querySelectorAll('.desplegable-items');
  
    // Pasa sobre cada elemento 'desplegable-items' uno por uno (por eso se utiliza "forEach", para pasar por cada uno)
    desplegableItems.forEach(function (item) {
      
      item.addEventListener('click', function () { // Agrega un event listener para el clic en cada elemento  
        this.classList.toggle('active'); // Alterna la clase 'active' en el elemento clicado
      });
    });
});






  








// Carrousel imgs

//VARIABLES 
const grande = document.querySelector('.carrousel-services_grande')
const punto = document.querySelectorAll('.punto')

 // Cuando hago click en cada punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS los puntos
    // AÑADIR la clase activo al punto que hemos hecho CLICK


    punto.forEach( ( cadaPunto , i )=> { //Recorrer TODOS los puntos

        punto[i].addEventListener('click',()=>{  // Asignamos un click a cadaPunto
        
            let posicion  = i //Guardamos la posición de ese punto
            let operacion = posicion * -50 //Calculando el espacio que debe desplazarse el grande

            //Movemos el grande = Le voy a decir: Cógeme el div "grande" dentro de su style, mete la propiedad de "transform" y le vas a aplicar un translate en el eje X(-50%), pero en vez de poner "-50%"" le diremos que añada la operación que será igual a ese valor" - Así conseguiremos que al hacer click en el botón se desplace la img del carrousel.
            grande.style.transform = `translateX(${ operacion }%)`

            //Para que el punto se marque tenemos que quitar la clase "activo" a todos los puntos y se la ponemos al que esté activo.
            // Recorremos todos los puntos 
            punto.forEach( ( cadaPunto , i )=>{
                punto[i].classList.remove('activo') // Quitamos la clase ACTIVO a todos los puntos
            })
            punto[i].classList.add('activo') // Añadimos la clase ACTIVO en el punto al que hemos hecho click
        })
    })