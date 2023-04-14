const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("passwprd")


form.addEventListener("submit", (e) =>{
    e.preventDefault(); 

    checkInputs();
});
function chekInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if (usernameValue  == ""){
        setErrorFor(username, "O nome de usuario e obrigatorio");
    }
}
function setErrorFor(input, massage){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    small.innerText = massage;
    formControl.className = "form-control error"
}

function setSuccessFor(input){
    const formControl = input.parentElement;

    formControl.className = "form-control success";
}