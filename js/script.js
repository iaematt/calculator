var input = document.querySelector("#display");
var operador;
var parar = false;

function limpar() {
  input.value = "";
  document.querySelector("#history").innerHTML = "";
}

function add_numero(string) {
  if (!parar) {
    if (string === '.' && input.value.indexOf(".") === -1 || string !== '.') {
      input.value = input.value + string;
      history.value = input.value;
    }
  } else {
    if (string === '.' && input.value.indexOf(".") === -1 || string !== '.') {
      input.value = "";
      parar = false;
      document.querySelector("#history").innerHTML = "";

      input.value = input.value + string;
    }
  }
}

function add_operador(op) {
  if (input.value == "") {
    input.value = "0";
  }

  operador = op;
  input.value = input.value + op;
}

function total() {
  if (!parar) {
    numeros = input.value.split(operador);

    if (numeros[1] == "") {
      input.value = input.value + 0;
      numeros[1] = 0;
    }

    document.querySelector("#history").innerHTML = input.value;

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

    parar = true;
  }
}
