// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
const caracteresValidos = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

function limpiaInput() {
  // Limpia la caja de nombre.
  document.getElementById("amigo").value = "";
}

function nombreValido(nombre) {
  // Valida si el nombre contiene caracteres inválidos.
  return caracteresValidos.test(nombre);
}

function agregarAmigo() {
  // Obtiene el nombre y le borra los espacios del inicio y final.
  let inputNombre = document.getElementById("amigo").value.trim();

  // Comprueba si el nombre está en blanco.
  if (inputNombre === "") {
    alert(" ¡ Por favor, inserte un nombre !");
    limpiaInput();
    return;
  }

  // Comprueba si el nombre no está validado.
  if (!nombreValido(inputNombre)) {
    alert(" ¡ Nombre inválido. No debe contener números ni símbolos !");
    return;
  }

  // Comprueba si el nombre ya existe.
  if (amigos.includes(inputNombre)) {
    alert(" ¡ El nombre ya existe !");
    return;
  }

  // Agrega el nombre al array.
  amigos.push(inputNombre);

  // Limpia el input y la lista HTML, luego la reconstruye.
  limpiaInput();
  limpiaListaHtml();
  creaListaNombres();
}

function limpiaListaHtml() {
  // Limpia la lista.
  document.getElementById("listaAmigos").innerHTML = "";
}

function creaListaNombres() {
  // Recorre el array y los agrega en un li al ul.
  for (let i = 0; i < amigos.length; i++) {
    document.getElementById("listaAmigos").innerHTML += `<li>${amigos[i]}</li>`;
  }
}
