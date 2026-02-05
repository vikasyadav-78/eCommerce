function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', () => {
  const input = document.getElementById('input-number');
  const value = input.value.trim();
  const password_input = document.getElementById('password-input');
  const password_value = password_input.value;

  if (!isValidEmail(value)) {
    alert('Please enter a valid email');
    input.focus();
    return;
  }
  if (!password_value || password_value.length < 8) {
    alert('Password must be at least 8 characters');
    password_input.focus();
    return;
  }

  // TODO: integrate real login API. For demo we redirect
  alert('Login successful (demo). Redirecting...');
  window.location = '/index.html';
});

function showPassword() {
  const passwordInput = document.getElementById("password-input");
  const password_Show = document.querySelector(".password-Show");
  const password_hide = document.querySelector(".hide-password");

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
showPassword();
