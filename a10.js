function showdetailes(a, b, c) {
  let na, ag, av;
  typeof a === "string"
    ? (na = a)
    : typeof b === "string"
    ? (na = b)
    : typeof c === "string"
    ? (na = c)
    : console.log("error");
  typeof a === "number"
    ? (ag = a)
    : typeof b === "number"
    ? (ag = b)
    : typeof c === "number"
    ? (ag = c)
    : console.log("error");
  typeof a === "boolean"
    ? (av = a)
    : typeof b === "boolean"
    ? (av = b)
    : typeof c === "boolean"
    ? (av = c)
    : console.log("error");
  let x;
  av === true
    ? (x = "you are available for hire")
    : (x = "you are not available for hire");
  console.log(`Hellow ${na} , your age is ${ag} ${x}`);
}
showdetailes("abd", 23, true);
showdetailes(true, "abd", 23);
showdetailes(23, true, "abd");
showdetailes(false, 23, "abd");
