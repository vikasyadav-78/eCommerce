// Require that signup set a uuid marker
let uuid = sessionStorage.getItem("uuid");
if (!uuid) {
  window.location.href = "/HTML/signUp.html";
}

const otpInputs = Array.from({length:6}, (_,i) => document.getElementById(`otp-${i+1}`));
const verifyBtn = document.getElementById('verify-btn');
const resendBtn = document.getElementById('resend');
const timerEl = document.getElementById('timer');

otpInputs.forEach((input, idx) => {
  input.addEventListener('input', (e) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    e.target.value = val;
    if (val.length === 1 && idx < otpInputs.length - 1) otpInputs[idx+1].focus();
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && !e.target.value && idx > 0) {
      otpInputs[idx-1].focus();
    }
  });
});

function getEnteredOtp() {
  return otpInputs.map(i => i.value).join('');
}

verifyBtn.addEventListener('click', () => {
  const entered = getEnteredOtp();
  const generated = sessionStorage.getItem('signup_generated_otp');
  if (!generated) {
    alert('No OTP found. Please request a new OTP.');
    return;
  }
  if (entered === generated) {
    sessionStorage.removeItem('signup_generated_otp');
    sessionStorage.removeItem('signup_email');
    sessionStorage.removeItem('uuid');
    alert('OTP verified successfully! Redirecting...');
    window.location.href = '/index.html';
  } else {
    alert('Invalid OTP. Please check and try again.');
  }
});

// Timer + resend
let countdown = 60;
let timer;
function startTimer(seconds) {
  clearInterval(timer);
  countdown = seconds;
  timerEl.innerText = formatTime(countdown);
  resendBtn.disabled = true;
  timer = setInterval(() => {
    countdown--;
    timerEl.innerText = formatTime(countdown);
    if (countdown <= 0) {
      clearInterval(timer);
      resendBtn.disabled = false;
      timerEl.innerText = '';
    }
  }, 1000);
}
function formatTime(s) {
  const m = Math.floor(s/60);
  const sec = s % 60;
  return `${m}:${sec < 10 ? '0' : ''}${sec}`;
}

resendBtn.addEventListener('click', async () => {
  const email = sessionStorage.getItem('signup_email');
  if (!email) {
    alert('No email found. Please signup again.');
    window.location.href = '/HTML/signUp.html';
    return;
  }
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  sessionStorage.setItem('signup_generated_otp', otp);

  try {
    // resend via EmailJS - replace TEMPLATE_ID above as well
    await emailjs.send('e-commerce-project', 'TEMPLATE_ID', { to_email: email, otp });
    alert('OTP resent to ' + email);
    startTimer(60);
  } catch (err) {
    console.error(err);
    alert('Failed to resend OTP. Check console.');
  }
});

// start timer immediately
startTimer(60);
