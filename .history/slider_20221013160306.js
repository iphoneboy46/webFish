const sliderItem1 = document.querySelector(".header__slider--item-1");
const btnSlider1 = document.querySelector(".button-slider-1");
const sliderItem2 = document.querySelector(".header__slider--item-2");
const btnSlider2 = document.querySelector(".button-slider-2");
const sliderItem3 = document.querySelector(".header__slider--item-3");
const btnSlider3 = document.querySelector(".button-slider-3");

btnSlider1.onclick = function(){
    sliderItem1.style.marginLeft = "0"
}

btnSlider2.onclick = function(){
    sliderItem1.style.marginLeft = "-25%"
}

btnSlider3.onclick = function(){
    sliderItem1.style.marginLeft = "-50%"
}


