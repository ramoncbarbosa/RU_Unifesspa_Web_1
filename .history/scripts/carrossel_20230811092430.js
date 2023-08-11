// const imgs = document.getElementById("img");
// const img = document.querySelectorAll("#img img");

// let i = 0;

// function carrossel(){
//     i++;

//     if(i > img.length - 1){
//         i = 0;
//     }

//     imgs.style.transform = `translateX(${-i * 40.25}rem)`;
// }

// setInterval(carrossel, 2400);



const carousel = document.querySelector('.carousel');
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

setInterval(nextSlide, 3000); // Troca de imagem a cada 3 segundos

showImage(currentIndex);
