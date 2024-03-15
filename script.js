const passwordBox = document.getElementById("password");
const length = 16;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*(){}[]_-+=~`><.,?/|':;";
const allpresent = upperCase + lowerCase + symbol + number;

function createPassword(){
 
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)]; // Add a random Uppercase
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]; // Add a random Uppercase
    password += number[Math.floor(Math.random() * number.length)]; // Add a random Uppercase
    password += symbol[Math.floor(Math.random() * symbol.length)]; 
    // Add a random Uppercase
    while(password.length < length){
        password += allpresent[Math.floor(Math.random() * allpresent.length)];
    }
    passwordBox.value = password;
}
const generatebtn = document.getElementById('btn');
// generatebtn.addEventListener('click',createPassword);
generatebtn.addEventListener('click', function() {
    createPassword();
});
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}
const copyButton = document.getElementById('cpyBtn');
copyButton.addEventListener('click', () => copyPassword()
);
document.getElementById('cpyBtn').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    passwordInput.style.outline = 'none';
    passwordInput.style.border = 'none';

});


