loginButton = document.querySelector('#entrarAluno');
const objAdmin = {
    userName:'admin@unifesspa.edu.br',
    userPassword:'admin'
};
localStorage.setItem(1, JSON.stringify(objAdmin));

loginButton.addEventListener('click', function(){
    var keys = Object.keys(localStorage);
    for(var i=0; i<keys.length; i++){
        var user = JSON.parse(localStorage.getItem(keys[i]));
        if(document.querySelector('#user').value == user.userName &&
         document.querySelector('#password').value == user.userPassword){
            window.location.href = 'compra-aluno.html';
            return alert('Login efetuado com sucesso.');
        }
    }
    alert('Login ou senha incorretos, verifique e tente novamente')
})