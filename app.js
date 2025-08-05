// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
const caracteresValidos = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

function limpiaInput() {
  // Limpia la caja de nombre.
  document.getElementById("amigo").value = "";
}

function nombreValido(nombre) {
  // Valida si el nombre contiene caracteres válidos.
  return caracteresValidos.test(nombre);
}

function agregarAmigo() {
  // Obtiene el nombre y elimina los espacios de inicio y final.
  let inputNombre = document.getElementById("amigo").value.trim();

  // Verifica si el nombre está en blanco.
  if (inputNombre === "") {
    alert(" ¡ Por favor, inserte un nombre !");
    limpiaInput();
    return;
  }

  // Verifica si el nombre es validado.
  if (!nombreValido(inputNombre)) {
    alert(" ¡ Nombre inválido. No debe contener números ni símbolos !");
    return;
  }

  // Verifica si el nombre ya existe.
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
  // Limpia todos los elementos de la lista HTML"
  document.getElementById("listaAmigos").innerHTML = "";
}

function creaListaNombres() {
  // Recorre el array y agrega cada nombre como un <li> al <ul>.
  for (let i = 0; i < amigos.length; i++) {
    document.getElementById("listaAmigos").innerHTML += `<li>${amigos[i]}</li>`;
  }
}

function sortearAmigo() {
  // Valida que haya amigos disponibles.
  if (amigos.length === 0) {
    return;
  }

  let resultado = document.getElementById("resultado");
  // Genera un número al azar entre 0 y el número de elementos del array.
  let indiceRandom = Math.floor(Math.random() * amigos.length);
  let nombreSorteado = amigos[indiceRandom];

  // Limpia todos los elementos de la lista HTML"
  limpiaListaHtml();

  // Muestra el nombre sorteado en la lista de resultados.
  resultado.innerHTML = `<li>${nombreSorteado}</li>`;
}
