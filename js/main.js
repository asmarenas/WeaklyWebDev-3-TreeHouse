const mobileBtn = document.querySelector(".mobile-nav-btn");
const navigationMenu = document.querySelector(".navigation__list");
const navigationLinks = document.querySelectorAll(".navigation__link");

navigationLinks.forEach(link => {
  link.addEventListener("click", scrollToSection);
});

mobileBtn.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
  mobileBtn.classList.toggle("is-active");
  navigationMenu.classList.toggle("is-open");
}

function scrollToSection(e) {
  e.preventDefault();
  const pageId = e.target.getAttribute("href");
  const pageSection = document.querySelector(pageId);
  pageSection.scrollIntoView({behavior: "smooth", block: "start"});
  toggleMobileMenu();
}
