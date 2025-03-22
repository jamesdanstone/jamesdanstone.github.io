document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    // Toggle menu when clicking hamburger
    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove("active");
            hamburger.classList.remove("active");
        }
    });
});
