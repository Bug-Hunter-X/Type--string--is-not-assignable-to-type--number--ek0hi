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