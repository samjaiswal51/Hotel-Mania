document.addEventListener("DOMContentLoaded", function () {
  // Navbar scroll effect
  let nav = document.querySelector(".navbar");

  window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
      nav.classList.add("header-scrolled");
    } else {
      nav.classList.remove("header-scrolled");
    }
  };

  // Navbar collapse on click
  let navbarLinks = document.querySelectorAll(".nav-link");
  let navCollapse = document.querySelector(".navbar-collapse");

  navbarLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navCollapse.classList.remove("show");
    });
  });

  // ✅ Swiper initialization (MUST be after DOM is ready)
  const swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});


