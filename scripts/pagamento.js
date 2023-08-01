if(!sessionStorage.getItem('currentUser'))
    window.location.href = 'login.html'

setTimeout(()=>{
    window.location.href = 'pixEfetuado.html'
}, 1000)