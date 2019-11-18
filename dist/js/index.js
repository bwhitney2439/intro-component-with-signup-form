var email = document.getElementById("mail");

email.addEventListener("input", function(event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I expect an e-mail, darling!");
  } else {
    email.setCustomValidity("");
  }
});

FormValidation = () => {
  const firstName = document.forms["Form"]["firstname"];
  let firstNameError = document.getElementById("first-name-error");
  if (firstName.value == null || firstName == "") {
    firstNameError.innerHTML = "Please enter a First Name";
    firstName.className = "error";
    firstName.focus();
  } else {
    firstName.focus();
    firstNameError.innerHTML = "";
    firstName.className = "";
  }

  const lastName = document.forms["Form"]["lastname"].value;
  if (lastName == null || lastName == "") {
    alert("Name must be filled out");
    return false;
  }

  const email = document.forms["Form"]["email"].value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email == null || email == "") {
    alert("Name must be filled out");
    return false;
  } else if (email.match(mailformat)) {
    inputText.focus();
    error.innerHTML = "";
    inputText.className = "";
  } else {
    error.innerHTML = "Please provide a valid email";
    inputText.className = "error";
    inputText.focus();
  }

  const password = document.forms["myForm"]["password"].value;
  if (password == null || password == "") {
    alert("Password name must be filled out");
    return false;
  }
};

var el = document.getElementById(id);
if (el.value == 0) {
  // do bad stuff
  // ...
  return false;
}
// otherwise allow form to be submitted
return true;

inputText = document.getElementById("email");
error = document.getElementById("email-error-messsage");

if (inputText.value.match(mailformat)) {
  inputText.focus();
  error.innerHTML = "";
  inputText.className = "";
} else {
  error.innerHTML = "Please provide a valid email";
  inputText.className = "error";
  inputText.focus();
}
