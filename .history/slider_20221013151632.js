const sliderItem = document.querySelector('.header__slider--item');
const btnSliders = document.querySelectorAll(".button-slider");

btnSliders.forEach(function(btn){
    btn.onclick = function(){
       sliderItem.style.marginLeft = "50%";
    }
})

