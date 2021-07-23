//NEED MORE WORK Either this 1 or

/*const form = document.getElementById("form");
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
}*/

// 2
const form = document.getElementById("form");
const formControl = document.querySelector(".form-control");
const email = document.querySelector(".email");
const error = document.querySelector(".error");
console.log(error);
const errorImg = document.querySelector(".error_img");
console.log(errorImg);
const arrowBtn = document.querySelector(".submit-arrow");
const formInput = document.querySelector("input");
//console.log(form);

form.addEventListener("submit", function (e) {
  //console.log(e);
  e.preventDefault;

  checkInputs();
});

function checkInputs () {
  //get value and remove the whitespace
  const emailValue = email.value.trim();
  const reg = '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)';
  if (emailValue === '') {
    error.innerHTML = "Please provide a valid email";
    errorImg.style.visibility = "visible";
  } else if (emailValue.includes(reg)) {
    error.innerHTML = "Please provide a valid email";
    email.classList.add("invalid");
    
  } else {
    error.innerHTML = "";
    email.classList.remove("invalid");
    errorImg.style.visibility ="hidden";
  }
};

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};




