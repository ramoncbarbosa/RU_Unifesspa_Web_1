const carrosselImg = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let i = 0;

function carrossel(){
    i++;

    if(i > carrosselimg.lenght - 1){
        i = 0;
    }

    carrosselImg.styles.transform = 'translateX(${-i * 40.25}rem)';
}

setInterval(carrossel, 400);