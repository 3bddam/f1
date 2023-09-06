//show in consol  String [osama] , [mohamad] , [ali] , [ibrahim] => Done
//and turn it to arrow function

// let names = function (...na) {
//   return `String [${na.join("] , [")}] => Done `;
// };

let names = (...na) => `String [${na.join("] , [")}] => Done `;

console.log(names("osama", "mohamad", "ali", "ibrahim"));

