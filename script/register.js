const register = async() => {
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const gender = document.getElementById("gender").value
  const city = document.getElementById("city").value
  const password = document.getElementById("password").value
  const confirmpassword = document.getElementById("passwordconfirm").value
}
const validatePassword = async()=> {
  const password = document.getElementById("password").value
  const confirmpassword = document.getElementById("passwordconfirm").value

  //Check if the password and confirm password is the
  if(password != confirmpassword){
    document.getElementById("confirmationalert").style.display = "block"
    const button = document.getElementById("submit-button")
    button.disabled = true
    button.style.backgroundColor = "grey"
  }
  if(password == confirmpassword){
    document.getElementById("confirmationalert").style.display = "none"
    const button = document.getElementById("submit-button")
    button.disabled = false
    button.style.backgroundColor = "black"
  }


  //Check for password content uppercase and digit
  const passwordArray = password.split("")
  var upperCounter = 0
  var digitCounter = 0
  for(letter of passwordArray){
    if(letter === letter.toUpperCase()){
      upperCounter = upperCounter + 1
    }
    if(!isNaN(letter)){
      digitCounter = digitCounter + 1
    }
  }

  //Validate password contents and length
  if(upperCounter < 1 || digitCounter < 1){
    const alert = document.getElementById("passwordalert")
    const button = document.getElementById("submit-button")
    alert.style.display = "block"
    button.disabled = true
    button.style.backgroundColor = "grey"
  }else{
    const alert = document.getElementById("passwordalert")
    const button = document.getElementById("submit-button")
    alert.style.display = "none"
    button.disabled = false
    button.style.backgroundColor = "black"
  }
  if(passwordArray.length < 8){
    const alert = document.getElementById("passwordlengthalert")
    const button = document.getElementById("submit-button")
    alert.style.display = "block"
    button.disabled = true
    button.style.backgroundColor = "grey"
  }else{
    const alert = document.getElementById("passwordlengthalert")
    const button = document.getElementById("submit-button")
    alert.style.display = "none"
    button.disabled = false
    button.style.backgroundColor = "black"
  }
}
const validateForm = async()=> {
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const gender = document.getElementById("gender").value
  const city = document.getElementById("city").value
  const password = document.getElementById("password").value
  if(!name || !email || !gender || !city || password.length === 0){
    const button = document.getElementById("submit-button")
    button.disabled = true
    button.style.backgroundColor = "grey"
  }else{
    const button = document.getElementById("submit-button")
    button.disabled = false
    button.style.backgroundColor = "black"
    return validatePassword()
  }
}
document.addEventListener("keyup" || "change", () => validateForm())

