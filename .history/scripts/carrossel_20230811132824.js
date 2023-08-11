const carousel = document.querySelector('.carrossel-container');
let i = 0;

function slide(j) {
    carousel.style.transform = `translateX(-${j * 100}%)`;
}

function proximoSlide() {
    i = (i + 1) % 5;
    slide(i);
}

function previewSlide() {
    i = (i - 1 + 5) % 5;
    slide(i);
}

setInterval(proximoSlide, 3000);

slide(i);