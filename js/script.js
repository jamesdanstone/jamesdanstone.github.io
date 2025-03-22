document.addEventListener("DOMContentLoaded", function () {
    function loadComponent(id, file, callback) {
        fetch(file)
            .then(response => response.text())
            .then(data => {
                document.getElementById(id).innerHTML = data;
                if (callback) callback();
            })
            .catch(error => console.error(`Error loading ${file}:`, error));
    }

    loadComponent("header-placeholder", "header.html", initializeMenu);
    loadComponent("footer-placeholder", "footer.html");

    function initializeMenu() {
        const hamburger = document.getElementById("hamburger");
        const navMenu = document.getElementById("navMenu");

        hamburger.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });

        document.addEventListener("click", function (event) {
            if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove("active");
            }
        });
    }
});
