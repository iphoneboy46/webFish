const linkHeader = document.querySelectorAll('.header__menu--items');
console.log(linkHeader);

linkHeader.forEach((link)=>{
    link.onclick = ()=>{
        document.querySelector(".header__menu--items.active").classList.remove("active");
        link.classList.add("active");
    }
})

const dropdown = document.querySelector(". header__menu--items-dropdown");
const dropdownMenu = document.querySelector(".header__menu--dropdown");
dropdown.onmouseover = ()=>{
    dropdownMenu.
}