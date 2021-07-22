const form = document.getElementById("form");
const formControl = document.querySelector(".form-control");
const email = document.querySelector("#email");

const arrowBtn = document.querySelector(".submit-arrow");
const formInput = document.querySelector("input");
//console.log(form);

form.addEventListener("submit", function (e) {
  e.preventDefault;

  checkInputs();
  formInput.value = "";
});

function checkInputs () {
  //get value and remove the whitespace
  const emailValue = email.value.trim();

  if (emailValue === '') {
    setErrorFor(email, 'janesapples ee#email.com')
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Please provide a valid email");
  } else {
    setSuccessFor(email);
  }
};

function setErrorFor (input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
	//add error class
	formControl.className = 'form-control error';
	//add error message inside small
	small.innerText = message;
};






function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};



