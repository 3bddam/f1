//This code is to show the names of the admins along with the employees in alphabetical order
let admins = ["ahmad", "osama", "sayed", "stop", "samera"],
  employees = [
    "amjad",
    "samah",
    "ameer",
    "omar",
    "osman",
    "amany",
    "samia",
    "anwar",
  ];
document.write(`<div>we have ${c} admins</div>`);
for (let i = 0; i < admins.length; i++) {
  let k = 1;
  if (admins[i] === "stop") {
    break;
  }
  document.write(`<hr>`);
  document.write(`<div>`);
  document.write(`the admins for team number ${i + 1} is ${admins[i]} `);
  document.write(`<h3>Team members : </h3>`);
  for (let j = 0; j < employees.length; j++) {
    if (employees[j][0] === admins[i][0])
      document.write(`<p>- ${k++} ${employees[j]}</p>`);
  }
  document.write(`</div>`);
  document.write(`</hr>`);
}
