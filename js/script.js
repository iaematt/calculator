var input = document.querySelector("#num");
var operador;
var parar = false;

function limpar() {
  input.value = "";
  document.querySelector("#history").innerHTML = "";
}

function add_numero(string) {
  if (!parar) {
    input.value = input.value + string;
    history.value = input.value;
  } else {
    input.value = "";
    parar = false;
    document.querySelector("#history").innerHTML = "";

    input.value = input.value + string;
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

    if(numeros[1] == "") {
      input.value = input.value + 0
      numeros[1] = 0
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

function tecla() {
  press = event.keyCode;

  console.log(press);

  switch (press) {
    case 13:
      total();
      break;

    case 42:
      add_operador("*");
      break;

    case 43:
      add_operador("+");
      break;

    case 44:
      add_numero(".");
      break;

    case 45:
      add_operador("-");
      break;

    case 46:
      add_numero(".");
      break;

    case 47:
      add_operador("/");
      break;

    case 48:
      add_numero(0);
      break;

    case 49:
      add_numero(1);
      break;

    case 50:
      add_numero(2);
      break;

    case 51:
      add_numero(3);
      break;

    case 52:
      add_numero(4);
      break;

    case 53:
      add_numero(5);
      break;

    case 54:
      add_numero(6);
      break;

    case 55:
      add_numero(7);
      break;

    case 56:
      add_numero(8);
      break;

    case 57:
      add_numero(9);
      break;
  }
}

document.body.onkeypress = tecla;
