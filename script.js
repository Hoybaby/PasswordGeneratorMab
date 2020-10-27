//Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// possible values of code

var start;

number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

character = "!", "@", "#", "$", "%", "^", "&", "*", "()"

upperCase = ["A","B","C", "D", "E", "F", "G", "H","I", "J", "K", "L", "M", "N", "O","P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var confirmSpecial = confirm("Would you like Special Characters your password?");

var confirmNumber = confirm("Would you like Numbers in your Password?");

var confirmLowerCase = confirm("would you like Lower Case Letters in your Password?")

var confirmUpperCase = confirm("Would you like Upper case letters in your Password?")

enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"))




for (var i = 0; i <= generateBtn; i++); {
  password = password + valuesString.charAt(Math.floor(Math.random() * Math.floor(value.length)))
}

function generatePassword() {

    start = parseInt(prompt("How many characters would you like your password to be? Please choose between 8 and 128"));

    if (!start) { 
        alert("This needs a value");     
    } else if (start < 8 || start > 128) {
        // Validates the user input
        // now we will start the input for user
    } else {
        confirmSpecial =

    }

}