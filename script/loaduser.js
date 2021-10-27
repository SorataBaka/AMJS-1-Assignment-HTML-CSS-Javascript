const checkSession = async() => {
  const session = JSON.parse(sessionStorage.getItem("currentSession"))
  const email = session?.email
  const checkUser = JSON.parse(localStorage.getItem(email))
  if(!checkUser) return
  const name = checkUser.name
  const divElement = document.getElementById("button-group")
  divElement.style.width = "auto"
  return document.getElementById("button-group").innerHTML = `\n      <a href="#" class="Logged-in">Logged in as ${name}</a>\n      <a href="#"><button class="login-button" onclick="logout()">LOG OUT</button></a>\n    `
}

const logout = async() => {
  sessionStorage.removeItem("currentSession")
  window.location.reload()
}