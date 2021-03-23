
var generateBtn = document.querySelector("#generate");

//define global variables for password generation
var alphabetLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphabetUpper = alphabetLower.map(
  function (alphabetLower) {
    return alphabetLower.toUpperCase();
  }
  );
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specialCharacter = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", ">", "?", "@", "[" , "]", "^", "_", "`", "{", "|", "}", "~"];


function generatePassword() {
 
  var passwordLength = prompt("How long do you want your password to be? (Please pick between 8-128characters)");
  passwordLength = parseInt(passwordLength) || 0; 
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your selected password length is not enough. Please choose 8 to 128");
    return generatePassword();
  }

  alert("Great! " + passwordLength + " in length.");
  lowerCase = confirm("Do you want to add a lowercase letter?");
  upperCase = confirm("Do you want to add a uppercase letter?");
  Numbers = confirm("Do you want to add numbers?");
  specialCharacter = confirm("Do you want to add a special character?");

  if (!lowerCase && !upperCase && !Numbers && !specialCharacter) {
    alert("Please select atleast one of the character!");
    return generatePassword();
  }

 
  var password = "";
  var userPassword = [];

  if (lowerCase) {
    userPassword = userPassword.concat(alphabetLower);
  }

  if (upperCase) {
    userPassword = userPassword.concat(alphabetUpper);
  }

  if (Numbers) {
    userPassword = userPassword.concat(numbers);
  }

  if (specialCharacter) {
    userPassword = userPassword.concat(specialCharacter);
  }

  //generate password
  for (i = 0; i < passwordLength; i++) {
    randomDigit = (Math.floor(Math.random() * userPassword.length));
    password += userPassword[randomDigit];
  }

return password;
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
