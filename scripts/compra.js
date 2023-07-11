const userSubsidio = document.querySelector('#userSubsidio');
const userPrice = document.querySelector('#userPrice');
const userQuantity = document.querySelector('#userQuantity');
user = JSON.parse(localStorage.getItem(sessionStorage.getItem('currentUser')));

if(user.userSubsidio){
    userSubsidio.textContent = 'Sim';
    userPrice.textContent = 'R$ 2,00'
    userQuantity.setAttribute('disabled', '');
}else{
    userSubsidio.textContent = 'Não';
    userQuantity.value = 1;
    userPrice.textContent = 'R$ 13,00';
    userQuantity.addEventListener('input', ()=>{
        let currentPrice = userQuantity.value * 13.00;
        userPrice.textContent = `R$ ${currentPrice.toLocaleString(undefined,{minimumFractionDigits:2})}`;
    })
}

