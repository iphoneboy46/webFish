const btns = document.querySelectorAll(".button-slider");
console.log(btnActive);

btns.forEach(function (btn, index) {
  btn.onclick = function () {
  
    document.querySelector(".button-slider.active");.classList.remove("active");
    btn.classList.add("active");
  };
});
