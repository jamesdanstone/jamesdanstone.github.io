document.addEventListener("DOMContentLoaded", function() {
    // Load header and footer
    fetch("header.html").then(response => response.text()).then(data => {
        document.getElementById("header-placeholder").innerHTML = data;
    });

    fetch("footer.html").then(response => response.text()).then(data => {
        document.getElementById("footer-placeholder").innerHTML = data;
    });

    // Mobile Menu Toggle
    document.addEventListener("click", function(event) {
        if (event.target.matches(".hamburger, .hamburger *")) {
            document.getElementById("navMenu").classList.toggle("active");
        }
    });
});
