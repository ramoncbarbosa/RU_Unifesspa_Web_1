const carrosselImg = document.getElementById("img");
const carrosselImagens = document.querySelectorAll(".carrossel-img img");

let i = 0;

function carrossel(){
    i++;

    if(i > carrossel-img.lenght - 1){
        i = 0;
    }

    carrosselImg.styles.transform = 'translateX('
}