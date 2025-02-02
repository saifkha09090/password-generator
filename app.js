function generatePassword() {
    let passwordLength = document.getElementById("passwordLength").value;
    let passwordOutput = document.getElementById("passwordOutput");
    let includeUppercase = document.getElementById("includeUppercase");
    let includeLowercase = document.getElementById("includeLowercase");
    let includeNumbers = document.getElementById("includeNumbers");
    let includeSymbols = document.getElementById("includeSymbols");
    let number = "0123456789";
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
    let characters = "";
  if (includeUppercase.checked) {
    characters += upperCase;
  }
  if (includeLowercase.checked) {
    characters += lowerCase;
  }
  if (includeNumbers.checked) {
    characters += number;
  }
  if (includeSymbols.checked) {
    characters += symbols;
  }
    if (!includeUppercase.checked && !includeLowercase.checked && !includeNumbers.checked && !includeSymbols.checked) {
    alert("Please select at least one option");
    passwordOutput.value = ""
    return;
    }
  let password = "";
  if (passwordLength > 20) {
    alert("please give me password length less then 20")
  }else{
  for (let i = 0; i < passwordLength; i++) {
    let random = Math.round(Math.random() * (characters.length - 1));
    password += characters[random];
  }}
  passwordOutput.value = password;
}