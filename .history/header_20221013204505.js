const linkHeader = document.querySelectorAll('.header__menu--items');

linkHeader.forEach((links)=>{
    document.querySelector(".header__menu--items.active").classList.remove("active");
})