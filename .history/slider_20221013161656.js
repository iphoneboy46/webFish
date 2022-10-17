const sliderItems = document.querySelectorAll(".header__slider--item");
const btnSlider1 = document.querySelector(".button-slider-1");
const btnSlider2 = document.querySelector(".button-slider-2");
const btnSlider3 = document.querySelector(".button-slider-3");

sliderItems.forEach((slider,index)=>{
    btnSlider1.onclick = function(){
        console.log(slider);
    }
})



btnSlider2.onclick = function(){
    
}

btnSlider3.onclick = function(){
    
}




