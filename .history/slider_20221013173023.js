const btns = document.querySelectorAll(".button-slider");
const img = document.querySelectorAll(".header__slider--item");

btns.forEach(function (btn, index) {
  btn.onclick = function () {
  
    document.querySelector(".button-slider.active").classList.remove("active");
    document.querySelector(".header__slider--item.active").classList.remove("active");

    btn.classList.add("active");
    img.classList.add("active");
  };
});
