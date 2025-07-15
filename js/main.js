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


document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id);
    let current = start;
    let range = end - start;
    let increment = end > start ? 1 : -1;
    let step = Math.abs(Math.floor(duration / range));
    
    // Ensure step is at least 1 to avoid infinite loops
    step = Math.max(1, step);
    
    let timer = setInterval(() => {
      current += increment;
      obj.textContent = current;
      
      // Check if we've reached or passed the end value
      if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
        obj.textContent = end; // Set exactly to end value to avoid overshooting
        clearInterval(timer);
      }
    }, step);
  }

  counter("count1", 450, 550, 5000);
  counter("count2", 50, 100, 5000);
  counter("count3", 0, 60, 5000);
  counter("count4", 0, 100, 5000);
  
});