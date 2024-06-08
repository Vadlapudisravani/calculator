let display = document.getElementById('display');
let currentExpression = '';

document.getElementById('all-clear').addEventListener('click', function() {
  currentExpression = '';
  display.innerText = '0';
});

function appendCharacter(character) {
  if (currentExpression === '' && character === '.') {
    currentExpression = '0.';
  } else {
    currentExpression += character;
  }
  display.innerText = currentExpression;
}

function calculateResult() {
  try {
    currentExpression = eval(currentExpression).toString();
    display.innerText = currentExpression;
  } catch (error) {
    display.innerText = 'Error';
    currentExpression = '';
  }
}

function calculateSquare() {
  try {
    let result = eval(currentExpression);
    currentExpression = (result * result).toString();
    display.innerText = currentExpression;
  } catch (error) {
    display.innerText = 'Error';
    currentExpression = '';
  }
}
