const eyes = document.getElementsByClassName("eyes")[0];
const password = document.getElementById("password");

function swap() {

    event.preventDefault()

    if(eyes.classList.contains("show-password")){
        eyes.innerHTML = '<i class="fa-solid fa-eye"></i>';
        password.type = "password";
        eyes.classList.remove("show-password")
    }else{
       eyes.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
       password.type = "text";
       eyes.classList.add("show-password") 
    }
}