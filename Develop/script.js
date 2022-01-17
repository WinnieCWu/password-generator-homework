// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//must define generatePassword()***
function generatePassword() {
  var passwordLength = 0; 
  while (passwordLength <= 8 || passwordLength >= 128) {
    passwordLength = window.prompt('Please pick a password length between 8 through 128 characters.'); 
    if (passwordLength >= 8 || passwordLength <= 128) {
      window.confirm ('Are you sure you would like to select this length?')
      console.log(passwordLength);
      break;
    }
  }
  
//prompt for for what character types to include, whether or not to include lowercase, uppercase, numeric, and/or special characters
//when i answer each prompt, my input should be validated and at least 1 character type should be selected
///validate and track it by saving it as a variable (or console.log)
  return passwordLength;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
    //var password calls the function generatePassword, which we will code
    window.confirm('Would you like to include a lowercase character?')
    console.log(password.value);
    window.confirm('Would you like to include an uppercase character?')
    console.log(password.value);
    window.confirm('Would you like to include a numeric character?')
    console.log(password.value);
    window.confirm('Would you like to include a special character?')
    console.log(password.value);

  //searching the HTML for id elements called 'password', which in our HTML, is the textArea
  var passwordText = document.querySelector("#password");
  
  //when all prompts are answered, a pw is generated that matches the selected criteria
  //will set the result of the generatePassword function
  passwordText.value = password;

  //when pw is generated, it's either displayed in an alert or written on the page
  window.alert("Your new password is " + password + " !");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


