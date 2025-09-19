function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  const status = document.querySelector(".form-status");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      status.textContent = "✅ Your message has been sent successfully!";
      form.reset();
    });
  }
});
