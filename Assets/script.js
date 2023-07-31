// generateBtn variable tied to button
var generateBtn = document.querySelector("#generate");
// Variables for each type of character
var lowerCase = "qwertyuiopasdfghjklzxcvbnm".split("");
var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
var numbers = "1234567890".split("");
var specialChar = "!@#$%^&*()".split("");
// Variable for array of selected characters
var possibleChoices = [];

//function to create password
function generatePassword() {
  // Set variable to create prompt for user to select number of desired characters in password length
  var passLength = window.prompt("Select how many characters you wish your password to be. You may choose between 8 and 128 characters in length.")
  // Created if statement to alert user to select a different number if they do not select between 8 and 128 characters
  if (passLength < 8 || passLength > 128) {
    window.alert("Please select a number between 8 and 128.");
    // After alert, user will be sent back to prompt to select a valid number of characters
    generatePassword();
  }
  // Else statement will initiate function to ask user which characters they wish to use in password
  else {
    selectChars();
    // Created variable for function that randomizes selected characters
    var retVal = randomizer(passLength);
    // User is alerted that a password has successfully been created
    window.alert("Congratulations! A " + passLength + " character length password has been generated for you!");
  }
  // Randomized password is returned
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