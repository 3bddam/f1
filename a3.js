console.log((100).toString());
let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;
console.log(parseInt(a));
console.log(parseInt(b));
console.log(parseInt(c));
console.log(parseInt(d));
//find smalest number
console.log(
  Math.min(Math.round(a), Math.round(b), Math.round(c), Math.round(d))
);
//use variable a,d to get 10000
console.log(Math.pow(Math.round(a), Math.floor(d)));
//get integer "2" from variable d with 4 methods
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(parseInt(d));
//use variable b,d to get 66.67->string and 67 -> number
console.log((parseInt(b) / Math.ceil(d)).toFixed(2).toString());
console.log(Math.ceil(parseInt(b) / Math.ceil(d)));
