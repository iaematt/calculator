var input = document.querySelector("#num");
var operador;

function limpar() {
  input.value = "";
}

function add_numero(num) {
  input.value = input.value + num;
}

function add_operador(op) {
  operador = op;
  input.value = input.value + op;
}

function total() {
  numeros = input.value.split(operador);

  switch (operador) {
    case "+":
      input.value = Number(numeros[0]) + Number(numeros[1]);
      break;

    case "-":
      input.value = numeros[0] - numeros[1];
      break;

    case "*":
      input.value = numeros[0] * numeros[1];
      break;

    case "/":
      input.value = numeros[0] / numeros[1];
      break;
  }
}
