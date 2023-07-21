// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "qwertyuiopasdfghjklzxcvbnm";
var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
var numbers = "1234567890";
var specialChar = "!@#$%^&*()";
var possibleChoices = [];

function generatePassword() {
window.prompt("Select how many characters you wish your password to be. You may choose between 8 and 128 characters in length.")
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
