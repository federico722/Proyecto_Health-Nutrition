
function manejarClicCheck() {
    let checkE = document.querySelector(".check-E");
    let checkI = document.querySelector(".check-i");
    let check =document.querySelector(".check");
    let checkR =document.querySelector(".check-R");
    let checkA =document.querySelector(".check-A");
    let checkH =document.querySelector(".check-H")
    let checkW =document.querySelector(".check-w");

    if (check != null) {
        check.addEventListener('click', function(){
            redireccionar(check.checked, "../index.html", "../en/index.html");
        });
    }

    if (checkE !== null) {
        checkE.addEventListener('click', function() {
            redireccionar(checkE.checked, "../nutricion-deportiva.html", "../en/nutricion-deportiva.html");
        });
    }

    if (checkI !== null) {
        checkI.addEventListener('click', function() {
            redireccionar(checkI.checked, "../Salud_basica.html", "../en/Salud_basica.html");
        });
    }

    if (checkR !== null) {
        checkR.addEventListener('click', function() {
            redireccionar(checkR.checked, "../nutricion-basica.html", "../en/nutricion-basica.html");
        });
    }

    if (checkA !== null) {
        checkA.addEventListener('click', function() {
            redireccionar(checkA.checked, "../Dietas-especificas.html", "../en/Dietas-especificas.html");
        });
    }

    if (checkH !== null) {
        checkH.addEventListener('click', function() {
            redireccionar(checkH.checked, "../Enfermedades_Comunes.html", "../en/Enfermedades_Comunes.html");
        });
    }

    if (checkW !== null) {
        checkW.addEventListener('click', function() {
            redireccionar(checkW.checked, "../Hábitos_Saludables.html", "../en/Hábitos_Saludables.html");
        });
    }
}


function redireccionar(checked, rutaPrincipal, rutaEnIngles) {
    if (checked) {
        location.href = rutaPrincipal;
    } else {
        location.href = rutaEnIngles;
    }

}

manejarClicCheck();

// Errores identificados 
/*
cuando se cambia a otra pagina se cancela el modo noche o cuando se pone en ingles tambien se cancela 
*/ 

