/* ======================================
HERO BUTTON ACTIONS
====================================== */

// Scroll to showreel
const showreelBtn = document.getElementById("btn-showreel");
if (showreelBtn) {
    showreelBtn.addEventListener("click", () => {
        const showreelSection = document.querySelector(".showreel");
        if (showreelSection) {
            showreelSection.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    });
}

// Open projects page
const projectsBtn = document.getElementById("btn-projects");
if (projectsBtn) {
    projectsBtn.addEventListener("click", () => {
        window.location.href = "https://jamesdanstone.github.io/portfolio.html";
    });
}
