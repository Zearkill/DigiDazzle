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