const linkHeader = document.querySelectorAll(".header__menu--items");


linkHeader.forEach((link) => {
  link.onclick = () => {
    document
      .querySelector(".header__menu--items.active")
      .classList.remove("active");
    link.classList.add("active");
  };
});

const dropdown = document.querySelector(".header__menu--items-dropdown");
const dropdownMenu = document.querySelector(".header__menu--dropdown");
const menuChildren = document.querySelector(".menu--children")
var header = document.querySelector(".header");


dropdown.onmouseover = () => {
    const heightHeader = header.clientHeight;
    dropdownMenu.style.top = `calc(${heightHeader}px)`;
    dropdownMenu.style.left = "53%";
};

dropdownMenu.onmouseover = () => {
  const heightHeader = header.clientHeight;
  dropdownMenu.style.top = `calc(${heightHeader}px)`;
  dropdownMenu.style.left = "53%";
};

menuChildren.onmouseover = () => {
  
};


dropdown.onmouseout = () => {
  dropdownMenu.style.top = "-1000%";
  dropdownMenu.style.left = "53%";
};

dropdownMenu.onmouseout = () => {
  dropdownMenu.style.top = "-1000%";
  dropdownMenu.style.left = "53%";
};

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});
