document.body.addEventListener('click', function () {
  document.querySelector('.intro').classList.add('hide');
  document.querySelector('.text').classList.add('hide');
  this.removeEventListener('click', arguments.callee, false);
});

const display = document.querySelector('.display');
let operation;
let value1;

const addPoint = () => {
  return !display.value.includes('.') ? (display.value += '.') : null;
};

let toggle = false;

calc = (btn) => {
  if (display.value == 0 && display.value.length === 1) {
    if (!Number(btn)) {
      return;
    }
    return (display.value = btn);
  }
  if (toggle) {
    display.value = '';
    toggle = false;
  }
  if (btn === '%') {
    return (display.value = display.value / 100);
  }
  if (btn === 'pm') {
    if (display.value !== 0) {
      display.value = -display.value;
    } else {
      return;
    }
  } else if (btn === '-') {
    if (value1) {
      display.value = +value1 - +display.value;
      value1 = 0;
    }
    value1 = display.value;
    operation = '-';
    toggle = true;
  } else if (btn === '+') {
    if (value1) {
      display.value = +value1 + +display.value;
      value1 = 0;
    }
    value1 = display.value;
    operation = '+';
    toggle = true;
  } else if (btn === '/') {
    if (value1) {
      display.value = +value1 / +display.value;
      value1 = 0;
    }
    value1 = display.value;
    operation = '/';
    toggle = true;
  } else if (btn === '*') {
    if (value1) {
      display.value = +value1 * +display.value;
      value1 = 0;
    }
    value1 = display.value;
    operation = '*';
    toggle = true;
  } else {
    display.value += btn;
  }
};

const ac = () => {
  operation = '';
  value1 = 0;
  display.value = 0;
};

const result = () => {
  if (operation === '-') {
    display.value = +value1 - +display.value;
    operation = '';
    value1 = '';
  } else if (operation === '+') {
    display.value = +value1 + +display.value;
    operation = '';
    value1 = '';
  } else if (operation === '/') {
    display.value = value1 / display.value;
    operation = '';
    value1 = '';
  } else if (operation === '*') {
    display.value = +value1 * +display.value;
    operation = '';
    value1 = '';
  }
};
