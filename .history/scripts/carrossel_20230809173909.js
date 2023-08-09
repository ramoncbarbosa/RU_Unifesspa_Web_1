const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let i = 0;

function carrossel(){
    i++;

    if(i > img.length - 1){
        i = 0;
    }

    imgs.styles.transform = 'translateX(${-i * 40.25}rem)';
}

setInterval(carrossel, 400);