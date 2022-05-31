const buttons = document.querySelectorAll('.calc__button');
const screen = document.querySelector('.screen');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const undo = document.querySelector('.undo');

// initiatilzing default values
let display = '';
let buttonValue = 0;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    //logic for button
    buttonValue = button.getAttribute('data-num'); // retrieves data attribute value eg: 1, 2, 4, etc.
    getDisplay();
  });
});

function getDisplay() {
  display += buttonValue;
  screen.textContent = display;
}

function getResult() {
  screen.textContent = eval(screen.textContent);  // TODO:  change to a more suitable alternative since eval() is expensively dangerous
}
// Clears the screen content
function clearScreen() {
  screen.textContent = '0';
  display = '';
}

/* Implements the delete button. 

- deletes the last character from the screen. 
*/

function undoInput() {
  display = display.slice(0, -1); //remove last character and return the remaining screen. 
  screen.textContent = display;

  if (display.length < 1) clearScreen(); // if zero character on the screen, reset screen.  
}

// ALL EVENT LISTENERS LIVES HERE

function setupEventListeners() {
  screen.addEventListener('click', getDisplay);
  clear.addEventListener('click', clearScreen);
  undo.addEventListener('click', undoInput);
  equal.addEventListener('click', getResult);
}

setupEventListeners();

// Footer date - Updated automatically

const date = new Date().getFullYear();
document.getElementById('year').innerHTML = date;
