import {
  add,
  subtract,
  multiply,
  divide,
  summation,
  isPositive,
  compare,
} from "./calculator";

test("add", () => {
  const n1 = 1;
  const n2 = 1;
  const expectedResult = 2;

  const result = add(n1, n2);

  expect(result).toBe(expectedResult);
});

test("substract", () => {
  const n1 = 0;
  const n2 = 0;
  const expectedResult = 0;

  const result = subtract(n1, n2);

  expect(result).toBe(expectedResult);
});

test("multiply", () => {
  const n1 = 1;
  const n2 = 1;
  const expectedResult = 1;

  const result = multiply(n1, n2);

  expect(result).toBe(expectedResult);
});

test("divide 1", () => {
  const n1 = 0;
  const n2 = 100;
  const expectedResult = 0;

  const result = divide(n1, n2);

  expect(result).toBe(expectedResult);
});

test("divide 2", () => {
  const n1 = 105;
  const n2 = 10;
  const expectedResult = 10.5;

  const result = divide(n1, n2);

  expect(result).toBe(expectedResult);
});

test("summation 1", () => {
  const n = 2;
  const expectedResult = 3;

  const result = summation(n);

  expect(result).toBe(expectedResult);
});

test("summation 2", () => {
  const n = 1;
  const expectedResult = 1;

  const result = summation(n);

  expect(result).toBe(expectedResult);
});

test("summation 3", () => {
  const n = 0;
  const expectedResult = 0;

  const result = summation(n);

  expect(result).toBe(expectedResult);
});

test("isPositive 1", () => {
  const n = 2;
  const expectedResult = true;

  const result = isPositive(n);

  expect(result).toBe(expectedResult);
});

test("isPositive 2", () => {
  const n = -2;
  const expectedResult = false;

  const result = isPositive(n);

  expect(result).toBe(expectedResult);
});

test("compare 1", () => {
  const n1 = 0;
  const n2 = 0;
  const expectedResult = 0;

  const result = compare(n1, n2);

  expect(result).toBe(expectedResult);
});

test("compare 2", () => {
  const n1 = 2;
  const n2 = 0;
  const expectedResult = 1;

  const result = compare(n1, n2);

  expect(result).toBe(expectedResult);
});
