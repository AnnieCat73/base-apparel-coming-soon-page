const form = document.getElementById('form');
const email = document.getElementById('email');
const input = document.querySelector('input');
const errorIcon = document.querySelector('.error-icon');
const errorMsg = document.querySelector('.form small');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValue = email.value;

  //check if it is a valid emailand empty space 
  if (!validateEmail(emailValue)) {
    form.classList.remove('success');
    errorIcon.style.visibility = 'visible';
    errorMsg.style.visibility = 'visible';
    input.style.border = '2px solid #F96464';
  } else {
    errorIcon.style.visibility = 'hidden';
    errorMsg.style.visibility = 'hidden';
    input.style.border = '1px solid #CE9898';
  }
});

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};




