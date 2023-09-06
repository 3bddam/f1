//This code is to show what is required in the comments using methods and variables only
//(zero , counter)
let my = ["Ahmad", "Mazero", "Elham", "Osama", "Jamal", "Ameer"];
let zero = 0,
  counter = 3;
//show [ "Osama", "Elham", "Mazero","Ahmad"]
let y = my.slice(zero, ++counter).reverse();
console.log(y);
//show ["Elham , "Mazero"]
let x = my.slice(++zero, my.length - --counter).reverse();
console.log(x);

// show "Elzero"
let a = x[--zero],
  b = a.slice(zero, a.length - counter);
c = x[++zero];
d = c.slice(--counter);
console.log(b.concat(d));
//show "rO"
let f = c.slice(c.length - counter);
console.log(f);
console.log(f[--zero] + f[--f.length].toUpperCase());
if (my.includes("Ahmad")) console.log("yes");
