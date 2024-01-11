

/* Barra de navegación (se repite en todas las páginas)*/

fetch('/components/navbar.html')
.then(response => response.text())
.then(data => {
    document.querySelector('header').innerHTML = data;
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




// Menu desplegable 

let menu = document.querySelector(".menu1--mobile");

function openMenu() {
    menu.classList.add("menu--ov");
  }

function closeMenu() {
    menu.classList.remove
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