let Sign_Up_Button = document.getElementById("sign-up-button");

let First_Name_Input = document.getElementById("first-name");
let Last_Name_Input = document.getElementById("last-name");
let Username_Input = document.getElementById("username");
let Password_Input = document.getElementById("password");
let Re_Password_Input = document.getElementById("re-password");

Sign_Up_Button.onclick = function() {
    let problemAmount = 0;
    let First_Name_Value = First_Name_Input.value;
    let Last_Name_Value = Last_Name_Input.value;
    let Username_Value = Username_Input.value;
    let Password_Value = Password_Input.value;
    let Re_Password_Value = Re_Password_Input.value;

    // let existingAppendHere = document.getElementById("append-here");
    // if(existingAppendHere) {
    //     existingAppendHere.remove();
    // }
    // let parent = document.getElementById("parent");
    // let appendHere = document.createElement("div");
    // appendHere.classList.add("column");
    // appendHere.id = "append-here";
    // parent.appendChild(appendHere);
    // let problems = document.createElement("h1");
    // problems.innerHTML= "Your Mistakes:";
    // appendHere.appendChild(problems);


    if(First_Name_Value.length == 0 || Last_Name_Value.length == 0 || Username_Value.length == 0 || Password_Value.length == 0 || Re_Password_Value.length == 0) {
        let signupbuttondiv = document.getElementById("fill-all-box");
        signupbuttondiv.classList.remove("hidden");
        problemAmount += 1;
    }
    else {
        let signupbuttondiv = document.getElementById("fill-all-box");
        signupbuttondiv.classList.add("hidden");
    }

    if(Password_Value != Re_Password_Value) {
        let password_dont_match = document.getElementById("password-problem-no-match");
        password_dont_match.classList.remove("hidden");
        let re_password_dont_match = document.getElementById("re-password-problem-no-match");
        re_password_dont_match.classList.remove("hidden");
        problemAmount += 1;
    }
    else {
        let password_dont_match = document.getElementById("password-problem-no-match");
        password_dont_match.classList.add("hidden");
        let re_password_dont_match = document.getElementById("re-password-problem-no-match");
        re_password_dont_match.classList.add("hidden");
    }


    if(Username_Value.length < 4) {
        let username_too_short = document.getElementById("username-problem");
        username_too_short.classList.remove("hidden");
        problemAmount += 1;
        // let 
    }
    else {
        let username_too_short = document.getElementById("username-problem");
        username_too_short.classList.add("hidden");
    }


    if(Password_Value.length < 8 || Re_Password_Value.length < 8) {
        let password_too_short = document.getElementById("password-problem-too-short");
        password_too_short.classList.remove("hidden");
        let re_password_too_short = document.getElementById("re-password-problem-too-short");
        re_password_too_short.classList.remove("hidden");
        problemAmount += 1;
    }
    else {
        let password_too_short = document.getElementById("password-problem-too-short");
        password_too_short.classList.add("hidden");
        let re_password_too_short = document.getElementById("re-password-problem-too-short");
        re_password_too_short.classList.add("hidden");
    }

    if(problemAmount == 0) {
        localStorage.setItem("Stored_First_Name", First_Name_Value);
        localStorage.setItem("Stored_Last_Name", Last_Name_Value);
        localStorage.setItem("Stored_Username", Username_Value);
        localStorage.setItem("Stored_Password", Password_Value);

        let modal = document.getElementById("modal");
        // modal.classList.remove("hidden");
        
        let modal_bg = document.getElementById("modal-bg");
        modal_bg.classList.remove("hidden");

        // Sign_Up_Button.href = "./meow.html";


    }
};