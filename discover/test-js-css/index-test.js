const elements = document.querySelectorAll(".element");

let firstText = document.querySelector(".flower-1");
let secondText = document.querySelector(".flower-2");
let thirdText = document.querySelector(".flower-3");
let fourthText = document.querySelector(".flower-4");

elements[0].addEventListener("click", () => {
  for (
    let currentElement = 0;
    currentElement < elements.length;
    currentElement++
  ) {
    if (currentElement == 0) {
      elements[currentElement].classList.add("active");
      firstText.style.display = "block";
    } else {
      elements[currentElement].classList.remove("active");
      firstText.style.display = "none";
    }
  }
});

elements[1].addEventListener("click", () => {
  for (
    let currentElement = 0;
    currentElement < elements.length;
    currentElement++
  ) {
    if (currentElement == 1) {
      elements[currentElement].classList.add("active");
      secondText.classList.add("displayed");
    } else {
      elements[currentElement].classList.remove("active");
      secondText.classList.remove("displayed");
    }
  }
});
elements[2].addEventListener("click", () => {
  for (
    let currentElement = 0;
    currentElement < elements.length;
    currentElement++
  ) {
    if (currentElement == 2) {
      elements[currentElement].classList.add("active");
      textDisplayed = 3;
    } else {
      elements[currentElement].classList.remove("active");
    }
  }
});
elements[3].addEventListener("click", () => {
  for (
    let currentElement = 0;
    currentElement < elements.length;
    currentElement++
  ) {
    if (currentElement == 3) {
      elements[currentElement].classList.add("active");
      textDisplayed = 4;
    } else {
      elements[currentElement].classList.remove("active");
    }
  }
});
