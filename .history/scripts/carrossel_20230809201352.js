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


const imgs = document.querySelectorAll(".carrosselImg");
const carrosselImg = document.querySelectorAll(".carrosselImg img");

let i = 0;

function carrossel(){
    i++;

    if(i > carrosselImg.length - 1){
        i = 0;
    }

    imgs.style.transform = `translateX(${-i * 40.25}rem)`;
}

setInterval(carrossel, 2400);