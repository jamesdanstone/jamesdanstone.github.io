// Load header
fetch("header.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("header").innerHTML = html;

        const hamburger = document.getElementById("hamburger");
        const menuOverlay = document.getElementById("menuOverlay");

        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            menuOverlay.classList.toggle("active");
            document.body.classList.toggle("menu-open");
        });
    });
