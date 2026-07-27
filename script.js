function generatePassword(){

    let characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    
    if (document.getElementById("uppercase").checked) {
        characters += "ABCDEFGHIJKMNOPQRSTUVWXYZ";
    }

    if (document.getElementById("numbers").checked) {
        characters += "01234567890";
    }

    if (document.getElementById("symbols").checked) {
        characters += "!@#$%^&*";
    }
    
    const length = Number(document.getElementById("length").value);

    let password = "";
    for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * characters.length);

        password += characters[random];
    }
    
    document.getElementById("password").value = password;

    checkStrength(password);
}

function copyPassword() {

    const password = document.getElementById("password").value;

    navigator.clipboard.writeText(password);

    alert("Mot de passe copié !");
}

function checkStrength(password) {
    const strength = document.getElementById("strength");
    
if (password.length < 8) {

    strength.textContent = "Faible";

} else if (password.length < 12) {

    strength.textContent = "Moyen";
} else {
    strength.textContent = "Fort";
}
}