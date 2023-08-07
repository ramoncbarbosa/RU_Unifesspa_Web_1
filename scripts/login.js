loginButton = document.querySelector('#entrarAluno');
visitanteButton = document.querySelector('#entrar_visitante');
var userCondition = false; // true == Visitante // false == Aluno

if(sessionStorage.getItem('currentUser')){
    window.location.href = 'compra.html';
}

loginButton.addEventListener('click', function(){
    let entryUser = document.querySelector('#user').value;
    let entryPass = document.querySelector('#password').value;
    if(!userCondition){
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
    }else{
        const objUser = {
            userLogin: entryUser,
            userName: entryPass
        };
        if(entryUser && entryPass){
            localStorage.setItem(objUser.userLogin, JSON.stringify(objUser));
            sessionStorage.setItem('currentUser', objUser.userLogin);
            window.location.href = 'compra.html';
            return alert('Visitante registrado com sucesso.');
        }else{
            return alert('Os campos de E-Mail e Nome são obrigatórios.');
        }
    }
})

visitanteButton.addEventListener('click', ()=>{
    userCondition = !userCondition;

    if(userCondition){
        document.querySelector('.img_aluno').setAttribute('src', './img/visitante.png');
        document.querySelector('#password').setAttribute('placeholder', 'NOME')
        document.querySelector('#password').setAttribute('type', 'text')
        visitanteButton.textContent = 'SOU ALUNO'
    }else{
        document.querySelector('.img_aluno').setAttribute('src', './img/aluno.png')
        document.querySelector('#password').setAttribute('placeholder', 'SENHA')
        document.querySelector('#password').setAttribute('type', 'password')
        visitanteButton.textContent = 'SOU VISITANTE'
    }
})