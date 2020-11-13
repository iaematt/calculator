var display = document.querySelector("#display");
var historyDisplay = document.querySelector("#history");
var operator = "";

// FUNCTION CLEAR DISPLAY
function clearDisplay() {
  display.value = "";
  historyDisplay.innerText = "";
  operator.value = "";
}

function addNumber(value) {
  console.log("Add: " + value);
}
