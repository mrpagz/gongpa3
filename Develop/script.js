// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Letters numbers and special characters generated by user's desired password
var userCharacters = [];
var upperCaseLetters = "ABCDEFHGIJKLMNOPQRSTUVWXYZ";
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var numericalValues = "0123456789";
var specialCharacters = "!@#$%^&*()_-=+[]{}";

function getUserChoice() {
  var lowerCaseChoice = confirm("Would you like to include lowercase letters?");
  var upperCaseChoice = confirm("Would you like to include uppercase letters?");
  var numericalValueChoice = confirm("Would you like to include numerical values?");
  var specialCharacterChoice = confirm("Would you like to include special characters?");

  // This is to prompt the user on the type of password that will generate
  if (lowerCaseChoice) {
    lowerCaseLetters;
    userCharacters.push(lowerCaseLetters);
  }
  if (upperCaseChoice) {
    upperCaseLetters;
    userCharacters.push(upperCaseLetters);
  }
  if (numericalValueChoice) {
    numericalValues;
    userCharacters.push(numericalValues);
  }
  if (specialCharacterChoice) {
    specialCharacters;
    userCharacters.push(specialCharacters);
  }
  return;

}

function generatePassword() {
  getUserChoice();
  var length = prompt("What will the length of your password be?");
  //This is to successfully generate the password requested
  var splitCharacters = userCharacters.join("");
  var retVal = "";
  //This is to determine error for password length
  if (isNaN(length) === true || length > 128 || length < 8) {
    alert("Password length must be provided with a number between 8 and 128");
    return;
  }
  // This loops the number of times the password length that the user decides. Each iteration generates a random index and 
  //  concatenates the value at that index to the password text (retVal).
  for (var i = 0; i < length; ++i) {
    var randomIndex = Math.floor(Math.random() * splitCharacters.length);
    retVal += splitCharacters[randomIndex];
  }
  console.log(retVal);
  return retVal;
}
var generateBtn = document.querySelector("#generate");
// Write password to the password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// This is to add event listener by clicking the button
generateBtn.addEventListener("click", writePassword);


