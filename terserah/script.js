// JavaScript for Interactive Portfolio Website

document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 50, // Adjust for sticky navbar
            behavior: "smooth"
          });
        }
      });
    });
  
    // Contact Form Submission Alert
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Thank you for your message! I will get back to you shortly.");
      contactForm.reset();
    });
  
    // Scroll Effect for Skills Progress Bars
    const skillsSection = document.querySelector(".skills");
    const skillBars = document.querySelectorAll(".skill-level");
    let skillsAnimated = false;
  
    const animateSkills = () => {
      skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = "0";
        setTimeout(() => {
          bar.style.transition = "width 1s ease-in-out";
          bar.style.width = width;
        }, 100);
      });
    };
  
    window.addEventListener("scroll", () => {
      const sectionTop = skillsSection.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight - 100;
      if (!skillsAnimated && sectionTop < triggerPoint) {
        animateSkills();
        skillsAnimated = true;
      }
    });
  
    // Portfolio Items Scroll Animation
const portfolioGrid = document.querySelector(".portfolio-grid");
const portfolioItems = document.querySelectorAll(".portfolio-item");

const animatePortfolioItems = () => {
  portfolioItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }, index * 200); // Staggered animation
  });
};

window.addEventListener("scroll", () => {
  const gridTop = portfolioGrid.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight - 100;
  if (gridTop < triggerPoint) {
    animatePortfolioItems();
  }
});
    });
 
  // Shake effect on invalid form submit
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const inputs = this.querySelectorAll('input, textarea');
  let isValid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      isValid = false;
    }
  });

  if (!isValid) {
    this.classList.add('shake');
    setTimeout(() => {
      this.classList.remove('shake');
    }, 400);
  } else {
    // Jika valid, bisa lanjut kirim form di sini (contoh alert dulu)
    alert('Thank you for your message! I will get back to you shortly.');
    contactForm.reset();
  }
});
