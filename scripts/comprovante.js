const user = sessionStorage.getItem('currentUser');
const date = document.querySelector('#date');
const hour = document.querySelector('#hour');

if(!user)
    window.location.href = 'login.html';

userValue = sessionStorage.getItem('currentValue')

if(userValue)
    document.querySelector('#value').textContent = `R$ ${parseFloat(userValue).toLocaleString(undefined,{minimumFractionDigits:2})}`;

const dateHour = new Date()
date.textContent = dateHour.toLocaleDateString(undefined)
hour.textContent = dateHour.toLocaleTimeString(undefined)