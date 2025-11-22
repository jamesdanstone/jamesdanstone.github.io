// Load header.html into the page
fetch("header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;

        // After header loads, attach hamburger functionality
        const hamburger = document.getElementById("hamburger");
        const menuOverlay = document.getElementById("menuOverlay");

        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            menuOverlay.classList.toggle("active");
            document.body.classList.toggle("menu-open");
        });
    });
