document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.style.opacity = 1;

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent real submit for demo
        const phone = document.querySelector("#Phone\\ no\\.").value.trim();
        const password = document.querySelector("#Password").value.trim();

        if (phone && password) {
            alert("Login successful!");
            this.submit(); // Remove if you want to stay on page
        } else {
            alert("Please fill in all fields!");
        }
    });
});
