// generateBtn variable tied to button
var generateBtn = document.querySelector("#generate");
// Variables for each type of character
var lowerCase = "qwertyuiopasdfghjklzxcvbnm".split("");
var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
var numbers = "1234567890".split("");
var specialChar = "!@#$%^&*()".split("");
//variable for array of selected characters
var possibleChoices = [];

function generatePassword() {
  var passLength = window.prompt("Select how many characters you wish your password to be. You may choose between 8 and 128 characters in length.")
  if (passLength < 8 || passLength > 128) {
    window.alert("Please select a number between 8 and 128.");
    generatePassword();
  }
  else {
    selectChars();
    retVal = randomizer(passLength);
    window.alert("Congratulations! A " + passLength + " character length password has been generated for you!");
  }
  return retVal
};

// Prompt user to select character types to be included in password
function selectChars() {
  possibleChoices = [];
  // Each prompt asks user to confirm or cancel the inclusion of specific character types
  if (window.confirm("Would you like to include lowercase characters?")) {
    possibleChoices = possibleChoices.concat(lowerCase);
  }
  if (window.confirm("Would you like to include uppercase characters?")) {
    possibleChoices = possibleChoices.concat(upperCase);
  }
  if (window.confirm("Would you like to include numbers?")) {
    possibleChoices = possibleChoices.concat(numbers);
  }
  if (window.confirm("Would you like to include special characters?")) {
    possibleChoices = possibleChoices.concat(specialChar);
  }
  // If no selections are made, user is notified and sent back to the first selection prompt
  else {
    window.alert("You must select at least one option.")
    selectChars();
  }  
};

// Randomize order of characters within generated password
function randomizer(passLength) {
  var retVal = "";
  for (var i = 0; i < passLength; i++) {
    retVal += possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
  }
  return retVal
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);