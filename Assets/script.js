// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "qwertyuiopasdfghjklzxcvbnm".split("");
var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
var numbers = "1234567890".split("");
var specialChar = "!@#$%^&*()".split("");
var possibleChoices = [];

function generatePassword() {
var passLength = window.prompt("Select how many characters you wish your password to be. You may choose between 8 and 128 characters in length.")
if (passLength < 8 || passLength > 128) {
window.alert("Please select a number between 8 and 128.");
generatePassword();
}
else {
  alert("Password confirmed for " + passLength + " characters in length.");
}
};

var conLowerCase = confirm("Click OK to include lowercase characters in your password. Click Cancel to exclude lowercase characters.");
var conUpperCase = confirm("Click OK to include uppercase characters in your password. Click Cancel to exclude uppercase characters.");
var conNumbers = confirm("Click OK to include numbers in your password. Click Cancel to exclude numbers.");
var conSpecialChar = confirm("Click OK to include special characters in your password. Click Cancel to exclude special characters.");


function selectChars() {
if (window.confirm("Would you like to include lowercase characters?") {

}
)
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);