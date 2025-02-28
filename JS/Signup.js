function getInputNumberFrom() {
    let input = document.getElementById("input-number");
    let value = input.value;
    let password_input = document.getElementById("password-input");
    let password_value = password_input.value;

    if (value.length != 10) {
        input.classList.remove("form-control");
        input.focus();
        input.classList.add("form-control-after");
        alert("Mobile number must be of 10 digit");
    } else if (value[0] != 9 && value[0] != 8 && value[0] != 7 && value[0] != 6) {
        alert("Moblie number must start with 9,8,7 or 6");

        input.classList.remove("form-control")
        input.focus();
        input.classList.add("form-control-after");
    }
    else if (password_value === "") {
        alert("Please enter a secure password");
    } else if (password_value.length <= 8) {
        alert("Password must be 8 characters minimum and strong password")
    } else if (password_value.length >= 8) {
        window.location = "/HTML/otp.html"
        alert("Get OTP")
    } else {
        input.classList.remove("form-control-after");
        input.classList.add("form-control-active")
    }

};

let form = document.getElementById("signin-form");
function sumbitForm(event) {
    event.preventDefault();
}
form.addEventListener('submit', sumbitForm)


function showPassword() {
    let passwordInput = document.getElementById("password-input");
    let password_Show = document.querySelector(".password-Show");
    let password_hide = document.querySelector(".hide-password")

    password_Show.addEventListener('click', () => {
        passwordInput.type = "text";
        password_hide.style.display = "inline"
        password_Show.style.display = "none"
    })
    password_hide.addEventListener("click", () => {
        passwordInput.type = "password"
        password_Show.style.display = "inline"
        password_hide.style.display = "none"
    })
}
showPassword();