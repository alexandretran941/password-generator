function generatePassword(){

    let characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";


    let password = "";

    let length = 12;


    for(let i = 0; i < length; i++){

        let random =
        Math.floor(Math.random() * characters.length);

        password += characters[random];

    }


    document.getElementById("password").value = password;

}