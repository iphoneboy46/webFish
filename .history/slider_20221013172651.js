const btns = document.querySelectorAll(".button-slider");
console.log(btnActive);

btns.forEach(function (btn, index) {
  btn.onclick = function () {
    const btnActive = document.querySelector(".button-slider.active");
    btnActive.classList.remove("active");
    btn.classList.add("active");
  };
});
