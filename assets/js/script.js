// Assignment Code
var generateBtn = document.querySelector("#generate");

//Character sets
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var specialch = "!@#$%^&*()_+[]{},.<>-?~"
var numbers = "1234567890"

//Function to generate a password and specify password criteria
function generatePassword(){
  //reset characters to default
  var characters = "";
  var passlength=0
  //Stops user from progressing unless have a password between certain parameters
  while (passlength<8||passlength>128){
    passlength = prompt("Choose the length of your password.")
    if (passlength<8||passlength>128){
      alert ("At least 8 characters required.\nNo more than 128 characters.")
    }
  }
  var lowercase,uppercase,numeric,special = false

//Stops the user from progressing unless they select a character set
  while(!lowercase && !uppercase && !numeric && !special){
    lowercase = confirm("Do you want to include lowercase characters?")
    uppercase = confirm("Do you want to include uppercase characters?")
    numeric = confirm("Do you want to include numeric characters?")
    special = confirm("Do you want to include special characters?")
    if (!lowercase && !uppercase && !numeric && !special) {
      alert ("At least 1 character set is needed.")
  }
}
//Add character set to characters variable
  if (lowercase) characters+=alphabet
  if (uppercase) characters+=alphabet.toUpperCase()
  if (numeric) characters+=numbers
  if (special) characters+=specialch
  var newpassword=""
  //Generates random password based on user selected options
  for (var index = 0; index < passlength; index++) {  
    newpassword += characters [Math.floor(Math.random()*characters.length)]
  }
  //Returns password to password variable
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
