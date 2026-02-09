document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.style.opacity = 1;

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // prevent real submission for demo
        const restaurant = document.querySelector("#Name").value.trim();
        const phone = document.querySelector("#Phone\\ no\\.").value.trim();
        const address = document.querySelector("#Address").value.trim();
        const owner = document.querySelector("#Owner\\ Name").value.trim();

        if (restaurant && phone && address && owner) {
            alert("Restaurant submitted successfully!");
            this.submit(); // remove this line if you want to stay on the page
        } else {
            alert("Please fill all fields.");
        }
    });
});
