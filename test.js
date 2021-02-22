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

const form = document.querySelector(".entries-form");
let userEntry = document.querySelector("#new-entry");
let todoListContainer = document.querySelector(".list-container");
const alertMessage = document.querySelector(".blank-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let newLi = document.createElement("li");
  let inputResult = userEntry.value;
  let newDiv = document.createElement("div");
  let newParagraph = document.createElement("p");
  let doneButton = document.createElement("button");
  let removeButton = document.createElement("button");
  if (userEntry.value !== "") {
    removeButton.textContent = "Remove";
    doneButton.textContent = "Done";
    doneButton.classList.add("done-btn");
    removeButton.classList.add("remove-btn");
    newParagraph.textContent = inputResult;
    newParagraph.style.textTransform = "capitalize";
    newDiv.append(newParagraph, doneButton, removeButton);
    newDiv.classList.add("list-item");
    newLi.append(newDiv);
    todoListContainer.appendChild(newLi);
  } else {
    alertMessage.style.display = "block";
  }

  alertMessage.addEventListener("click", (event) => {
    alertMessage.style.display = "none";
  });

  doneButton.addEventListener("click", () => {
    newParagraph.style.textDecoration = "line-through";
    newParagraph.style.textDecorationThickness = ".25em";
  });

  removeButton.addEventListener("click", () => {
    todoListContainer.removeChild(newLi);
  });

  userEntry.value = "";
});
