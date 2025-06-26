// assets/js/script.js

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// WhatsApp button click handler (if added)
const whatsappButton = document.getElementById("whatsapp-button");
if (whatsappButton) {
  whatsappButton.addEventListener("click", () => {
    window.open("https://wa.me/601175601618", "_blank");
  });
}
