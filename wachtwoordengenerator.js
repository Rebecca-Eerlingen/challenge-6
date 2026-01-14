const paswordInput = document.querySelector(".wachwoordDoos input");
const copyIcons = document.querySelector(".wachwoordDoos .copyIcon");
const rangeInput = document.querySelector(".lengteDoos input");
const sliderNumber = document.querySelector(".lengteDoos .sliderNummer");
const generateButton = document.querySelector(".genereerWachtwoord");
//Hier worden html elementen opgehaald. Dit heb ik gedaan met document.querySelector

//Hieronder zie je een variabelen doosje met letters, cijfers en tekens.-
//Deze worden later gebruikt om de wachtwoorden mee te maken.
let allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,.<>/?!@#$%^&*_'[]{}():;";
// De dingen met let en const ervoor zijn variabelen.-
// variabelen zijn doosjes die informatie bewaren
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

// Met de addEventListener kun je een gebeurtenisafhandelaar aan een specifiek element kunt koppelen, zoals een knop of een link.-
//Hij wacht tot er iets gebeurd om iets te doen