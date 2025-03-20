let uuid = localStorage.getItem("uuid")
if (!uuid) {
    window.location.href = "/HTML/signUp.html"
}


let otp1 = document.getElementById("otp-1");
let otp2 = document.getElementById("otp-2");
let otp3 = document.getElementById("otp-3");
let otp4 = document.getElementById("otp-4");
let otp5 = document.getElementById("otp-5");
let otp6 = document.getElementById("otp-6");

otp1.addEventListener('input', function (e) {
    if (e.target.value.length > 1) {
        document.getElementById("otp-1").value = e.target.value[0]
    }
    else if (e.target.value.length == 1) {
        document.getElementById("otp-1").blur()
        document.getElementById("otp-2").focus()
    }
});
otp2.addEventListener('input', function (e) {
    if (e.target.value.length > 1) {
        document.getElementById("otp-2").value = e.target.value[0]
    }
    else if (e.target.value.length == 1) {
        document.getElementById("otp-2").blur()
        document.getElementById("otp-3").focus()
    } else if (e.target.value.length == 0) {
        document.getElementById("otp-2").blur()
        document.getElementById("otp-1").focus()
    }
});
otp2.addEventListener('keydown', function (e) {
    if (e.key == "Backspace" && e.target.value.length == 0) {
        document.getElementById("otp-2").blur()
        document.getElementById("otp-1").focus()
    }
});;
otp3.addEventListener('input', function (e) {
    if (e.target.value.length > 1) {
        document.getElementById("otp-3").value = e.target.value[0]
    }
    else if (e.target.value.length == 1) {
        document.getElementById("otp-3").blur()
        document.getElementById("otp-4").focus()
    } else if (e.target.value.length == 0) {
        document.getElementById("otp-3").blur()
        document.getElementById("otp-2").focus()
    }
});
otp3.addEventListener('keydown', function (e) {
    if (e.key == "Backspace" && e.target.value.length == 0) {
        document.getElementById("otp-3").blur()
        document.getElementById("otp-2").focus()
    }
});
otp4.addEventListener('input', function (e) {
    if (e.target.value.length > 1) {
        document.getElementById("otp-4").value = e.target.value[0]
    }
    else if (e.target.value.length == 1) {
        document.getElementById("otp-4").blur()
        document.getElementById("otp-5").focus()
    } else if (e.target.value.length == 0) {
        document.getElementById("otp-4").blur()
        document.getElementById("otp-3").focus()
    }
});
otp4.addEventListener('keydown', function (e) {
    if (e.key == "Backspace" && e.target.value.length == 0) {
        document.getElementById("otp-4").blur()
        document.getElementById("otp-3").focus()
    }
});
otp5.addEventListener('input', function (e) {
    if (e.target.value.length > 1) {
        document.getElementById("otp-5").value = e.target.value[0]
    }
    else if (e.target.value.length == 1) {
        document.getElementById("otp-5").blur()
        document.getElementById("otp-6").focus()
    } else if (e.target.value.length == 0) {
        document.getElementById("otp-5").blur()
        document.getElementById("otp-4").focus()
    }
});
otp5.addEventListener('keydown', function (e) {
    if (e.key == "Backspace" && e.target.value.length == 0) {
        document.getElementById("otp-5").blur()
        document.getElementById("otp-4").focus()
    }
});
otp6.addEventListener('input', function (e) {
    if (e.target.value.length > 1) {
        document.getElementById("otp-6").value = e.target.value[0]
    }
    else if (e.target.value.length == 0) {
        document.getElementById("otp-6").blur()
        document.getElementById("otp-5").focus()
    } else if (e.target.value.length == 1) {
        document.getElementById("otp-6").blur()
    }
});
otp6.addEventListener('keydown', function (e) {
    if (e.key == "Backspace" && e.target.value.length == 0) {
        document.getElementById("otp-6").blur()
        document.getElementById("otp-5").focus()
    }
});

let getOtpBtn = document.querySelector(".submit-btn");
getOtpBtn.addEventListener('click', () => {
    let otp1 = document.getElementById("otp-1");
    let otp2 = document.getElementById("otp-2");
    let otp3 = document.getElementById("otp-3");
    let otp4 = document.getElementById("otp-4");
    let otp5 = document.getElementById("otp-5");
    let otp6 = document.getElementById("otp-6");
    if ([otp1, otp2, otp3, otp4, otp5, otp6].every(input => input.value.length === 1)) {
        window.location = "/index.html";
    } else {
        alert("Please enter a valid OTP");
    }

})

// let timer = true;
// function timerRang(remaining) {
//     let m = Math.floor(remaining / 60);
//     let s = remaining % 60;
//     m = m < 10 ? '0' + m : m;
//     s = s < 10 ? '0' + s : s;
//     document.getElementById("timer").innerHTML = "resend otp : " + m + ':' + s;
//     remaining -= 1;
//     if (remaining >= 0 && timer) {
//         setTimeout(function () {
//             timerRang(remaining);
//         }, 1000);
//         return;
//     }
//     if (!timer) {
//         return;
//     }
//     alert("OTP Time's Over")
// }
// timerRang(120)



var timer;
// var current_time = 60 

function GetCurrentTimer(counter) {
    clearInterval(timer)
    timer = setInterval(() => {
        let value_1 = Math.floor(counter / 60)
        let value_2 = Math.floor(counter % 60)
        let cart = document.getElementById("timer")
        cart.innerText = `${value_1}:${value_2 < 10 ? "0" : ""}${value_2}`
        if (counter <= 0) {
            clearInterval(timervalue)
        } else {
            counter--
        }
        if (counter >= 1) {
            document.getElementById('resend').disabled = true
        } else {
            document.getElementById('resend').disabled = false

        }
    }, 1000);
}
let last = document.getElementById("resend")
last.addEventListener('click', () => {
    GetCurrentTimer(10)

})
GetCurrentTimer(10);