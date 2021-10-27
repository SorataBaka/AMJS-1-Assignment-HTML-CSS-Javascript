var emailValid = false
var formValid = false
var passwordValid = false
const login = async() => {
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value

  const noAccount = document.getElementById("no-login")
  const invalidPassword = document.getElementById("invalid-password")

  const userObject = JSON.parse(localStorage.getItem(email))

  noAccount.style.display = "none"
  invalidPassword.style.display =  "none"
  if(!userObject) return noAccount.style.display = "block"
  if(password !== userObject.password) return invalidPassword.style.display = "block"
  sessionStorage.setItem("currentSession",JSON.stringify(userObject))
  window.location.replace("./index.html")
}
const validateEmail = async() => {
  const email = document.getElementById("email").value
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const valid =  re.test(String(email).toLowerCase());
  if(valid){
    emailValid = true
  } else{
    emailValid = false
  }
}
const validateForm = async() => {
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  if(email && password){
    formValid = true
  }else{
    formValid = false
  }
}
const validatePassword = async() => {
  const password = document.getElementById("password").value
  const passwordArray = password.split("")
  var upperCounter = 0
  var digitCounter = 0

  if(passwordArray.length < 8){
    passwordValid = false
  }else{
    for(char of passwordArray){
      if(char == char.toUpperCase() && isNaN(char)){
        upperCounter = upperCounter + 1
      }
      if(!isNaN(char)){
        digitCounter = digitCounter + 1
      }
    }
    if(upperCounter<1 || digitCounter <1){
      passwordValid = false
    }else{
      passwordValid = true
    }
  }
}
const disableButton = async() => {
  const button = document.getElementById("submit")
  button.disabled = true
  button.style.backgroundColor = "grey"
}
const enableButton = async() => {
  const button = document.getElementById("submit")
  button.disabled = false
  button.style.backgroundColor = "black"
}

document.addEventListener("keyup" || "change", async()=> {
  validateForm()
  if(emailValid && formValid && passwordValid){
    enableButton()
  }else{
    disableButton()
  }
})

