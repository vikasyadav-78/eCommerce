import base_url from "../export.js"
// let base_url = "http://localhost:3000"

let submit_btn = document.getElementById("submit-btn");
submit_btn.addEventListener("click", getInputNumberFrom)

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
    } else {
        // window.location = "/HTML/otp.html"
        input.classList.remove("form-control-after");
        input.classList.add("form-control-active")
        signInRequest(value, password_value)
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
        password_hide.style.display = "block"
        password_Show.style.display = "none"
    })
    password_hide.addEventListener("click", () => {
        passwordInput.type = "password"
        password_Show.style.display = "block"
        password_hide.style.display = "none"
    })
}
showPassword();



let forms = document.getElementById("signin-form")
function submitForm(event) {
    event.preventDefault();
}
forms.addEventListener('submit', submitForm)

function show() {
    let input = document.getElementById("showpassoword")
    if (input.type === "password") {
        input.type = "text";

    } else if (input.type === "text") {
        input.type = "password";
    }
}


function signInRequest(moblie, password) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "mobile": moblie,
        "password": password
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch(`${base_url}/api/v1/auth/signin/request`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
            if (result.success && result.message === "Successfully completed the request" && result.data) {
                localStorage.setItem("uuid", result.data)
                window.location.href = "/HTML/otp.html"
                document.getElementById("input-number").value = "";
                document.getElementById("password-input").value = "";
            } else if (!result.success) {
                console.log(error.explanation[0])
            } else {
                
                console.log("something went wrong please try again later")
            }
        })
        .catch((error) =>{
            alert("Something went wrong")
            console.error(error)
        });
}