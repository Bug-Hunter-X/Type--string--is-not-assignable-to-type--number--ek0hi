function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let x: number = 10;
let y: number = 5;

let sum: number = add(x, y);
console.log(sum); // Output: 15

let difference: number = subtract(x, y);
console.log(difference); // Output: 5

//Corrected code to handle potential string inputs:
function addCorrected(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  return numA + numB;
}

function subtractCorrected(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  return numA - numB;
}

let xStr: string = "10";
let yStr: string = "5";

let sumCorrected: number = addCorrected(xStr, yStr);
console.log(sumCorrected); // Output: 15

let differenceCorrected: number = subtractCorrected(xStr, yStr);
console.log(differenceCorrected); // Output: 5