const sliderItems = document.querySelectorAll(".header__slider--list");
const btnSliders = document.querySelectorAll(".button-slider");

btnSliders.forEach(function (btn) {
  sliderItems.map(function (slider) {
    btn.onclick = function () {
        console.log(slider);
    }
  });
});
