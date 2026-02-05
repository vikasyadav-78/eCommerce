// Signup.js (module)
// If you use backend later, keep base_url import — else remove the import line
// import base_url from "../export.js";

// EmailJS config
const EMAILJS_SERVICE_ID = "e-commerce-project"; // your service id (you gave)
const EMAILJS_TEMPLATE_ID = "TEMPLATE_ID"; // <-- replace with your EmailJS template id

// Elements
const submit_btn = document.getElementById("submit-btn");
const signupForm = document.getElementById("signup-form");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");

signupForm.addEventListener('submit', e => e.preventDefault());
submit_btn.addEventListener("click", handleSignup);

// simple email validator
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function togglePasswordUI() {
  const password_Show = document.querySelector(".password-Show");
  const password_hide = document.querySelector(".hide-password");

  if (!password_Show || !password_hide) return;

  password_Show.addEventListener('click', () => {
    passwordInput.type = "text";
    password_hide.style.display = "inline";
    password_Show.style.display = "none";
  });
  password_hide.addEventListener("click", () => {
    passwordInput.type = "password";
    password_Show.style.display = "inline";
    password_hide.style.display = "none";
  });
}
togglePasswordUI();

async function handleSignup() {
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!isValidEmail(email)) {
    alert("Please enter a valid email address");
    emailInput.focus();
    return;
  }
  if (!password || password.length < 8) {
    alert("Password must be at least 8 characters long");
    passwordInput.focus();
    return;
  }

  // disable button to prevent double click
  submit_btn.disabled = true;
  submit_btn.innerText = "Sending...";

  try {
    // generate OTP (client-side for demo/testing)
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // store for verification (sessionStorage clears on tab close)
    sessionStorage.setItem("signup_generated_otp", otp);
    sessionStorage.setItem("signup_email", email);

    // send via EmailJS
    // ensure emailjs.init(...) already ran in HTML
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      to_email: email,
      otp: otp
    });

    // store a temporary uuid (replace with real server uuid if you have)
    sessionStorage.setItem("uuid", "local-" + Date.now());

    // clear fields
    emailInput.value = "";
    passwordInput.value = "";

    // success
    alert("OTP sent to " + email);
    window.location.href = "/HTML/otp.html";
  } catch (err) {
    console.error("EmailJS send error:", err);
    alert("Failed to send OTP. Check console and EmailJS settings.");
    // keep stored OTP so user can try resend — or you may remove it
  } finally {
    // restore button
    submit_btn.disabled = false;
    submit_btn.innerHTML = 'Get OTP <i class="fa-solid fa-arrow-right"></i>';
  }
}
