// TODO: this file! :)

// base DOM element references.
const form = document.querySelector('form');
const numberinput = document.getElementById('number');
const numberbank = document.getElementById('numberBank').querySelector('output');

// empty arrays to hold the numbers.
let numbers = [];
let odds = [];
let evens = [];


function updateNumberBank() {
    numberbank.textContent = numbers.join(', ');
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const number = parseInt(numberinput.value, 10);

    if (!isNaN(number)) {
        numbers.push(number);
        updateNumberBank();
        numberinput.value = '';
    } else {
        alert('Please enter a valid number');
    }
} );

// button and display DOM elements
const sortOneButton = document.getElementById('sortOne');
const sortAllButton = document.getElementById('sortAll');
const oddsOutput = document.getElementById('odds').querySelector('output');
const evensOutput = document.getElementById('evens').querySelector('output');

// number bank display
function updateNumberBank() {
  const numberBank = document.getElementById('numberBank').querySelector('output');
  numberBank.textContent = numbers.join(', ');
}

// odds and evens display
function updateOddEvenDisplay() {
  oddsOutput.textContent = odds.join(', ');
  evensOutput.textContent = evens.join(', ');
}

// Event listener for "Sort 1"
sortOneButton.addEventListener('click', function () {
    if (numbers.length > 0) {
        const number = numbers.shift();
        // odds/evens loop
        if (number % 2 === 0) {
          evens.push(number); 
        } else {
          odds.push(number); 
        }
    
        // Update displays
        updateOddEvenDisplay();
        updateNumberBank(); 
      }
    });

// Event listener for "Sort All"
sortAllButton.addEventListener('click', function () {
    while (numbers.length > 0) {
      const number = numbers.shift();
      if (number % 2 === 0) {
        evens.push(number);
      } else {
        odds.push(number); 
      }
    }
    // Update displays
    updateNumberBank();   
    updateOddEvenDisplay();
  });