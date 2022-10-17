const btns = document.querySelectorAll(".button-slider");
const imgs = document.querySelectorAll(".header__slider--item");

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

setInterval(() => {
  imgs[2].classList.remove("active");
  btns[2].classList.remove("active");

  imgs[0].classList.add("active");
  btns[0].classList.add("active");
}, 5000);

setInterval(() => {
  imgs[0].classList.remove("active");
  imgs[1].classList.add("active");

  btns[0].classList.remove("active");
  btns[1].classList.add("active");
}, 10000);

setInterval(() => {
  imgs[1].classList.remove("active");
  imgs[2].classList.add("active");

  btns[1].classList.remove("active");
  btns[2].classList.add("active");
}, 15000);

const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");

const gridItem = document.querySelectorAll(".section__content--grid-item");
console.log(gridItem);



btnNext.onclick = () => {
const imgFish = document.querySelectorAll(".section__content--grid-item");
  document.querySelector(".section__content--grid ").appendChild(imgFish[0]);
  document.querySelector(".section__content--grid ").appendChild(imgFish[1]);
  document.querySelector(".section__content--grid ").appendChild(imgFish[21]);
  document.querySelector(".section__content--grid ").appendChild(imgFish[12]);
  document.querySelector(".section__content--grid ").appendChild(imgFish[13]);
  document.querySelector(".section__content--grid ").appendChild(imgFish[14]);
};

btnPrev.onclick = () => {
  const imgFish = document.querySelectorAll(".section__content--grid-item");
  document.querySelector(".section__content--grid ").prepend(imgFish[0]);
  document.querySelector(".section__content--grid ").prepend(imgFish[1]);
  document.querySelector(".section__content--grid ").prepend(imgFish[21]);
  document.querySelector(".section__content--grid ").prepend(imgFish[12]);
  document.querySelector(".section__content--grid ").prepend(imgFish[13]);
  document.querySelector(".section__content--grid ").prepend(imgFish[14]);
};
