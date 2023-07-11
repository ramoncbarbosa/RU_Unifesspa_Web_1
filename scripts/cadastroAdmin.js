function newUser(userName, userLogin, userPassword, userSubsidio){
    var salt = sjcl.random.randomWords(2);
    var hashedPassword = sjcl.codec.hex.fromBits(sjcl.misc.pbkdf2(userPassword, salt, 10000, 256));

    const objUser = {
        userName:userName,
        userLogin:userLogin,
        userPassword:hashedPassword,
        salt:salt,
        userSubsidio:userSubsidio
    };

    if(!localStorage.getItem(objUser.userLogin)){
        localStorage.setItem(objUser.userLogin, JSON.stringify(objUser));
    }
}

newUser('Admin', 'admin@unifesspa.edu.br', 'admin', false);
newUser('AdminSubsidio', 'adminsub@unifesspa.edu.br', 'admin', true);