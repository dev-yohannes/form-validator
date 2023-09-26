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

const divs = [
  usernameDiv.div,
  emailDiv.div,
  passwordDiv.div,
  confirmPasswordDiv.div,
];

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (allInputs.value === "") {
    removeBorderAddErrorBorder();
    errorText = document.createElement("p");
    errorText.textContent = "hello";
    divs.forEach((div) => {
      div.appendChild(errorText);
    });
  } else {
    removeErrorAddSuccess();
  }
});
