function newUser(userName, userLogin, userPassword){
    var salt = sjcl.random.randomWords(2);
    var hashedPassword = sjcl.codec.hex.fromBits(sjcl.misc.pbkdf2(userPassword, salt, 10000, 256));
    const objUser = {
        userName:userName,
        userLogin:userLogin,
        userPassword:hashedPassword,
        salt:salt,
        userSubsidio:true
    };
    return objUser;
}

var admin = newUser('Administrador', 'admin@unifesspa.edu.br', 'admin');

localStorage.setItem(1, JSON.stringify(admin));