const userInput = document.querySelector(".user-input");

userInput.addEventListener("keyup", (event) => {
  let searchQuery = event.target.value.toLowerCase();
  let allDivDomCollection = document.querySelectorAll("[data-brand]");
  let genderArray = document.querySelectorAll("[data-gender]");

  for (let i = 0; i < allDivDomCollection.length; i++) {
    const arrayCollect = allDivDomCollection[i].getAttribute("data-gender");

    if (arrayCollect.includes(searchQuery)) {
      allDivDomCollection[i].style.display = "block";
      allDivDomCollection[i].style.transform = "translateX(0)";
    } else {
      allDivDomCollection[i].style.display = "none";
    }
  }
});
