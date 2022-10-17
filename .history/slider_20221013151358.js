const sliderItems = document.querySelectorAll('.header__slider--item');
const btnSliders = document.querySelectorAll(".button-slider");

btnSliders.forEach(function(btn){
    btn.onclick = function(index){
        console.log(index);
    }
})

sliderItems.forEach(function(slider){
    console.log(slider);
})