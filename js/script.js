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
//Masonry grid js
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".project-item");

    items.forEach(item => {
        const height = item.querySelector("img").naturalHeight;
        const rowSpan = Math.ceil((height / 10));
        item.style.gridRowEnd = `span ${rowSpan}`;
    });
});
