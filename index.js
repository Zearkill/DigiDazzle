var currentIndex = 0;
var items = document.querySelectorAll('.carousel-item');
var totalItems = items.length;
var intervalId;

function showSlide(index) {
    if (index < 0) {
        currentIndex = totalItems - 1;
    } else if (index >= totalItems) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    var transformValue = -currentIndex * 100 + '%';
    document.querySelector('.carouselxs').style.transform = 'translateX(' + transformValue + ')';
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

// Auto slide every 3 seconds
intervalId = setInterval(nextSlide, 3000);

// Stop auto slide when hovering over the carousel
document.querySelector('.posters').addEventListener('mouseenter', function() {
    clearInterval(intervalId);
});

// Resume auto slide when not hovering
document.querySelector('.posters').addEventListener('mouseleave', function() {
    intervalId = setInterval(nextSlide, 3000);
});




document.addEventListener("DOMContentLoaded", function () {
    // Set the target element that will trigger the counter
    const triggerElement = document.querySelector(".ratings");

    // Set the initial values for counting
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;

    // Set the target values for counting
    const target1 = 100000;
    const target2 = 50000;
    const target3 = 70000;

    // Set the duration for counting (in milliseconds)
    const duration = 1000;
    
    // Function to update the counters
    function updateCounters(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;

        count1 = Math.min(target1, (progress / duration) * target1);
        count2 = Math.min(target2, (progress / duration) * target2);
        count3 = Math.min(target3, (progress / duration) * target3);

        document.getElementById("clients_counter").innerText = Math.floor(count1) + '+';
        document.getElementById("chaines_counter").innerText = Math.floor(count2) + '+';
        document.getElementById("films_series_counter").innerText = Math.floor(count3) + '+';

        if (progress < duration) {
            requestAnimationFrame(updateCounters);
        }
    }

    // Function to check if the trigger element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle scroll events
    function handleScroll() {
        if (isInViewport(triggerElement)) {
            start = null; // Reset the start time
            requestAnimationFrame(updateCounters);
            window.removeEventListener("scroll", handleScroll); // Remove the scroll event listener once triggered
        }
    }

    // Initial check on page load
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
});