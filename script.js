// Referencio Elementos del Dom
const botonPruebas = document.getElementById("botonPruebas");

// Funcion que cambia el texto del boton alternadamene
const cambiarTextoBoton = () =>{
  botonPruebas.textContent =
    botonPruebas.textContent === 'Mostrar'
    ? 'Ocultar'
    : 'Mostrar';
}

// Llamado de la funcion
botonPruebas.addEventListener('click', cambiarTextoBoton);