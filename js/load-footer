document.addEventListener("DOMContentLoaded", () => {
  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;

      // update copyright year
      const yearSpan = document.getElementById("footer-year");
      if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
      }
    });
});
