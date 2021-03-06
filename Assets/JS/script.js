// Assignment Code
var generateBtn = document.querySelector("#generate");

// creating variables for alphabets, numeric characters and symbols


var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var symbol = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}";
var numberChars = "0123456789";



// Declaring generatePassword function and creating prompts for password length 

function generatePassword() {

  // Create a bank to contain all of the characters selected to pull from
  var charBank = "";
  var passLength = prompt("How may characters would you like? 8-128 characters?");
  // alert if the length of password  is not between 8-128 characters 
  if (passLength < 8 || passLength > 128) {
    alert("Please choose at least 8 or no more than 128 characters.");
    return generatePassword();
  }
  // alert if value entered is not number
  if (isNaN(passLength)) {
    alert("Please enter numbers only.");
    return generatePassword();
  }

  //  confirm character types that user wants to select
  var userWantUpp = confirm("Would you like to include at least 1 upper case letter in your password?");
  if (userWantUpp) {
    charBank += upperChars;
  }
  var userWantLow = confirm("Would you like to include at leaset 1 lower case letter in your password?");
  if (userWantLow) {
    charBank += lowerChars;
  }
  var userWantSymbol = confirm("Would you like to include at least 1 special character in your password?");
  if (userWantSymbol) {
    charBank += symbol;
  }
  var userWantNum = confirm("Would you like to include at least 1 number in your password?");
  if (userWantNum) {
    charBank += numberChars;
  }

  // My input should be validated and at least one character type should be selected
  if (!userWantLow || !userWantUpp || !userWantNum || !userWantSymbol) {
    alert("Please select at least 1 charater type");
   return generatePassword();
  }
  
    // the random password is an empty string to be filled up what user selects above
  var password = "";

  // Depending on how many characters the user'd like the password to be , the loop will run through until the length ends, do the math and add the character types to create the [random]password
  for (var i = 0; i < passLength; i++) {
    password += charBank.charAt(Math.floor(Math.random() * charBank.length));
  // as long as the condition passes the validator, it will loop
  // create a new variable for valid password

}

  return password;

}

// Write password to the #password input (placeholder)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//If a user says yes to every question. They should get a password that includes every character type (uppercase, lowercase, special, and number). However, that isn't guaranteed to happen with your code. Sometimes it includes all the character types the user wanted, sometimes it doesn't.



// This is because of the code I copied and showed you earlier. Your code randomly selects characters from charBank, meaning it doesn't guarentee each character type is chosen.

