// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "qwertyuiopasdfghjklzxcvbnm";
var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
var numbers = "1234567890";
var specialChar = "!@#$%^&*()";
var possibleChoices = [];

function generatePassword() {
var passLength = window.prompt("Select how many characters you wish your password to be. You may choose between 8 and 128 characters in length.")
if (passLength < 8 || passLength > 128) {
window.alert("Please select a number between 8 and 128.");
generatePassword()
}
else {
  alert("Password confirmed for " + passLength + "characters in length.")
}
};



// function selectChars() {
// if window.confirm("Would you like to include lowercase characters?")
// };

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
