// selecting the elements to cross check before submission
const form = document.querySelector(".form");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const passcode = document.getElementById("password");
const error = document.querySelectorAll(".error");
const warning = document.querySelectorAll(".alert");



form.addEventListener("submit", (e) => {
    e.preventDefault();

    
    validate(firstName, error[0], warning[0], "first name cannot be empty")
    validate(lastName, error[1], warning[1], "last name cannot be empty")
    validate(email, error[2], warning[2], "looks like this cannot be an email")
    validate(passcode, error[3], warning[3], "password cannot be empty")
})

// creating a function that will validate 
validate = (element, error,warning, message, color) => {
    if(element.value == ""){
        element.style.borderColor = `hsl(0, 100%, 74%)`;
        error.classList.add("showerror");
        warning.textContent = message;
    }else{
        element.style.borderColor = `gray`;
        error.classList.remove("showerror");
        warning.textContent = "";
    }
}