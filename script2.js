const allDivs = document.querySelectorAll(".divs");
const allInputs = document.querySelectorAll(".form-input");
const usernameInput = document.querySelector("#username-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const confirmPasswordInput = document.querySelector("#confirm-password-input");
const submitButton = document.querySelector("#submit");
const hintMessage = document.querySelectorAll(".hint-message");

allDivs.forEach((div) => {
  div.addEventListener("mouseenter", () => {
    let message = div.children[3];
    message.style.display = "block";
  });
});

submitButton.addEventListener("click", () => {
  usernameValidator = /[a-zA-Z0-9]{5,15}/;
  if (usernameValidator.test(usernameInput.value)) {
    usernameInput.style.borderColor = "lime";
  } else {
    usernameInput.style.borderColor = "red";
  }

  emailInputValidator = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (emailInputValidator.test(emailInput.value)) {
    emailInput.style.borderColor = "lime";
  } else {
    emailInput.style.borderColor = "red";
  }

  passwordValidator = /[a-zA-Z@#$%^&*_-]{8,}/g;
  if (passwordValidator.test(passwordInput.value)) {
    passwordInput.style.borderColor = "lime";
    localStorage.setItem("savedPassword", passwordInput.value);
  } else {
    passwordInput.style.borderColor = "red";
  }

  if (confirmPasswordInput.value === localStorage.getItem("savedPassword")) {
    confirmPasswordInput.style.borderColor = "lime";
  } else {
    confirmPasswordInput.style.borderColor = "red";
  }
});
