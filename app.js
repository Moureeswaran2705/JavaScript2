const display = document.getElementById('display');
function appendToDisplay(character) {
  display.value += character;
}
function clearDisplay() {
  display.value = '';
}
function calculateResult() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}
