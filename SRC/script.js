// Assignment Code
var generateBtn = document.querySelector("#generate");

//Character sets
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var specialch = "!@#$%^&*()_+[]{},.-?~"
var numbers = "1234567890"

var characters = "";

function generatePassword(){
  var passlength = prompt("Choose the length of your password.")
  if (passlength<8||passlength>128){
    alert ("At least 8 characters required.\nNo more than 128 characters.")
  }
  var lowercase = confirm("Do you want to include lowercase characters?")
  var uppercase = confirm("Do you want to include uppercase characters?")
  var numeric = confirm("Do you want to include numeric characters?")
  var special = confirm("Do you want to include special characters?")
  if (lowercase) characters+=alphabet
  if (uppercase) characters+=alphabet.toUpperCase()
  if (numeric) characters+=numbers
  if (special) characters+=specialch
  var newpassword=""
  for (var index = 0; index < passlength; index++) {  
    newpassword += characters [Math.floor(Math.random()*characters.length)]
  }
  return newpassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
