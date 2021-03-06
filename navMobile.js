//mobile navbar javascript

const primaryNav = document.querySelector(".header-container");
const navToggle = document.querySelector(".burgerMenu");

//show or hide mobile navbar
navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.innerHTML = "&#9776;";
  } else {
    primaryNav.setAttribute("data-visible", true);
    navToggle.innerHTML = "🗙";
  }
});

//close navbar when element is clicked
function changeData() {
  primaryNav.setAttribute("data-visible", false);
  navToggle.innerHTML = "&#9776;";
}
