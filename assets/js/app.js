'use strict';
// This app requires a server to handle import statements and CORS issues
import * as utils from './utils.js';

utils.print('Welcome');

const mapHere = utils.select('.map-here');
const display = utils.select('.display');
const aboveDisplay = utils.select('.above-display');
const numbers = [7, 8, 9, 'C', 4, 5, 6, '×', 1, 2, 3, '÷', 0, '+', '-', '='];

const clearDisplay = () => {
  display.value = '';
  aboveDisplay.value = '';
};

// coverting the symbols dynamically for evaluation
const addToDisplay = value => {
  display.value += value === '×' ? '*' : value === '÷' ? '/' : value;
  aboveDisplay.value = display.value;
};

const evaluateExpression = () => {
  try {
    const result = eval(display.value);
    if (Number.isInteger(result)) {
      display.value = result;
    } else {
      display.value = result.toFixed(2);
    }
  } catch (error) {
    display.value = 'Error';
  }
};

const handleButtonClick = value => {
  switch (value) {
    case 'C':
      clearDisplay();
      break;
    case '=':
      evaluateExpression();
      break;
    default:
      addToDisplay(value);
      break;
  }
};

const mappedNumbers = numbers.map(number => {
  const button = utils.create('input');
  button.type = 'button';
  button.value = number;
  utils.listen('click', button, () => {
    handleButtonClick(button.value);
  });
  return button;
});

mappedNumbers.forEach(button => {
  mapHere.appendChild(button);
});
