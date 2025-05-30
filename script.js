// Esta función fue hecha por Ale y Katy. :D
// Esto fue sacado de la parte de funciones y operaciones
function suma() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  num1 = parseInt(num1);
  num2 = parseInt(num2);

  // Validación de que ambos valores sean números
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("resultado").innerHTML = "Por favor, ingresa números válidos.";
    console.error("Entrada inválida: no es un número.");
    return;
  }

  let resultado = num1 + num2;
  document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
  console.info(`Se sumó ${num1} y ${num2} y el resultado es ${resultado}`);
}

function resta() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  num1 = parseInt(num1);
  num2 = parseInt(num2);

  // Validación de que ambos valores sean números
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("resultado").innerHTML = "Por favor, ingresa números válidos.";
    console.error("Entrada inválida: no es un número.");
    return;
  }

  let resultado = num1 - num2;
  document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
  console.info(`Se restó ${num1} y ${num2} y el resultado es ${resultado}`);
}

function multi() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  num1 = parseInt(num1);
  num2 = parseInt(num2);

  // Validación de que ambos valores sean números
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("resultado").innerHTML = "Por favor, ingresa números válidos.";
    console.error("Entrada inválida: no es un número.");
    return;
  }

  let resultado = num1 * num2;
  document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
  console.info(`Se multiplicó ${num1} y ${num2} y el resultado es ${resultado}`);
}

function divi() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  num1 = parseInt(num1);
  num2 = parseInt(num2);

  // Validación de que ambos valores sean números
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("resultado").innerHTML = "Por favor, ingresa números válidos.";
    console.error("Entrada inválida: no es un número.");
    return;
  }

  // Validación de división por cero
  if (num2 === 0) {
    document.getElementById("resultado").innerHTML = "Error: no se puede dividir entre cero.";
    console.error("Intento de división por cero.");
    return;
  }

  let resultado = num1 / num2;
  document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
  console.info(`Se dividió ${num1} y ${num2} y el resultado es ${resultado}`);
}
