const navToggle = document.querySelector(".burger");
const nav = document.querySelector(".navigation");

navToggle.onclick = () => {
  nav.classList.toggle("active");
  navToggle.classList.toggle("active");
};
