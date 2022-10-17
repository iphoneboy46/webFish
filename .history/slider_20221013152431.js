const sliderItems = document.querySelector('.header__slider--item');
const btnSliders = document.querySelectorAll(".button-slider");

btnSliders.forEach(function(btn){
    btn.onclick = function(){
       sliderItems.forEach(function(slider){
        console.log(slider);
       })
    }
})

