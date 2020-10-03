// Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Letters numbers and special character does not be wrapped with a quotation
var userCharacters = [];
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters = "ABCDEFHGIJKLMNOPQRSTUVWXYZ";
var numericalValues = "0123456789";
var specialCharacters = "!@#$%^&*()_-=+[]{}";

function getUserOptions() {
  var lowerCaseOption = confirm("Would you like to include lowercase letters?");
  var upperCaseOption = confirm("Would you like to include uppercase letters?");
  var numericalValueOption = confirm("Would you like to include numerical values?");
  var specialCharacterOption = confirm("Would you like to include special characters?");

  // 
  if (lowerCaseOption) {
    lowerCaseLetters;
    userCharacters.push(lowerCaseLetters);
  }
  if (upperCaseOption) {
    upperCaseLetters;
    userCharacters.push(upperCaseLetters);
  }
  if (numericalValueOption) {
    numericalValues;
    userCharacters.push(numericalValues);
  }
  if (specialCharacterOption) {
    specialCharacters;
    userCharacters.push(specialCharacters);
  }
  return;
}

function generatePassword() {
  getUserOptions();
  var length = parseInt(prompt("What will the length of your password be?"));
  //I'm unsure of what to do with this statement:
  var splitCharacters = userCharacters.join("");
  var retVal = "";
  //Conditional determining error 
  if (isNaN(length) === true || length > 128 || length < 8) {
    alert("Password length must be provided with a number between 8 and 128");
    return;

  }
  //Loops a number of times based on the user-decided pw length. Each iteration generates a random index and 
  //  concatenates the value at that index to the password text (retVal).
  for (var i = 0; i < length; ++i) {
    var randomIndex = Math.floor(Math.random() * splitCharacters.length);
    retVal += splitCharacters[randomIndex];
  }
  console.log(retVal);
  return retVal;
}
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


