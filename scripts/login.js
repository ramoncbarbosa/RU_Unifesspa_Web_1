loginButton = document.querySelector('#entrarAluno');
visitanteButton = document.querySelector('#cadastroVisitante');

if(sessionStorage.getItem('currentUser')){
    window.location.href = 'compra.html';
}

loginButton.addEventListener('click', function(){
    let entryUser = document.querySelector('#user').value;
    let entryPass = document.querySelector('#password').value;
    var user = localStorage.getItem(entryUser);
    if(user){
        user = JSON.parse(user);
        entryPass = sjcl.codec.hex.fromBits(sjcl.misc.pbkdf2(entryPass, user.salt, 10000, 256));
        if(entryUser === user.userLogin && entryPass === user.userPassword){
            window.location.href = 'compra.html';
            sessionStorage.setItem('currentUser', user.userLogin);
            return alert('Login efetuado com sucesso.');
        }
    }
    return alert('Login ou senha incorretos, verifique e tente novamente');
})

visitanteButton.addEventListener('click', ()=>{
    window.location.href = './cadastro.html';
})