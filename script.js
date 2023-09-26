const container = document.querySelector(".container");
const usernameDiv = document.querySelector(".username-section");
const emailDiv = document.querySelector(".email-section");
const passwordDiv = document.querySelector(".password-section");
const confirmPasswordDiv = document.querySelector(".confirm-password-section");

const allInputs = document.querySelector(".form-input");
const usernameInput = document.querySelector("#username-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const confirmPasswordInput = document.querySelector("#confirm-password-input");
const submitButton = document.querySelector("#submit");

errorText = document.createElement("p");
errorText.classList.add("error-message");

/*
const removeBorderAddErrorBorder = () => {
  usernameInput.classList.remove("border-class");
  usernameInput.classList.add("error");

  emailInput.classList.remove("border-class");
  emailInput.classList.add("error");

  passwordInput.classList.remove("border-class");
  passwordInput.classList.add("error");

  confirmPasswordInput.classList.remove("border-class");
  confirmPasswordInput.classList.add("error");
};

const removeErrorAddSuccess = () => {
  usernameInput.classList.remove("error");
  usernameInput.classList.add("success");

  emailInput.classList.remove("error");
  emailInput.classList.add("success");

  passwordInput.classList.remove("error");
  passwordInput.classList.add("success");

  confirmPasswordInput.classList.remove("error");
  confirmPasswordInput.classList.add("success");
};
*/

// username validation
usernameInput.addEventListener("keyup", () => {
  const usernameValidator = /^[a-zA-Z]{3,}$/;
  if (usernameValidator.test(usernameInput.value)) {
    usernameInput.classList.remove("border-class");
    usernameInput.classList.add("success");
  } else {
    usernameInput.classList.remove("border-class");
    usernameInput.classList.remove("success");
    usernameInput.classList.add("error");
  }
});

// email validation
emailInput.addEventListener("keyup", () => {
  const emailValidator = /[@.]/;
  if (emailValidator.test(emailInput.value)) {
    emailInput.classList.remove("border-class");
    emailInput.classList.add("success");
  } else {
    emailInput.classList.remove("border-class");
    emailInput.classList.add("error");
  }
});

// password validator
passwordInput.addEventListener("keyup", () => {
  const passwordValidator = /[a-zA-Z0-9]{5,}/;
  if (passwordValidator.test(passwordInput.value)) {
    localStorage.setItem("savedPassword", passwordInput.value);
    passwordInput.classList.remove("border-class");
    passwordInput.classList.add("success");
  } else {
    passwordInput.classList.remove("border-class");
    passwordInput.classList.add("error");
  }
});

confirmPasswordInput.addEventListener("keyup", () => {
  if (confirmPasswordInput.value === localStorage.getItem("savedPassword")) {
    confirmPasswordInput.classList.remove("border-class");
    confirmPasswordInput.classList.add("success");
  } else {
    confirmPasswordInput.classList.remove("border-class");
    confirmPasswordInput.classList.add("error");
  }
});

/*
const divs = [
  usernameDiv.div,
  emailDiv.div,
  passwordDiv.div,
  confirmPasswordDiv.div,
];
*/

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
});
