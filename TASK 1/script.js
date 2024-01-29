// JavaScript to add interactivity
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
  
    window.addEventListener("scroll", function () {
      // Change background color on scroll
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#007bff"; // New background color
      } else {
        navbar.style.backgroundColor = "#333"; // Default background color
      }
    });
  
    // Change style on hover for each menu item
    const menuItems = document.querySelectorAll(".menu-item");
  
    menuItems.forEach(function (item) {
      item.addEventListener("mouseenter", function () {
        item.style.color = "#007bff"; // New font color on hover
      });
  
      item.addEventListener("mouseleave", function () {
        item.style.color = "#fff"; // Default font color after hover
      });
    });
  });
  