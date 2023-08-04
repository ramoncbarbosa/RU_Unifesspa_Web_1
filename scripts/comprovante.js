const user = sessionStorage.getItem('currentUser');
const userName = document.querySelector('#name');
const date = document.querySelector('#date');
const hour = document.querySelector('#hour');

if(!user)
    window.location.href = 'login.html';

userValue = sessionStorage.getItem('currentValue');

if(userValue)
    document.querySelector('#value').textContent = `R$ ${parseFloat(userValue).toLocaleString(undefined,{minimumFractionDigits:2})}`;

userName.textContent = JSON.parse(localStorage.getItem(user)).userName;
const dateHour = new Date();
date.textContent = dateHour.toLocaleDateString(undefined);
hour.textContent = dateHour.toLocaleTimeString(undefined);