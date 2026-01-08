const paswordInput = document.querySelector(".wachwoordDoos input");
const copyIcons = document.querySelector(".wachwoordDoos .copyIcon");
const rangeInput = document.querySelector(".lengteDoos input");
const sliderNumber = document.querySelector(".lengteDoos .sliderNummer");
const generateButton = document.querySelector(".genereerWachtwoord");

let allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,.<>/?!@#$%^&*_'[]{}():;";

const generatePassword = () => {
    let newPassword = "";

    for (let i = 0; i < rangeInput.value; i++) {
        let randomNumbers = Math.floor(Math.random() * allCharacters.length);
        newPassword += allCharacters [randomNumbers]
        
    }
   paswordInput.value = newPassword;
    
};

rangeInput.addEventListener("input", () => {
    sliderNumber.innerText = rangeInput.value;
    generatePassword();
});

copyIcons.addEventListener("click", () =>{
    navigator.clipboard.writeText(paswordInput.value);
})

generateButton.addEventListener("click", generatePassword);

