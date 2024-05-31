
'use strict';
// This app requires a server to handle import statements and CORS issues
import * as utils from './utils.js';

utils.print('Welcome');

const mapHere = document.querySelector('.map-here');
const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '+', '-'];

const mappedNumbers = numbers.map(number => {
  const button = document.createElement('input');
  button.type = 'button';
  button.value = number;
  return button;
});

// Append the buttons to the div
mappedNumbers.forEach(button => {
  mapHere.appendChild(button);
});


