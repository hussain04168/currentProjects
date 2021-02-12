// const sum = (a, b) => {
//   console.log(a * b);
// };
// const showInConsole = (x) => {
//   x(6, 4);
// };

// showInConsole(sum);

// const greeting = (name, callback) => {
//   callback("Hello " + name);
// };

// const printName = (print) => {
//   console.log(print);
// };

// greeting("Alusine Massaquoi", printName);

// const items = [
//   { price: 10 },
//   { price: 20 },
//   { price: 14 },
//   { price: 1 },
//   { price: 6 },
// ];

// const reducedValue = items.reduce((sum, number) => {
//   return sum + number.price;
// }, 0);

// console.log(reducedValue);

const addNewEntryButton = document.querySelector(".submit-btn");
const doneButton = document.querySelector(".done-btn");
const removeButton = document.querySelector(".remove-btn");
let userEntry = document.querySelector("#new-entry");
const todoListContainer = document.querySelector(".list-container");
