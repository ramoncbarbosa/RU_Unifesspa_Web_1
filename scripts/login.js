loginButton = document.querySelector('#entrarAluno');

if(sessionStorage.getItem('currentUser')){
    window.location.href = 'compra.html';
}

loginButton.addEventListener('click', function(){
    var keys = Object.keys(localStorage);

    for(var i=0; i<keys.length; i++){
        var user = JSON.parse(localStorage.getItem(keys[i]));
        let entryUser = document.querySelector('#user').value
        let entryPass = document.querySelector('#password').value
        entryPass = sjcl.codec.hex.fromBits(sjcl.misc.pbkdf2(entryPass, user.salt, 10000, 256));
        if(entryUser === user.userLogin && entryPass === user.userPassword){
            window.location.href = 'compra.html';
            sessionStorage.setItem('currentUser', keys[i]);
            return alert('Login efetuado com sucesso.');
        }
    }
    alert('Login ou senha incorretos, verifique e tente novamente');
})