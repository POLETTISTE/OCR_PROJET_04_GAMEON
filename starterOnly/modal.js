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

//ERRORS
const firstNameError = document.getElementById("data-first");
const lastNameError = document.getElementById("data-last");
const emailError = document.getElementById("data-email");
const birthDateError = document.getElementById("data-birthdate");
const quantityError = document.getElementById("data-quantity");
const locationError = document.getElementById("data-location");
const cguError = document.getElementById('data-checkbox1');

//REGEX
const emailRegex = /[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/;
const birthDateRegex = /^[0-9]{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])/;

// LAUNCH MODAL EVENTS
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.forEach((span) => span.addEventListener("click", closeModal));
btnClose.forEach((span) => span.addEventListener("click", closeBtn));
formValidate.forEach((btn) => btn.addEventListener("click", validate));


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  thanks.style.display = "none";
};

// launch thanks message
function launchThanksMessage() {
  reserve.style.display = "none";
  thanks.style.display = "block";
};

//clear fields
function resetFields() {
  document.querySelector("form").reset();
  // firstName.value = "";
  // lastName.value = "";
  // email.value = "";
  // birthDate.value = "";
  // quantity.value = "";
  // location1.checked = true;
  // location2.checked = false;
  // location3.checked = false;
  // location4.checked = false;
  // location5.checked = false;
  // location6.checked = false;
  // checkbox1.checked = false;
  // checkbox2.checked = false;
};

// close modal form
function closeModal() {
  modalbg.style.display = "none";
};

// close thanks message
function closeBtn() {
  modalbg.style.display = "none";
  window.location.reload();


}


// firstName Validation

firstName.addEventListener('change',firstNameValidity);

function firstNameValidity() {
  let message="";
  let target = document.getElementById('first');
  let value = target.value;
  if (value==="" || value.length < 2){
    message = value === "" ? 'champ obligatoire' : 'Veuillez entrer 2 caractères ou plus pour le champ du prénom';
    target.classList.add('invalid');
    target.classList.remove('valid');
    firstNameError.innerText = message;
    return false;
  } else {
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


//  email validation
email.addEventListener('change',emailValidity );

function emailValidity() {
  let message = "";
  let target = document.getElementById('email');
  let value = target.value;
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


//  birthdate validation
birthDate.addEventListener('change',birthDateValidity );

function birthDateValidity() {
  let message = "";
  let target = document.getElementById('birthdate');
  let value = target.value;
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


// quantity validation
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

//LOCATION
//  let locationValidity = () => {
//   return true;
//  } 

  locations.forEach((location) => {
  location.addEventListener('change', function() {
    let checked=false;

    document.querySelectorAll('input[name=location]').forEach((location) => {
      if (location.checked) {
        checked = true;
        this.classList.add('valid');
        this.classList.remove('invalid');
        // locationValidity = () => {
        //   return true;
        // }
      }
    })

    if (!checked) {
      this.classList.add('invalid');
      this.classList.remove('valid');
      locationError.innerText = 'Vous devez choisir une ville';
      // locationValidity = () => {
      //   return false;
      // }
    }
    return checked;
  });
});

//conditions utilisation
cgu.addEventListener('change', cguValidity)

function cguValidity() {
  let checked=false;
  let target = document.getElementById('checkbox1');
  if (cgu.checked) {
    checked = true;
    target.classList.add('valid');
    target.classList.remove('invalid');
    cguError.innerText = '';
  }else{
    checked=false;
    target.classList.add('invalid');
    target.classList.remove('valid');
    cguError.innerText = 'Vous devez vérifier que vous acceptez les termes et conditions.';
  }
  return checked;
}

// FORM VALIDATION
// manque la validation de locationValidity
function validate(e) {
  if(firstNameValidity() && lastNameValidity() && emailValidity() && birthDateValidity() && cguValidity()) {
    // e.preventDefault();
    resetFields();   
    launchThanksMessage();
  }
}
