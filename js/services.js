document.addEventListener("DOMContentLoaded", () => {
    const readMoreLinks = document.querySelectorAll(".read-more");

    readMoreLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            // Get the blog link from the 'href' attribute
            const blogUrl = link.getAttribute("href");

            // Open the blog link in a new tab
            window.open(blogUrl, "_blank"); 
        });
    });
});
