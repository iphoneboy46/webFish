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
var header = document.querySelector(".header");
console.log(header.classList);

dropdown.onmouseover = () => {
  if(header.offSetHeight >= "80px"){
    dropdownMenu.style.top = "50%";
    dropdownMenu.style.left = "53%";
  }

};

dropdownMenu.onmouseover = () => {
  dropdownMenu.style.top = "0%";
  dropdownMenu.style.left = "53%";
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
