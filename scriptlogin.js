let login_button = document.getElementById("login-button");

let Password_Value = localStorage.getItem("Stored_Password");

let UsernameValue = localStorage.getItem("Stored_Username");

let username = document.getElementById("username");
username.value = UsernameValue;

let password = document.getElementById("password");
password.classList.remove("red-border");

login_button.onclick = function() {
    if(Password_Value == password.value) {
        login_button.href = "./meow.html";
    }
    else {
        let password_wrong = document.getElementById("password-wrong");
        password_wrong.classList.remove("hidden");
        password.classList.add("red-border");
    }
    
}