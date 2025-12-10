// ================= SLIDE ANIMATION PAGE 2 =================
const slideLeft = document.querySelector(".slide-left");
const slideRight = document.querySelector(".slide-right");
const page_scroll_value = 400;

if (slideLeft && slideRight) {
  window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    if (scroll > page_scroll_value) {
      slideLeft.classList.add("slide-visible");
      slideRight.classList.add("slide-visible");
    } else {
      slideLeft.classList.remove("slide-visible");
      slideRight.classList.remove("slide-visible");
    }
  });
}

//--------------animation page4-------------

window.onload = function () {
  // Premier compteur
  var counter1 = document.getElementById("counter1");
  var value1 = 6015;
  setInterval(function () {
    value1++;
    if (value1 > 9999) value1 = 0;
    counter1.innerText = value1;
  }, 1000);

  // Deuxième compteur
  var counter2 = document.getElementById("counter2");
  var value2 = 1234567;
  setInterval(function () {
    value2++;
    if (value2 > 9999999) value2 = 0;
    counter2.innerText = value2;
  }, 1000);
};
