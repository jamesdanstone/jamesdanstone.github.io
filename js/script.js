// Load header
fetch("header.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;

        const hamburger = document.getElementById("hamburger");
        const menuOverlay = document.getElementById("menuOverlay");

        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            menuOverlay.classList.toggle("active");
            document.body.classList.toggle("menu-open");
        });
    });

// =====================================
// TRUE MASONRY LAYOUT (no aspect ratio)
// =====================================
function rebuildMasonry() {
    const grid = document.querySelector(".portfolio-grid");
    const items = document.querySelectorAll(".project-item");

    items.forEach(item => {
        const img = item.querySelector("img");
        if (!img.complete || img.naturalHeight === 0) return;

        const rowHeight = 10; // same as CSS grid-auto-rows
        const gap = 24; // 1.5rem gap

        const itemHeight = img.getBoundingClientRect().height;
        const rowSpan = Math.ceil((itemHeight + gap) / rowHeight);

        item.style.gridRowEnd = `span ${rowSpan}`;
    });
}

// Rebuild when images load
window.addEventListener("load", rebuildMasonry);
window.addEventListener("resize", rebuildMasonry);

document.querySelectorAll(".project-item img").forEach(img => {
    img.addEventListener("load", rebuildMasonry);
});
