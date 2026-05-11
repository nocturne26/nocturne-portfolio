const enterButton = document.getElementById("enterBtn");

if (enterButton) {
  enterButton.addEventListener("click", function () {
    window.location.href = "work.html";
  });
}

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("open");
  });
}
