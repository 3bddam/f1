let a = "Elzero Wep School";
//show 'Zero' by slice and charat
console.log(a.charAt(2).toLocaleUpperCase() + a.slice(3, 6));
// show 'H' 8 times
console.log(a.charAt(13).toLocaleUpperCase().repeat(8));
// show [Elzero] as array
console.log(a.split(" ", 1));
//show "Elzero school"
console.log(a.substring(0, 7) + a.slice(-6));
//show "eLZERO WEP SCHOOl"
console.log(
  a.charAt(0).toLowerCase() +
    a.slice(1, a.length - 1).toUpperCase() +
    a.charAt(a.length - 1).toLowerCase()
);
