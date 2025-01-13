// Referencio Elementos del Dom
const botonPruebas = document.querySelector(".botonPruebas");
botonPruebas.style.cursor = 'pointer'; 

// Funcion que cambia el texto del boton alternadamene
function cambiarTextoBoton(){
  botonPruebas.textContent =
    botonPruebas.textContent === 'Mostrar'
    ? 'Ocultar'
    : 'Mostrar';
}

// Llamado de la funcion
botonPruebas.addEventListener('click', cambiarTextoBoton);