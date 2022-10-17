const linkHeader = document.querySelectorAll('.header__menu--items');
console.log(linkHeader);

linkHeader.forEach((link)=>{
    link.onclick = ()=>{
        document.querySelector(".header__menu--items.active").classList.remove("active");
        link.classList.add("active");
    }
})

const dropdown = document.querySelector(".header__menu--items-dropdown");
const dropdownMenu = document.querySelector(".header__menu--dropdown");
dropdown.onmouseover = ()=>{
    dropdownMenu.style.top="6%";
    dropdownMenu.style.left="53%"
}

dropdownMenu.onmouseover = ()=>{
    dropdownMenu.style.top="6%";
    dropdownMenu.style.left="53%"
}

dropdown.onmouseout = ()=>{
    dropdownMenu.style.top="-100%";
    dropdownMenu.style.left="53%"
}

dropdownMenu.onmouseout = ()=>{
    dropdownMenu.style.top="-100%";
    dropdownMenu.style.left="53%"
}


window.addEventListener('scroll',()=>{
    var header = document.querySelector(".header");
    header.classList.toggle("sticky",window.scrollY>0);
})