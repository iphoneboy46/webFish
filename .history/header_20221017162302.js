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
const menuChildren = document.querySelector(".menu--children");
var header = document.querySelector(".header");

dropdown.onmouseover = () => {
  const heightHeader = header.clientHeight;
  dropdownMenu.style.top = `calc(${heightHeader}px)`;
  dropdownMenu.style.left = "53%";
};

if (document.body.offsetWidth >= 768 && document.body.offsetWidth < 1024) {
  dropdown.onclick = () => {
    const heightHeader = header.clientHeight;
    dropdownMenu.style.top = `calc(${heightHeader}px)`;
    dropdownMenu.style.left = "43%";
  };
}

dropdownMenu.onmouseover = () => {
  const heightHeader = header.clientHeight;
  dropdownMenu.style.top = `calc(${heightHeader}px)`;
  dropdownMenu.style.left = "53%";
};

menuChildren.onmouseover = () => {
  const heightHeader = header.clientHeight;
  dropdownMenu.style.top = `calc(${heightHeader}px)`;
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

const sticky = window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});
