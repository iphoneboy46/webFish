const sliderItems = document.querySelectorAll('.header__slider--item');
const btnSliders = document.querySelectorAll(".button-slider");

btnSliders.forEach(function(btn){
    btn.onclick = function(){
        console.log(btn);
    }
})

sliderItems.forEach(function(slider){
    console.log(slider);
})