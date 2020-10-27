//Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var confirmSpecial = confirm("Would you like Special Characters your password?");

var confirmNumber = confirm("Would you like Numbers in your Password?");

var confirmLowerCase = confirm("would you like Lower Case Letters in your Password?")

var confirmUpperCase = confirm("Would you like Upper case letters in your Password?")

enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"))



// possible values of code
confirmNumber = "123456789"

confirmCharcter = "!@#$%^&*()"

confirmUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

confirmLowerCase = "abcdefghijklmnopqrstuvwxyz"
// valuesNumber 

for (var i = 0; i <= generateBtn; i++); {
  password = password + valuesString.charAt(Math.floor(Math.random() * Math.floor(value.length)))
}