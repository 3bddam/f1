/*
#Let the condition be true using the methods on var "st"


let st = "Elzero Web School";

if ((???? === "34") {
  console.log("Good");
}

// W Position May Change
if (???? === "w") {
  console.log("Good");
}

if (???? !== "string") {
  console.log("Good");
}

if (???? === "number") {
  console.log("Good");
}

if (??? === "ElzeroElzero") {
  console.log("Good");
}
*/

let st = "Elzero Web School";

if ((st.length * 2).toString() === "34") {
  console.log("Good");
}

// W Position May Change
if (st[st.indexOf("W")].toLowerCase() === "w") {
  console.log("Good");
}

if (st.length !== "string") {
  console.log("Good");
}

if (typeof st.length === "number") {
  console.log("Good");
}

if (st.slice(0, 6) + st.slice(0, 6) === "ElzeroElzero") {
  console.log("Good");
}
