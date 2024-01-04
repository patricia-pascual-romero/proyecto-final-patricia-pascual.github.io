


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




// Menu desplegable - Barra de navegación

let menu = document.querySelector("#menu-desplegable");


function desplegable () {
    menu.classList.toggle("active"); 
}