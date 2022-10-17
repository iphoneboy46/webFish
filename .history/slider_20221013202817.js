const btns = document.querySelectorAll(".button-slider");
const imgs = document.querySelectorAll(".header__slider--item");


btns.forEach(function (btn, index) {
  const imgSlider = imgs[index];
  btn.onclick = function () {
    document
    .querySelector(".button-slider.active")
    .classList.remove("active");
  document
    .querySelector(".header__slider--item.active")
    .classList.remove("active");

  btn.classList.add("active");
  imgSlider.classList.add("active");


  };
});

console.log(imgs[1]);

setInterval(()=>{
  imgs[0].classList.add("active");
},1000)

setInterval(()=>{
  imgs[1].classList.add("active");
},1500)

setInterval(()=>{
  imgs[2].classList.add("active");
},2000)
