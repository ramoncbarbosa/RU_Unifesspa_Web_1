if(!sessionStorage.getItem('currentUser'))
    window.location.href = 'login.html'

setTimeout(()=>{
    window.location.href = 'comprovante.html'
}, 10000)