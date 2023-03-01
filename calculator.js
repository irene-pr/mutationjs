export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  return a / b;
}

/**
 * This method will sum the numbers form n down to 0
 *  This is a start value
 * @return The summation of all the numbers
 */
export function summation(start) {
  let value = 0;
  while (start > 0) {
    value += start;
    start--;
  }
  return value;
}

export function isPositive(number) {
  return number > 0;
}

/**
 * This method will compare 2 numbers
 * @return 0 if a==b, 1 if a> b, -1 if a<b
 */
export function compare(a, b) {
  let value = 0;
  if (a == b) {
    value = 0;
  } else if (a > b) {
    value = 1;
  } else {
    value = -1;
  }
  return value;
}
