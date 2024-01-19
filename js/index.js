

// Barra de navegación (Fetch para que se repita en todas las páginas de la web)

// Utilizamos Fetch para obtener el contenido del archivo 'navbar.html' desde la carpeta '../components/navbar.html'
fetch('../components/navbar.html') // Le digo dónde se encuentra el elemento que quiero repetir

    .then(response => response.text()) // El método 'then' se encadena para manejar la respuesta de la solicitud fetch convirtiéndola a texto
    .then(data => {  // Otro 'then' maneja los datos obtenidos (el contenido del archivo HTML)
        document.querySelector('header').innerHTML = data; //Le digo "quiero que en todas las etiquetas 'header' añadas esto"

        // Después de cargar la barra de navegación, ejecuta el siguiente bloque de código
        initNavbar(); //Llamamos a la función para que se ejecute 
    })
    .catch


// Footer - Lo repetimos en todas las páginas de nuestra web (igual que lo anterior)

// Utilizamos Fetch para obtener el contenido del archivo 'footer.html' desde la carpeta '../components/footer.html'
fetch('../components/footer.html')
    .then(response => response.text()) // El método 'then' se encadena para manejar la respuesta de la solicitud fetch convirtiéndola a texto
    .then(data => { // Otro 'then' maneja los datos obtenidos (el contenido del archivo HTML)
        document.querySelector('footer').innerHTML = data; // Actualiza el contenido del elemento 'footer' en la página con el contenido del archivo HTML
    })
    .catch


// Función para inicializar el menú desplegable (navbar)
function initNavbar() { 
    let menuIcon = document.querySelector('#menu-icon'); // Selecciona el elemento con el ID 'menu-icon' y lo almacena en la variable 'menuIcon'
    let navbar = document.querySelector('.navbar'); // Selecciona el elemento con la clase 'navbar' y lo almacena en la variable 'navbar'

    // Asigna un evento de clic a 'menuIcon' que ejecutará la siguiente función cuando se haga clic
    menuIcon.onclick = () => { 
        menuIcon.classList.toggle('disable'); // Alterna la clase 'disable' en 'menuIcon', es decir, la agrega si no está presente y la elimina si ya está presente
        navbar.classList.toggle('active'); // Alterna la clase 'active' en 'navbar', es decir, la agrega si no está presente y la elimina si ya está presente
    }
}

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