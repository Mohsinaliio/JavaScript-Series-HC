const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.8912;
console.log(otherNumber.toPrecision(3));

const hundreds = 10000000;
console.log(hundreds.toLocaleString());

//***************************** Math **************************** */
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(5.3));
console.log(Math.floor(2));
console.log(Math.min(4, 3, 9, 7, 2));

console.log(Math.random() * 10 + 1);
console.log(Math.random() * 10 + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
