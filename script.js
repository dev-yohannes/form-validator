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

// validations
const usernameValidator = /^[a-zA-Z]{3,}$/;
const emailValidator = /[@.]/;
const passwordValidator = /[a-zA-Z0-9]{5,}/;

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  //
  // username validation
  const usernameKeyup = usernameInput.addEventListener("keyup", () => {
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
  const emailKeyup = emailInput.addEventListener("keyup", () => {
    if (emailValidator.test(emailInput.value)) {
      emailInput.classList.remove("border-class");
      emailInput.classList.add("success");
    } else {
      emailInput.classList.remove("border-class");
      emailInput.classList.add("error");
    }
  });

  // password validator
  const passwordKeyup = passwordInput.addEventListener("keyup", () => {
    if (passwordValidator.test(passwordInput.value)) {
      localStorage.setItem("savedPassword", passwordInput.value);
      passwordInput.classList.remove("border-class");
      passwordInput.classList.add("success");
    } else {
      passwordInput.classList.remove("border-class");
      passwordInput.classList.add("error");
    }
  });

  const confirmPasswordKeyup = confirmPasswordInput.addEventListener(
    "keyup",
    () => {
      if (
        confirmPasswordInput.value === localStorage.getItem("savedPassword")
      ) {
        confirmPasswordInput.classList.remove("border-class");
        confirmPasswordInput.classList.add("success");
      } else {
        confirmPasswordInput.classList.remove("border-class");
        confirmPasswordInput.classList.add("error");
      }
    }
  );
  //

  if ((usernameKeyup, emailKeyup, passwordKeyup, confirmPasswordKeyup)) {
    alert("Thank you for registering");
    usernameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
    confirmPasswordInput.value = "";
  } else {
    usernameInput.classList.remove("border-class");
    usernameInput.classList.remove("success");
    usernameInput.classList.add("error");

    emailInput.classList.remove("border-class");
    emailInput.classList.add("error");

    passwordInput.classList.remove("border-class");
    passwordInput.classList.add("error");

    confirmPasswordInput.classList.remove("border-class");
    confirmPasswordInput.classList.add("error");
  }
});
