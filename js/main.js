const mobileBtn = document.querySelector(".mobile-nav-btn");
const navigationMenu = document.querySelector(".navigation__list");
const navigationLinks = navigationMenu.querySelectorAll("a");
navigationLinks.forEach(link =>
  link.addEventListener("click", closeMobileMenu)
);
mobileBtn.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
  mobileBtn.classList.toggle("is-active");
  navigationMenu.classList.toggle("is-open");
}

function closeMobileMenu() {
  mobileBtn.classList.remove("is-active");
  navigationMenu.classList.remove("is-open");
}

// Smooth Scroll script

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  header: ".header",
  offset: -1,
});
