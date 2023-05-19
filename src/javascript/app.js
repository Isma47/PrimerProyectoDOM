document.addEventListener("DOMContentLoaded", () => {
  menuHamburguesaOpen();

  formularioMensaje();
});

//Menu hamburguesa
const headerNavegacion = document.querySelector(".header-nav");
const headerHamburguesa = document.querySelector(".header-hamburguesa");

//Abrir y cerrar menu
function menuHamburguesaOpen() {
  headerHamburguesa.addEventListener("click", () => {
    //Abririr y cerrar menu hamburguesa
    headerNavegacion.classList.toggle("flex");
    //Estilos en archivo css para el menu cuando esta abierto
    headerNavegacion.classList.toggle("open-menu");
    headerNavegacion.classList.toggle("hidden");

    console.log("Si funciona");
  });

  subirIconoMenu();
}

//icono de menu hamburguesa sube con index-z cuuando se abre el menu
function subirIconoMenu() {
  headerHamburguesa.addEventListener("click", () => {
    headerHamburguesa.classList.toggle("subir-icono");
  });
}

//formualrio dom
const formularioNombre = document.querySelector("#nombre");
const formularioApellido = document.querySelector("#apellido");
const formularioTarjeta = document.querySelector("#numeroTarjeta");
const formularioFecha = document.querySelector("#fecha");
const formularioCvv = document.querySelector("#cvv");
const formularioEmail = document.querySelector("#email");
const formularioTelefono = document.querySelector("#telefono");
const formularioLocalidad = document.querySelector("#localidad");

function formularioMensaje() {
  formularioNombre.addEventListener("blur", inputElegido);
  formularioApellido.addEventListener("blur", inputElegido);
  formularioTarjeta.addEventListener("blur", inputElegido);
  formularioFecha.addEventListener("blur", inputElegido);
  formularioCvv.addEventListener("blur", inputElegido);
  formularioEmail.addEventListener("blur", inputElegido);
  formularioTelefono.addEventListener("blur", inputElegido);
  formularioLocalidad.addEventListener("blur", inputElegido);
}

function inputElegido(e) {
  if (e.target.value.trim() === "") {
    inputError(
      `El apartado de ${e.target.id} está vació`,
      e.target.parentElement
    );
  }
}

function inputError(mensajeError, mensajeErrorPadre) {

  const error = document.createElement("P");
  error.textContent = mensajeError;
  mensajeErrorPadre.appendChild(error);

  error.classList.add("bg-red-500", "text-center", "font-bold");
  borrarAlerta(mensajeErrorPadre);

}

//Borrar elemento

function borrarAlerta(mensajeErrorPadre) {
  let arrayMensajePadre = Array.from(mensajeErrorPadre);
  console.log(arrayMensajePadre);

  arrayMensajePadre.forEach(borrarElemento => {
        if(borrarElemento.childNodes[5].classList.contains('bg-red-500')) {
            console.log('funciona');
        }
  });
}
