const s1 = document.querySelector(".s1");
const btnSlider1 = document.querySelector(".button-slider-1");
const btnSlider2 = document.querySelector(".button-slider-2");
const btnSlider3 = document.querySelector(".button-slider-3");

btnSlider1.onclick = function(){
    s1.style.marginLeft = "0";
    s1.style.opacity = "1";
}

btnSlider2.onclick = function(){
    s1.style.marginLeft = "-25%"
    s1.style.opacity = "1";
}

btnSlider3.onclick = function(){
    s1.style.marginLeft = "-50%"
    
}




