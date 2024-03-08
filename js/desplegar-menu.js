document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".img__menu--line");
    const menuDropdown = document.querySelector(".menu-desplegado");
    const bottomDespliege = document.querySelector(".bottom_despliege");

    // Función para mostrar el menú desplegable
    function showMenu() {
        menuDropdown.style.opacity = "1";
        menuDropdown.style.visibility = "visible";
        menuButton.style.opacity = "0";
        menuButton.style.visibility = "hidden";
    }

    // Función para ocultar el menú desplegable
    function hideMenu() {
        menuDropdown.style.opacity = "0";
        menuDropdown.style.visibility = "hidden";
        menuButton.style.opacity = "1";
        menuButton.style.visibility = "visible";
    }

    // Event listener para el botón del menú
    menuButton.addEventListener("click", function() {
        showMenu();
    });

    // Event listener para el botón "bottom_despliege"
    bottomDespliege.addEventListener("click", function() {
        showMenu();
    });

    // Si se hace clic fuera del menú, se oculta
    document.addEventListener("click", function(event) {
        if (!menuDropdown.contains(event.target) && event.target !== menuButton && event.target !== bottomDespliege) {
            hideMenu();
        }
    });
});
