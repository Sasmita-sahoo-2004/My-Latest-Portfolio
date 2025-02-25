let about_nav_btn = document.querySelectorAll(".about_nav a");
const about_container = document.querySelector(".about_container");
const myImage = document.querySelector(".layer2 .wrapper .face2");

function collapse2() {
    about_nav_btn.forEach((link) => {
        link.classList.remove("active");
    });
    about_container.classList.remove("one", "two", "three");
}

function slider1(selector, text) {
    selector.addEventListener("click", () => {
        collapse2();
        selector.classList.add("active");
        about_container.classList.add(text);
        adjustLayout(); // Call function to adjust layout dynamically
    });
}

slider1(about_nav_btn[0], about_nav_btn[0].dataset.text);
slider1(about_nav_btn[1], about_nav_btn[1].dataset.text);
slider1(about_nav_btn[2], about_nav_btn[2].dataset.text);

function adjustLayout() {
    if (window.innerWidth <= 768) {
        about_container.style.flexDirection = "column"; // Stack sections on small screens
        myImage.style.width = "100%"; // Make image take full width
        myImage.style.height = "auto"; // Maintain aspect ratio
    } else {
        about_container.style.flexDirection = "row"; // Restore normal layout
        myImage.style.width = "50%"; // Adjust width for larger screens
    }
}

// Adjust layout on window resize
window.addEventListener("resize", adjustLayout);
window.addEventListener("load", adjustLayout); // Adjust on initial load