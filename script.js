//Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Arrays of code

var start;

numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

character = ["!", "@", "#", "$", "%", "^", "&", "*", "()"]

UpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

LowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var confirmCharacter;

var confirmNumber;

var confirmLowerCase;

var confirmUpperCase;

// variable answers is made so I can concatcatate later
var answers;


// for (var i = 0; i <= generateBtn; i++); {
//   password = password + valuesString.charAt(Math.floor(Math.random() * Math.floor(value.length)))
// }

function generatePassword() {

    var start = parseInt(prompt("How many characters would you like your password to be? Please choose between 8 and 128"));

    while (start < 8 || start >= 129) {
        alert("Password needs a valid length. Please try again!");
        start = parseInt(prompt("How many characters would you like your password to be? Please choose between 8 and 128"));
    };

    if (!start) {
        alert("This needs a value");
    } else {
        confirmCharacter = confirm("Would you like Special Characters your password?");
        confirmNumber = confirm("Would you like Numbers in your Password?");
        confirmLowerCase = confirm("would you like Lower Case Letters in your Password?")
        confirmUpperCase = confirm("Would you like Upper case letters in your Password?")
    }

    while (confirmCharacter === false && confirmNumber === false && confirmUpperCase === false && confirmLowerCase === false) {
        alert("You must choose at least one!")
        confirmCharacter = confirm("Would you like Special Characters your password?");
        confirmNumber = confirm("Would you like Numbers in your Password?");
        confirmLowerCase = confirm("would you like Lower Case Letters in your Password?")
        confirmUpperCase = confirm("Would you like Upper case letters in your Password?")
    
    }
    var userSelections = {
        length: start,
        special: confirmCharacter,
        numbers: confirmNumber,
        lowerCase: confirmLowerCase,
        upperCase: confirmUpperCase
    }

    var possibleChars = [];
    var guaranteedChars = [];

    if (userSelections.special) {
        console.log("The user wants special chars!")
        // Add these chars to possibleChars array
    }

    if (userSelections.numbers) {
        console.log("The user wants numbers chars!")
        // Add these chars to possibleChars array
    }

    if (userSelections.lowerCase) {
        console.log("The user wants lower chars!")
        // Add these chars to possibleChars array
    }

    if (userSelections.upperCase) {
        console.log("The user wants upper chars!")
        // Add these chars to possibleChars array
    }

    // for(var i = 0; i < userSelections.length; i++){
    // pull randomly from possible chars and push it into guaranteed
    //}

    //return the password array

};

