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

    var keys = Object.keys(localStorage);
    for(var i=0; i<keys.length; i++){
        user = JSON.parse(localStorage.getItem(keys[i]));
        if(user.userLogin === objUser.userLogin){
            return false;
        }
    }
    localStorage.setItem(Object.keys(localStorage).length, JSON.stringify(objUser));
}

newUser('Admin', 'admin@unifesspa.edu.br', 'admin', false);
newUser('AdminSubsidio', 'adminsub@unifesspa.edu.br', 'admin', true);