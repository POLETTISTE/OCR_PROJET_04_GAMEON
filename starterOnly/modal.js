function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelectorAll(".close");
const formValidate = document.querySelectorAll(".btn-submit");

const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");

//ERRORS
const firstNameError = document.getElementById("data-first");
const lastNameError = document.getElementById("data-last");
const emailError = document.getElementById("data-email");
const birthDateError = document.getElementById("data-birthdate");
const quantityError = document.getElementById("data-quantity");
const locationError = document.querySelectorAll('input[value][type="radio"]');
const checkboxError = document.getElementById('checkbox1');

//VALIDITY
let firstNameValidity = "false";
let lastNameValidity = "false";
let emailValidity = "false";
let birthDateValidity = "false";
let quantityValidity = "false";
let locationValidity = "false";
let checkboxvalidity = "false";

//REGEX
const emailRegex = /[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/;
const birthDateRegex = /^[0-9]{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])/;

// LAUNCH MODAL EVENTS
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.forEach((span) => span.addEventListener("click", closeModal));
formValidate.forEach((btn) => btn.addEventListener("click", validate));


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
};

//clear fields
function resetFields() {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  birthDate.value = "";
  quantity.value = "";
  location1.checked = true;
  location2.checked = false;
  location3.checked = false;
  location4.checked = false;
  location5.checked = false;
  location6.checked = false;
  checkbox1.checked = false;
  checkbox2.checked = false;
};

// close modal form
function closeModal() {
  resetFields();
  modalbg.style.display = "none";
};


// form validate si tous les champs sont valides alors ca submit sinon ca reste
function validate() {
  // si toutes les conditions de validity sont true alors enable btn sinon disable
alert('formulaire valide');
}

// firstName Validation
firstName.addEventListener('change', function(e) {
  let value = e.target.value;
  if (value===""){
    let message = "champ obligatoire";
    this.classList.add('invalid');
    this.classList.remove('valid');
    firstNameError.innerText = message;
    firstNameValidity = 'false';
  }
  else if (value.length < 2) {
    let message = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    this.classList.add('invalid');
    this.classList.remove('valid');
    firstNameError.innerText = message;
    firstNameValidity = 'false';

  } else {
    let message = "";
    this.classList.remove('invalid');
    this.classList.add('valid');
    firstNameError.innerText = message;
    firstNameValidity = 'true';
  }
});


// lastname validation
lastName.addEventListener('change', function(e) {
  let value = e.target.value;
  if (value===""){
    let message = "champ obligatoire";
    this.classList.add('invalid');
    this.classList.remove('valid');
    lastNameError.innerText = message;
    lastNameValidity = 'false';

  }
  else if (value.length < 2) {
    let message = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    this.classList.add('invalid');
    this.classList.remove('valid');
    lastNameError.innerText = message;
    lastNameValidity = 'false';

  } else {
    let message = "";
    this.classList.remove('invalid');
    this.classList.add('valid');
    lastNameError.innerText = message;
    lastNameValidity = 'true';
  }
});


//  email validation
email.addEventListener('change', function(e) {
  let value = e.target.value;
  let message=""
  if (value===""){
    message = "champ obligatoire";
    emailValidity = 'false';
    this.classList.add('invalid');
    this.classList.remove('valid');
    emailError.innerText = message;
  }
  else if (emailRegex.test(value)) {
    message = "";
    emailValidity = 'true';
    this.classList.add('valid');
    this.classList.remove('invalid');
    emailError.innerText = message;
  }else{
    message = "mauvais format de mail";
    emailValidity = 'false';
    this.classList.add('invalid');
    this.classList.remove('valid');
    emailError.innerText = message;
  }
})


//  birthdate validation
birthDate.addEventListener('change', function(e) {
  let value = e.target.value;
  let message="";
  if (value===""){
    birthDateValidity = 'false';
    message = "champ obligatoire";
    this.classList.add('invalid');
    this.classList.remove('valid');
    birthNameError.innerText = message;
  }
  else if (birthDateRegex.test(value)) {
    birthDateValidity = 'true';
    // message="VALIDE"
    this.classList.add('valid');
    this.classList.remove('invalid');
    birthDateError.innerText = message;
  }else{
    birthDateValidity = 'false';
    message="NON VALIDE";
    this.classList.add('invalid');
    this.classList.remove('valid');
    birthDateError.innerText = message;
  }
});

// quantity validation NAN

