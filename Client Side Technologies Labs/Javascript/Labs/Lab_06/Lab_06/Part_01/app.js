let username = document.querySelector(".username");
let password = document.querySelector(".password");
let verify = document.createElement("div");
let exit = document.createElement("button");
let verifyText = document.createElement("p");
let form = document.querySelector(".form_container");

// ************CREATE VERIFY BOX FOR VERIFING USER INPUTS************
function createVerifyBox() {
  exit.textContent = "x";
  exit.classList.add("exit-box");
  verify.classList.add("verify");
  verify.append(verifyText, exit);
  verify.style.setProperty("display", "flex");
}

exit.addEventListener("click", function (e) {
  e.preventDefault();
  verify.style.setProperty("display", "none");
});

username.addEventListener("input", function (e) {
  if (username.value.length < 3) {
    verifyText.textContent = "Length shouldn't be less than 3 characters";
    createVerifyBox();
    username.after(verify);
  } else {
    verify.style.setProperty("display", "none");
  }
});

password.addEventListener("input", function (e) {
  if (password.value.length < 3) {
    verifyText.textContent = "Password shouldn't be less than 3 characters";
    createVerifyBox();
    password.after(verify);
  } else {
    verify.style.setProperty("display", "none");
  }
});

// ************SHOW MESSAGE IF INPUTS NAME NOT EQUAL TO ADMIN & PASSWORD NOT 123************

window.addEventListener('load' , function(e) {
  username.focus()
})

username.addEventListener('blur' , function(e) {
  password.focus()
})

form.addEventListener("submit", function (e) {
  if (username.value.toLowerCase() === "username"  &&  password.value === '123') {
    form.setAttribute("action", "./authenticated.html");
  } else {
    form.setAttribute("action", "./notAuthenticated.html");
  }
});
