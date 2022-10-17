const btns = document.querySelectorAll(".button-slider");
const imgs = document.querySelectorAll(".header__slider--item");
const textHeader = document.querySelector(".header__slider--item-text")

btns.forEach(function (btn, index) {
  const imgSlider = imgs[index];
  btn.onclick = function () {
    document.querySelector(".button-slider.active").classList.remove("active");
    document
      .querySelector(".header__slider--item.active")
      .classList.remove("active");

    btn.classList.add("active");
    imgSlider.classList.add("active");
  };
});
