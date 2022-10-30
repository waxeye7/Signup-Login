let Username = localStorage.getItem("Stored_Username");
let First_Name = localStorage.getItem("Stored_First_Name");
let Last_Name = localStorage.getItem("Stored_Last_Name");

let div_wrapper_h1 = document.getElementById("div-wrapper-h1");

let Initials = First_Name[0] + Last_Name[0];
let InitialsH1 = document.createElement('h1');
InitialsH1.innerHTML = Initials;
InitialsH1.classList.add('initials');

div_wrapper_h1.appendChild(InitialsH1);

let username_span = document.getElementById("username-span");
username_span.innerHTML = Username;

let first_name_span = document.getElementById("first-name-span");
first_name_span.innerHTML = First_Name;

