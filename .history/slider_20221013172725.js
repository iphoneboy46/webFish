const btns = document.querySelectorAll(".button-slider");
var btnActive = document.querySelector(".button-slider.active");
console.log(btnActive);

btns.forEach(function (btn, index) {
  btn.onclick = function () {
  
    btnActive.classList.remove("active");
    btn.classList.add("active");
  };
});
