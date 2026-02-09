
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    // Animate form after DOM load
    form.style.opacity = 1;

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent actual navigation for demo
        alert("Form submitted successfully!");
        this.submit(); // Remove this line if you want to stay on the same page
    });
});
