const cadastroButton = document.querySelector('#cadastroButton');
const userName = document.querySelector('#user');
const userMail = document.querySelector('#email');
const userPassword = document.querySelector('#password');


cadastroButton.addEventListener('click', ()=>{
    var salt = sjcl.random.randomWords(2);
    var hashedPassword = sjcl.codec.hex.fromBits(sjcl.misc.pbkdf2(userPassword.value, salt, 10000, 256));

    const objUser = {
        userName:userName.value,
        userLogin:userMail.value,
        userPassword:hashedPassword,
        salt:salt,
        userSubsidio:false
    };

    if(objUser.userName && objUser.userLogin && userPassword.value){
        if(!localStorage.getItem(objUser.userLogin)){
            localStorage.setItem(objUser.userLogin, JSON.stringify(objUser));
            window.location.href = './login.html';
            return alert('Usuário cadastrado com sucesso.\nRedirecionando para a página de login.');
        }else{
            return alert('Usuário já cadastrado.');
        }
    }else{
        return alert('Todos os campos são obrigatórios.');
    }
})

