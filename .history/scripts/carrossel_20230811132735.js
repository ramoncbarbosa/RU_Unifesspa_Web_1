const carousel = document.querySelector('.carrossel-container');
let i = 0;

function slide(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    i = (i + 1) % 5;
    slide(i);
}

function prevSlide() {
    i = (i - 1 + 5) % 5;
    slide(i);
}

setInterval(nextSlide, 3000);

showImage(i);