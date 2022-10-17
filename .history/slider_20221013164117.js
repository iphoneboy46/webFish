var sliderItemsImg = document.querySelectorAll(".header__slider--item img");
var btnSliders = document.querySelectorAll(".button-slider");

btnSliders.forEach(function(btn,index){
    btn.onclick = function(e) {
        sliderItemsImg.forEach((slider,index) =>{
            console.log(index);
        })
    }
})





