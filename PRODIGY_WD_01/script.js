document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    // Change background color on scroll
    if (window.scrollY > 50) {
      header.style.backgroundColor = "#333"; // New background color on scroll
    } else {
      header.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; // Initial background color
    }
  });

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
