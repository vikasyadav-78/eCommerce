function getInputNumberFrom() {
    let input = document.getElementById("input-number");
    let value = input.value;

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
    } else {
        input.classList.remove("form-control-after");
        input.classList.add("form-control-active")
    }
};

let form  = document.getElementById("signin-form");
function sumbitForm(event){
    event.preventDefault();
}
form.addEventListener('submit' , sumbitForm)
