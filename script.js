// ===== Smooth Scroll for Navigation =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetID = this.getAttribute('href');
    if (targetID && targetID.startsWith("#")) {
      const target = document.querySelector(targetID);
      if (target) {
        e.preventDefault();
        const headerOffset = 60; // Adjust if navbar height changes
        const elementPosition = target.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
});

// ===== Active Menu Highlight on Scroll =====
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".menu li a");

window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY + 80; // Offset for active highlight
  let currentSection = "";

  sections.forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
});

// ===== Fade-in Animation on Scroll =====
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      fadeObserver.unobserve(entry.target); // Observe only once
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".product-card, .partner-logos img, form, footer, header").forEach(el => fadeObserver.observe(el));

// ===== Optional: Back to Top Button (if needed later) =====
// const topButton = document.querySelector(".back-to-top");
// if (topButton) {
//   window.addEventListener("scroll", () => {
//     topButton.classList.toggle("show", window.scrollY > 500);
//   });
//   topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
// }
