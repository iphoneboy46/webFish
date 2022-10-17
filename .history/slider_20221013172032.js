const btns = document.querySelectorAll('.button-slider');
const btnActive = document.querySelector("button-slider.active");


btns.forEach(function(btn,index) {
    btn.onclick = function() {
        btnActive.classList.remove('active');
    }
})





