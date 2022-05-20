// const display = document.querySelector('.display');
// const ac = document.querySelector('#ac');
// const pm = document.querySelector('#pm');
// const percent = document.querySelector('#percent');
// const divide = document.querySelector('#divide');
// const x = document.querySelector('#x');
// const minus = document.querySelector('#minus');
// const plus = document.querySelector('#plus');
// const equals = document.querySelector('#equals');
// const point = document.querySelector('#point');
// const b1 = document.querySelector('#b1');
// const b2 = document.querySelector('#b2');
// const b3 = document.querySelector('#b3');
// const b4 = document.querySelector('#b4');
// const b5 = document.querySelector('#b5');
// const b6 = document.querySelector('#b6');
// const b7 = document.querySelector('#b7');
// const b8 = document.querySelector('#b8');
// const b9 = document.querySelector('#b9');
// const b0 = document.querySelector('#b0');
let operation;
let value1;
let value2 = '';

const addPoint = () => {
  return !display.value.includes('.') ? (display.value += '.') : null;
};

const addZero = () => {
  return display.value[0] === '0' && display.value.length === 1 ? null : (display.value += '0');
};

const addOne = () => {
  return display.value[0] === '0' && display.value.length === 1 ? (display.value = '1') : (display.value += '1');
};

const addTwo = () => {
  return display.value[0] === '0' && display.value.length === 1 ? (display.value = '2') : (display.value += '2');
};

const addThree = () => {
  return display.value[0] === '0' && display.value.length === 1 ? (display.value = '3') : (display.value += '3');
};

const addFour = () => {
  return display.value[0] === '0' && display.value.length === 1 ? (display.value = '4') : (display.value += '4');
};

const addFive = () => {
  return display.value[0] === '0' && display.value.length === 1 ? (display.value = '5') : (display.value += '5');
};

const addSix = () => {
  return display.value[0] === '0' && display.value.length === 1 ? (display.value = '6') : (display.value += '6');
};

const addSeven = () => {
  return display.value[0] === '0' && display.value.length === 1 ? (display.value = '7') : (display.value += '7');
};

const addEight = () => {
  return display.value[0] === '0' && display.value.length === 1 ? (display.value = '8') : (display.value += '8');
};

const addNine = () => {
  return display.value[0] === '0' && display.value.length === 1 ? (display.value = '9') : (display.value += '9');
};

const divide = () => {
  value1 = display.value;
  operation = '/';
  display.value = '0';
};

const x = () => {
  value1 = display.value;
  operation = '*';
  display.value = '0';
};

const minus = () => {
  value1 = display.value;
  operation = '-';
  display.value = '0';
};

const plus = () => {
  value1 = display.value;
  operation = '+';
  display.value = '0';
};

x.addEventListener('click', function () {
  value1 = display.value;
  operation = '*';
});

function result() {}
