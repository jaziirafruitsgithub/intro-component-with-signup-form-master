const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstname = fname.value.trim();
  const lastname = lname.value.trim();
  const emailvalue = email.value.trim();
  const passwordvalue = password.value.trim();

  if (firstname === "") {
    errorFunc(fname, "First Name is requird");
  } else {
    successFunc(fname);
  }

  if (lastname === "") {
    errorFunc(lname, "Last Name is requird");
  } else {
    successFunc(lname);
  }

  if (emailvalue === "") {
    errorFunc(email, "Email Address is requird");
  } else if (!isValid(emailvalue)) {
    errorFunc(email, "Email Is Not Valid");
  } else {
    successFunc(email);
  }

  if (passwordvalue === "") {
    errorFunc(password, "Password is requird");
  } else {
    successFunc(password);
  }
});
// Error Function
function errorFunc(requiredField, errorMessage) {
  const formcontrol = requiredField.parentElement;
  formcontrol.classList.add("error");
  const small = formcontrol.querySelector("small"); // this will return The first descendant element(span) of baseElement(requiredField.parentElement) which matches the specified group of selectors
  small.innerText = errorMessage;
}

// Success Function
function successFunc(requiredField) {
  const formcontrol = requiredField.parentElement;
  formcontrol.classList.remove("error");
}

// Email Validation Check

function isValid(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
