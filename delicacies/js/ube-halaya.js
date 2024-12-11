// JavaScript functionality (if needed in the future)
document.addEventListener("DOMContentLoaded", () => {
    console.log("Ube Halaya Recipe Page Loaded");
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
