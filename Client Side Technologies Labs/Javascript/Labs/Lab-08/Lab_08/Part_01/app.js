let username = document.querySelector(".username");
let password = document.querySelector(".password");
let verify = document.createElement("div");
let exit = document.createElement("button");
let verifyText = document.createElement("p");
let form = document.querySelector(".form_container");
let loginButton = document.querySelector(".login-button");

// ************CREATE VERIFY BOX FOR VERIFING USER INPUTS************

window.history.replaceState({}, document.title, window.location.pathname);

window.addEventListener("load", function (e) {
  username.focus();
});

username.addEventListener("blur", function (e) {
  password.focus();
});

username.addEventListener("input", function (e) {
  if (username.value.length < 3) {
    verifyText.textContent = "Length shouldn't be less than 3 characters";
    createVerifyBox();
    username.after(verify);
    loginButton.setAttribute("disabled", "");
  } else {
    verify.style.setProperty("display", "none");
    loginButton.removeAttribute("disabled", "");
  }
});

password.addEventListener("input", function (e) {
  verifyPassword(password.value);
});

form.addEventListener("submit", function (e) {
  form.setAttribute("action", "./authenticated.html");
});

exit.addEventListener("click", function (e) {
  e.preventDefault();
  verify.style.setProperty("display", "none");
});

function createVerifyBox() {
  exit.textContent = "x";
  exit.classList.add("exit-box");
  verify.classList.add("verify");
  verify.append(verifyText, exit);
  verify.style.setProperty("display", "flex");
}

function verifyPassword(value) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/g;
  if (!regex.test(value)) {
    verifyText.textContent =
      "Password must contains at least one capital letter , small letter , digit & not less than 8 characcters";
    loginButton.setAttribute("disabled", "");
    createVerifyBox();
    password.after(verify);
  } else {
    loginButton.removeAttribute("disabled", "");
    verify.style.setProperty("display", "none");
  }
}
