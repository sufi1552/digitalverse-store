// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ========== NAVBAR SCROLL EFFECT ==========
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.style.background = "rgba(0, 51, 102, 0.95)";
    nav.style.boxShadow = "0 3px 8px rgba(0,0,0,0.1)";
  } else {
    nav.style.background = "transparent";
    nav.style.boxShadow = "none";
  }
});

// ========== FORM CONFIRMATION ==========
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", () => {
    alert("Thank you! Your message has been sent successfully.");
  });
}
