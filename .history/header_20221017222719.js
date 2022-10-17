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

if (document.body.offsetWidth > 1024) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
  });
}

function menuMobile(){
  const menuICON = document.querySelector(".fa-bars");
  const menuEX = document.querySelector(".fa-xmark")
  const menuMobile = document.querySelector(".header__menu--list-mobile");

  menuICON.onclick = () =>{
    menuICON.style.display = "none";
    menuEX.style.display = "block";
    menuMobile.style.right = "0%"
  }

  menuEX.onclick = () =>{
    menuICON.style.display = "block";
    menuEX.style.display = "none";
    menuMobile.style.right = "-100%"
  }

  const dropdownMobile = document.querySelector(".dropdown-mobile");
  dropdownMobile.onclick = () =>{
    
  }

}
menuMobile();