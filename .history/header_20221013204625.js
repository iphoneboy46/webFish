const linkHeader = document.querySelectorAll('.header__menu--items');
console.log(linkHeader);

linkHeader.forEach((link)=>{
    link.onClick = ()=>{
        document.querySelector(".header__menu--items.active").classList.remove("active");
        link.classList.add("active");
        console.log(123);
    }
   
})