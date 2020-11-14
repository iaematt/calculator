var display = document.querySelector("#display");
var history_display = document.querySelector("#history");
var operator = "";

// FUNCTION CLEAR DISPLAY
function clear_display() {
  display.value = "";
  history_display.innerText = "";
  operator.value = "";
}

function add_number(value) {
  if (value === '.' && display.value.indexOf(".") === -1 || value !== '.') {
    display.value = display.value + value
  }
}

function add_operator(value) {
  if(display.value === "" && operator === ""){
    display.value = 0 + value
  } else {
    if(operator !== "") {
      console.log('resolver')
    } else {
      display.value = display.value + value
    }
  }
}

function equal_calc() {}