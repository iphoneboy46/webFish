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
  gridItem[0].style.marginLeft = "-1000%";
  gridItem[1].style.marginLeft = "-100%"
  gridItem[2].style.marginLeft = "-100%"
  gridItem[3].style.marginLeft = "-100%"
  gridItem[4].style.marginLeft = "-100%"
  gridItem[5].style.marginLeft = "-100%";
  gridItem[6].style.marginLeft = "-100%"
  gridItem[7].style.marginLeft = "-100%"
  gridItem[8].style.marginLeft = "-100%"
  gridItem[9].style.marginLeft = "-100%"
}