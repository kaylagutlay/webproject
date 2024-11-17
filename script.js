document.addEventListener("DOMContentLoaded", () => {
    // Highlight the active page in the navigation bar
    const navLinks = document.querySelectorAll(".nav-link");
    const currentPage = document.body.dataset.page;

    navLinks.forEach(link => {
        if (link.dataset.page === currentPage) {
            link.classList.add("active");
        }
    });

    // Add click alert for delicacy links
    const delicacyLinks = document.querySelectorAll(".delicacy-link");
    delicacyLinks.forEach(link => {
        link.addEventListener("click", () => {
            alert(`You clicked on ${link.textContent}!`);
        });
    });
});

window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY;

    // If the scroll position is near the header, add the darkened class
    if (scrollPosition > 50) {  // You can adjust the value (50) to control when the effect starts
        header.classList.add('darkened');
    } else {
        header.classList.remove('darkened');
    }
});
