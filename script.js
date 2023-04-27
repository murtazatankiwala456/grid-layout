const hamburger = document.querySelector(".hamburger");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const mobileNav = document.querySelector(".mobileNav");

hamburger.addEventListener("click", () => {
  bar1.classList.toggle("animation1");
  bar2.classList.toggle("animation2");
  bar3.classList.toggle("animation3");
  mobileNav.classList.toggle("openDrawer");
});
