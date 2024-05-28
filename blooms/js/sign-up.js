const eyes = document.getElementsByClassName("eyes")[0];
const password = document.getElementById("password");

function swap() {

    event.preventDefault()

    if(eyes.classList.contains("show-password")){
        eyes.innerHTML = '<i class="fa-solid fa-eye"></i>';
        password.type = "password";
        eyes.classList.remove("show-password")
    }else{
       eyes.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
       password.type = "text";
       eyes.classList.add("show-password");
    }
}

const eye = document.getElementsByClassName("password2")[0];
const check = document.getElementById("confirm");

function cp() {

    event.preventDefault()

    if(eye.classList.contains("show-password")){
        eye.innerHTML = '<i class="fa-solid fa-eye"></i>';
        check.type = "password";
        eye.classList.remove("show-password")
    }else{
       eye.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
       check.type = "text";
       eye.classList.add("show-password") 
    }
}

const checkbox = document.getElementById("checkbox");
const button = document.getElementsByTagName("button")[0];

function check1() {
    if(checkbox.checked === true){
        button.style.curosr = "pointer";
        button.removeAttribute("disabled")
    }else{
        button.style.curosr = "no-drop";
        button.addAttribute("disabled", " ")
    }
}

function redirect() {
    event.preventDefault();
    window.location.href = "sign-in.html"
}