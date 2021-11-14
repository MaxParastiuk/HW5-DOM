let userName = document.getElementsByTagName("p")[1]
let passwordUser = document.getElementsByTagName("p")[2]

let userInput = document.getElementById('user_name').value;
let passwordInput = document.getElementById("user_password").value


function output() {
    userName.innerHTML = "Username: " + userInput;
    passwordUser.innerHTML = "User_password: " +  passwordInput;
    localStorage.setItem("User",userInput)
    localStorage.setItem("Password",passwordInput)
}