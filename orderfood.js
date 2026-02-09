// Animate dish cards on scroll
document.addEventListener("DOMContentLoaded", () => {
    const dishes = document.querySelectorAll("span");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    dishes.forEach(dish => {
        dish.classList.add("hidden");
        observer.observe(dish);
    });
});

// Placeholder interaction for search input
const searchInput = document.querySelector("input[placeholder]");
searchInput.addEventListener("focus", () => {
    searchInput.placeholder = "Type your favorite dish...";
});
searchInput.addEventListener("blur", () => {
    searchInput.placeholder = "Search for Resturant, Cuisine or a Dish";
});
