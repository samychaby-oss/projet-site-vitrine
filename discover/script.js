const elements = document.querySelectorAll(".element");

let firstText = document.querySelector(".flower-1");
let secondText = document.querySelector(".flower-2");
let thirdText = document.querySelector(".flower-3");
let fourthText = document.querySelector(".flower-4");

function hideAllTexts() {
  firstText.style.display = "none";
  secondText.style.display = "none";
  thirdText.style.display = "none";
  fourthText.style.display = "none";
}

function deactivateAllElements() {
  elements[0].classList.remove("active");
  elements[1].classList.remove("active");
  elements[2].classList.remove("active");
  elements[3].classList.remove("active");
}

elements[0].addEventListener("click", () => {
  deactivateAllElements();
  hideAllTexts();

  elements[0].classList.add("active");
  firstText.style.display = "block";
});

elements[1].addEventListener("click", () => {
  deactivateAllElements();
  hideAllTexts();

  elements[1].classList.add("active");
  secondText.style.display = "block";
});

elements[2].addEventListener("click", () => {
  deactivateAllElements();
  hideAllTexts();

  elements[2].classList.add("active");
  thirdText.style.display = "block";
});

elements[3].addEventListener("click", () => {
  deactivateAllElements();
  hideAllTexts();

  elements[3].classList.add("active");
  fourthText.style.display = "block";
});
