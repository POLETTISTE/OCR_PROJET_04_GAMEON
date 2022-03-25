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
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthDateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const location1Input = document.getElementById("location1");
const location2Input = document.getElementById("location2");
const location3Input = document.getElementById("location3");
const location4Input = document.getElementById("location4");
const location5Input = document.getElementById("location5");
const location6Input = document.getElementById("location6");
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.forEach((span) => span.addEventListener("click", closeModal));
formValidate.forEach((btn) => btn.addEventListener("click", validate));


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
};

//clear fields
function resetFields() {
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  birthDateInput.value = "";
  quantityInput.value = "";
  location1Input.checked = true;
  location2Input.checked = false;
  location3Input.checked = false;
  location4Input.checked = false;
  location5Input.checked = false;
  location6Input.checked = false;
  checkbox1.checked = false;
  checkbox2.checked = false;
};

// close modal form
function closeModal() {
  resetFields();
  modalbg.style.display = "none";
};



// form validate
function validate() {
alert('formulaire valide');
}


// firstName Validation
firstNameInput.addEventListener("change", function () {
  first = firstNameInput;
  first.setCustomValidity;
  if (first.value.length < 1) {
    first.insertAdjacentHTML('afterend', '<p>champ requis</p>');
  }
    else if(first.value.length < 2) {
      first.insertAdjacentHTML('afterend', '<p>champs de moins de 2 caractères !</p>');
    
    }else{
      first.Innerhtml = "<p>CHAMP VALIDE</p>"
  console.log('le champ firstName est valide !');
  }
});

// lastname validation


//email valid ?
emailInput.addEventListener("change", function(e) {
  if (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(e.value)) {
    alert("valid email address!");
    return (true);

  }else{
    alert("You have entered an invalid email address!")
    return (false);
  }
})
