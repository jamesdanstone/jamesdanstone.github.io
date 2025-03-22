document.addEventListener("DOMContentLoaded", function () {
    // Load header and footer dynamically
    loadComponent("header-placeholder", "header.html");
    loadComponent("footer-placeholder", "footer.html");

    // Wait until header is loaded before adding event listeners
    setTimeout(() => {
        const hamburger = document.getElementById("hamburger");
        const navMenu = document.getElementById("navMenu");

        if (hamburger && navMenu) {
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
        }
    }, 500); // Wait for elements to be loaded
});

// Function to dynamically load header and footer
function loadComponent(placeholderId, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(placeholderId).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${file}:`, error));
}
