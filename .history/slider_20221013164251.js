var sliderItemsImg = document.querySelectorAll(".header__slider--item img");
var btnSliders = document.querySelectorAll(".button-slider");

btnSliders.forEach(function (btn, index) {
  sliderItemsImg.forEach((slider, index) => {
   
  });
  btn.onclick = () =>{
    console.log(slider);
  }
});
