//Toogle Class Active
const navbarNav = document.querySelector(".navbar-nav");

//Ketika burger menu di klik
document.querySelector("#burger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar sidebar untuk menghilangkan nav nya

const burger = document.querySelector("#burger-menu");

document.addEventListener("click", function (e) {
  if (!burger.contains(e.target) && !navbarNav.contains(e.target)) {
    //jika yang di klik bukan navbar dan burger
    navbarNav.classList.remove("active");
  }
});
