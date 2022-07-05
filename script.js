// Assignment code here

function generatePassword() {
  var lenght = 12, 
  charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  retVal = "";
  for (var i = 0, n = charset.length; i < lenght; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
