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

// usernameInput.addEventListener("keyup", () => {
//   usernameValidator = /[a-z0-9]{5,15}/;
//   if (usernameValidator.test(usernameInput.value)) {
//     usernameInput.classList.remove("border-class");
//     usernameInput.classList.add("success");
//   } else {
//     usernameInput.classList.remove("border-class", "success");
//     usernameInput.classList.add("error");
//   }
// });

// emailInput.addEventListener("keyup", () => {
//   emailInputValidator = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
//   if (emailInputValidator.test(emailInput.value)) {
//     emailInput.classList.remove("border-class");
//     emailInput.classList.add("success");
//   } else {
//     emailInput.classList.remove("border-class", "success");
//     emailInput.classList.add("error");
//   }
// });

// passwordInput.addEventListener("keyup", () => {
//   passwordValidator = /[a-zA-Z@#$%^&*_-]{5,}/g;
//   if (passwordValidator.test(passwordInput.value)) {
//     passwordInput.classList.remove("border-class");
//     passwordInput.classList.add("success");
//     localStorage.setItem("savedPassword", passwordInput.value);
//   } else {
//     passwordInput.classList.remove("border-class", "success");
//     passwordInput.classList.add("error");
//   }
// });

// confirmPasswordInput.addEventListener("keyup", () => {
//   if (confirmPasswordInput.value === localStorage.getItem("savedPassword")) {
//     confirmPasswordInput.classList.remove("border-class");
//     confirmPasswordInput.classList.add("success");
//   } else {
//     confirmPasswordInput.classList.remove("border-class", "success");
//     confirmPasswordInput.classList.add("error");
//   }
// });
