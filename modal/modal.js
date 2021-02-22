// Variable declaration
let openModalButton = document.querySelector(".open-modal-btn");
let overlay = document.querySelector(".overlay");
let modalContainer = document.querySelector(".modal-container");
let closeModalButton = document.querySelector(".close-modal-btn");

openModalButton.addEventListener("click", () => {
  overlay.style.display = "block";
  modalContainer.style.display = "block";
});

closeModalButton.addEventListener("click", () => {
  overlay.style.display = "none";
  modalContainer.style.display = "none";
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  modalContainer.style.display = "none";
});
