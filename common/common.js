// Forobus Theme JS 🚀

document.addEventListener("DOMContentLoaded", function () {
  console.log("Forobus Theme Loaded 🔥");

  // Animación suave al hacer scroll
  document.querySelectorAll(".category-box").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      el.style.transform = "scale(1.03)";
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "scale(1)";
    });
  });
});
