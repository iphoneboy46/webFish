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


setInterval(()=>{
  imgs[2].classList.remove("active");
  btns[2].classList.remove("active");

  imgs[0].classList.add("active");
  btns[0].classList.add("active");

},5000)

setInterval(()=>{
  imgs[0].classList.remove("active");
  imgs[1].classList.add("active");

  btns[0].classList.remove("active");
  btns[1].classList.add("active");
},10000)

setInterval(()=>{
  imgs[1].classList.remove("active");
  imgs[2].classList.add("active");

  btns[1].classList.remove("active");
  btns[2].classList.add("active");
},15000)

const btnNext= document.querySelector(".btn-next");
const gridItem = document.querySelectorAll(".section__content--grid-item");

btnNext.onclick = ()=>{
 const imgFish = document.querySelectorAll(".section__content--grid-item");
 document.querySelector(".section__content--grid ").appendChild(imgFish[0])
}