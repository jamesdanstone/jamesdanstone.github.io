document.addEventListener("DOMContentLoaded", () => {

  // =======================================
  // LOAD FOOTER HTML
  // =======================================
  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;

      // =======================================
      // SET YEAR (dynamic copyright year)
      // =======================================
      const yearSpan = document.getElementById("footer-year");
      if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
      }

      // =======================================
      // FOOTER SMOOTH SCROLL HANDLER
      // =======================================
      document.querySelectorAll(".footer-scroll").forEach(link => {
        link.addEventListener("click", e => {
          e.preventDefault();

          const targetClass = link.getAttribute("data-scroll");
          const targetSection = document.querySelector("." + targetClass);

          if (targetSection) {
            targetSection.scrollIntoView({
              behavior: "smooth",
              block: "center"
            });
          }
        });
      });

    });

});
