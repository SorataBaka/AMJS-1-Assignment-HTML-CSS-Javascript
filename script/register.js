var emailValid = false
var passwordValid = false
var formValid = false

const register = async() => {
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const gender = document.getElementById("gender").value
  const city = document.getElementById("city").value
  const password = document.getElementById("password").value
  const userObject = JSON.stringify({name, email, gender, city, password})
  localStorage.setItem(email, userObject);
  sessionStorage.setItem("currentSession", userObject);
  window.location.replace("/index.html")
}
const validatePassword = async()=> {
  var password1valid = false
  var password2valid = false
  const password = document.getElementById("password").value
  const confirmpassword = document.getElementById("passwordconfirm").value
  //Check for password content uppercase and digit
  const passwordArray = password.split("")
  var upperCounter = 0
  var digitCounter = 0
  for(letter of passwordArray){
    if(letter == letter.toUpperCase() && isNaN(letter)){
      upperCounter = upperCounter + 1
    }
    if(!isNaN(letter)){
      digitCounter = digitCounter + 1
    }
  }
  //Validate password contents and length
  if(passwordArray.length < 8){
    const alert = document.getElementById("passwordlengthalert")
    alert.style.display = "block"
    password1valid = false
  }else{
    const alert = document.getElementById("passwordlengthalert")
    alert.style.display = "none"
    if(upperCounter < 1 || digitCounter < 1){
      const alert = document.getElementById("passwordalert")
      alert.style.display = "block"
      password1valid = false
    }else{
      const alert = document.getElementById("passwordalert")
      alert.style.display = "none"
      password1valid = true
    }
  }
  //Check if the password and confirm password is the
  if(password != confirmpassword){
    document.getElementById("confirmationalert").style.display = "block"
    password2valid = false
  }
  if(password == confirmpassword){
    document.getElementById("confirmationalert").style.display = "none"
    password2valid = true
  }
  if(password1valid && password2valid){
    passwordValid = true
  }else{
    passwordValid = false
  }
}

const validateEmail = async() => {
  const email = document.getElementById("email").value
  const validateUserObject = JSON.parse(localStorage.getItem(email))
  if(validateUserObject?.email == email){
    const alert = document.getElementById("emailalert")
    alert.style.display = "block"
    return emailValid = false
  }else{
    const alert = document.getElementById("emailalert")
    alert.style.display = "none"
    //Check email validity with
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const valid =  re.test(String(email).toLowerCase());
    if(valid){
      const alert = document.getElementById("emailformatalert")
      alert.style.display = "none"
      emailValid = true
    }else{
      const alert = document.getElementById("emailformatalert")
      alert.style.display = "block"
      emailValid = false
    }

  }
}

const validateForm = async()=> {
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const gender = document.getElementById("gender").value
  const city = document.getElementById("city").value
  const password = document.getElementById("password").value
  const confirmpassword = document.getElementById("passwordconfirm").value
  if(!name || !email || !gender || !city || password.length == 0 || confirmpassword.length == 0){
    formValid = false
  }else{
    formValid = true
  }
}
const disableButton = async() => {
  const button = document.getElementById("submit-button")
  button.disabled = true
  button.style.backgroundColor = "grey"
}
const enableButton = async() => {
  const button = document.getElementById("submit-button")
  button.disabled = false
  button.style.backgroundColor = "black"
}

document.addEventListener("keyup" || "change", () => {
  validateForm()
  if(emailValid && passwordValid && formValid){
    return enableButton()
  }else{
    return disableButton()
  }
})
