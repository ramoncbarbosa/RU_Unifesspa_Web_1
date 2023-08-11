const carousel = document.querySelector('.carrossel-container');
let currentIndex = 0;

function showImage(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % 5;
    showImage(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + 5) % 5;
    showImage(currentIndex);
}

setInterval(nextSlide, 3000);

showImage(currentIndex);
