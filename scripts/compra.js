const currentUser = document.querySelector('#user');
const userSubsidio = document.querySelector('#userSubsidio');
const userPrice = document.querySelector('#userPrice');
const userQuantity = document.querySelector('#userQuantity');
const user = JSON.parse(localStorage.getItem(sessionStorage.getItem('currentUser')));
const logoutButton = document.querySelector('#logoutButton');
const comprarButton = document.querySelector('#comprarButton');

if(!user){
    alert('Realize o login primeiro!');
    window.location.href = 'login.html';
}

currentUser.textContent = `Olá, ${user.userName}`;
logoutButton.addEventListener('click', ()=>{
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentValue');
    alert('Logout efetuado com sucesso.')
    window.location.href = 'index.html';
})

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

comprarButton.addEventListener('click', ()=>{
    price = userSubsidio.textContent === 'Sim' ? 2:13;
    sessionStorage.setItem('currentValue', userQuantity.value*price);
    window.location.href = 'pagamento.html'
})