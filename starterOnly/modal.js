function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM ELEMENTS

// API allowing programs to read and manipulate page content, structure and styles
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const reserve = document.getElementById("reserve");
const thanks = document.getElementById("thanks");
const confirm = document.querySelector(".confirm");
const modalClose = document.querySelectorAll(".close");
const btnClose = document.querySelectorAll(".btn-close");
const formValidate = document.querySelectorAll(".btn-submit");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const locations = document.querySelectorAll('input[name=location]');
const cgu = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");

// DOM ELEMENTS ERRORS
const firstNameError = document.getElementById("data-first");
const lastNameError = document.getElementById("data-last");
const emailError = document.getElementById("data-email");
const birthDateError = document.getElementById("data-birthdate");
const quantityError = document.getElementById("data-quantity");
const locationError = document.getElementById("data-location");
const cguError = document.getElementById('data-checkbox1');

// REGEX
// Verify if email and birthdate are written in the right way

const emailRegex = /[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/;
const birthDateRegex = /^[0-9]{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])/;

//  MODAL EVENTS

// Launch Modal Form
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close Modal Form
modalClose.forEach((span) => span.addEventListener("click", closeModal));

// Button close after message "Merci pour votre inscription"
btnClose.forEach((span) => span.addEventListener("click", closeBtn));

// Button submit form - verify if all fiels are corrects and validate
formValidate.forEach((btn) => btn.addEventListener("click", validate));


// FUNCTIONS

// Launch Modal Form
function launchModal() {
  modalbg.style.display = "block";
  thanks.style.display = "none";
};

// Close Modal Form
function closeModal() {
  modalbg.style.display = "none";
  thanks.style.display = "none";
  reserve.style.display = "block";
};

// Launch Thanks Message
function launchThanksMessage() {
  reserve.style.display = "none";
  thanks.style.display = "block";
};

// Close Thanks Message
function closeBtn() {
  modalbg.style.display = "none";
  thanks.style.display = "none";
  reserve.style.display = "block";
}

//Clear Fields after Validate
function resetFields() {
  document.querySelector("form").reset();
  document.getElementById("first").classList.remove('valid');
  document.getElementById("last").classList.remove('valid');
  document.getElementById("email").classList.remove('valid');
  document.getElementById("birthdate").classList.remove('valid');
  document.getElementById("quantity").classList.remove('valid');
};



// FORM FIELDS VALIDATION

// firstName Validation
// Listening on the DOM elements line 21 and call the function line 106 when form field change
firstName.addEventListener('change',firstNameValidity);

function firstNameValidity() {
  //we define empty variable message 
  let message="";
  // we want to access to the value of the Dom element firstName
  let target = document.getElementById('first');
  // we assign this value to the variable target
  let value = target.value;
  // we code conditions if/else to verify validity is true or false
  if (value==="" || value.length < 2){
    message = value === "" ? 'champ obligatoire' : 'Veuillez entrer 2 caractères ou plus pour le champ du prénom';
    //add class invalid to display css and error message - This field returns false
    target.classList.add('invalid');
    target.classList.remove('valid');
    firstNameError.innerText = message;
    return false;
  } else {
    // remove class invalid and add class valid - This field returns true
    target.classList.remove('invalid');
    target.classList.add('valid');
    firstNameError.innerText = message;
    return true;
  }
};

// lastName validation
lastName.addEventListener('change',lastNameValidity );

function lastNameValidity() {
  let message="";
  let target = document.getElementById('last');
  let value = target.value;
  if (value==="" || value.length < 2){
    message = value === "" ? 'champ obligatoire' : 'Veuillez entrer 2 caractères ou plus pour le champ du prénom';
    target.classList.add('invalid');
    target.classList.remove('valid');
    lastNameError.innerText = message;
    return false;
  } else {
    target.classList.remove('invalid');
    target.classList.add('valid');
    lastNameError.innerText = message;
    return true;
  }
};


//  email Validation
email.addEventListener('change',emailValidity );

function emailValidity() {
  let message = "";
  let target = document.getElementById('email');
  let value = target.value;
  // We verify is the mail has the correct format thanks to the regex
  if (value==="" || !(emailRegex.test(value))){
    message = value === "" ? 'champ obligatoire' : 'mauvais format de mail';
    target.classList.add('invalid');
    target.classList.remove('valid');
    emailError.innerText = message;
     return false;
  } else {
    target.classList.remove('invalid');
    target.classList.add('valid');
    emailError.innerText = message;
    return true;
  }
};


//  birthdate Validation
birthDate.addEventListener('change',birthDateValidity );

function birthDateValidity() {
  let message = "";
  let target = document.getElementById('birthdate');
  let value = target.value;
    // We verify is the birthdate has the correct format thanks to the regex
  if (value==="" || !(birthDateRegex.test(value))){
    message = value === "" ? 'champ obligatoire' : 'Vous devez entrer votre date de naissance.';
    target.classList.add('invalid');
    target.classList.remove('valid');
    birthDateError.innerText = message;
     return false;
  } else {
    target.classList.remove('invalid');
    target.classList.add('valid');
    birthDateError.innerText = message;
    return true;
  }
};


// quantity Validation
quantity.addEventListener('change', quantityValidity)

  function quantityValidity() {
    let message = "";
    let target = document.getElementById('quantity');
    let value = target.value;
    if (value==="" || value<0){
      message = value === "" ? "champ obligatoire" : " quantité négative non autorisée";
      target.classList.add('invalid');
      target.classList.remove('valid');
      quantityError.innerText = message;
       return false;
    } else {
      target.classList.remove('invalid');
      target.classList.add('valid');
      quantityError.innerText = message;
      return true;
    }
  };

//location Validation
function locationValidity(){

    let checked=false;
    document.querySelectorAll('input[name=location]').forEach((location) => {
      if (location.checked) {
        checked = true;
      }
    })

    if (!checked) {
      locationError.innerText = 'Vous devez choisir une ville';
    }
    return checked;
  }

//conditions Validation
cgu.addEventListener('change', cguValidity)

function cguValidity() {
  let checked=false;
  if (cgu.checked) {
    checked = true;
    cguError.innerText = '';
  }else{
    checked=false;
    cguError.innerText = 'Vous devez vérifier que vous acceptez les termes et conditions.';
  }
  return checked;
}

// FORM VALIDATION

//if all fields are true, it validates the form.
//fields are reseted
//function launchThanks Message line 75 is called
function validate(e) {
  e.preventDefault();
  if(firstNameValidity() && lastNameValidity() && emailValidity() && birthDateValidity() && locationValidity() && cguValidity()) {
    resetFields();   
    launchThanksMessage();
  }
}
