function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Close menu when clicking the "×" inside
document.querySelector(".menu-links").addEventListener("click", (e) => {
  if (e.target.textContent === "×") {
    document.querySelector(".menu-links").classList.remove("open");
    document.querySelector(".hamburger-icon").classList.remove("open");
  }
});
