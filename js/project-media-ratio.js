document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".project-media iframe").forEach(iframe => {

        const w = parseInt(iframe.getAttribute("width"));
        const h = parseInt(iframe.getAttribute("height"));

        // Only apply logic when width + height are present
        if (w && h) {
            iframe.style.aspectRatio = `${w}/${h}`;
            iframe.style.width = "100%";
            iframe.style.height = "auto";
            iframe.style.display = "block";
            iframe.style.objectFit = "contain";
            iframe.style.border = "none";
        }
    });
});
