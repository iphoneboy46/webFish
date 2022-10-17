const sliderItems = document.querySelectorAll(".header__slider--item");
const btnSliders = document.querySelectorAll(".button-slider");

btnSliders.forEach(function (btn) {
  sliderItems.forEach(function (slider) {
    btn.onclick = function () {
        console.log(slider);
    }
  });
});
