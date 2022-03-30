

let passwordEl = document.querySelectorAll('.password-boxes div');
let generatePassword= document.querySelector('button')
generatePassword.addEventListener('click',generateRandomPassword)
let setChar ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@!#$%^&*()_+=|~';

let charactersLength = setChar.length;

function generateRandomPassword() {
    Array.from(passwordEl).map(e=>{
        e.innerHTML='';
        for(let i=0;i<15;i++) {
            e.classList.add('password');
            let randomIndex= Math.floor(Math.random()*charactersLength);    
            e.textContent+=setChar[randomIndex];
                }
    })

}
// let passwordLen = document.querySelector('#password-len');
// passwordLen.addEventListener('keyup',getpasswordLength) 
// function getpasswordLength() {
//     return passwordLen.value
// }