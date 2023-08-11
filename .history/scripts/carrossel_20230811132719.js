const carousel = document.querySelector('.carrossel-container');
let i = 0;

function sl(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    i = (i + 1) % 5;
    showImage(i);
}

function prevSlide() {
    i = (i - 1 + 5) % 5;
    showImage(i);
}

setInterval(nextSlide, 3000);

showImage(i);