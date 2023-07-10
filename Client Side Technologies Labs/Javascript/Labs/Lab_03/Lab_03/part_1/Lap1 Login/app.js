const username = prompt("Enter your username ..");
const password = prompt("Enter your password ..");
function validateUser(username, password) {
  if (username === "admin" && password === "421$$") {
    alert("Welcome login success");
  } else {
    username !== "admin" 
      ? alert("Incorrect Username")
      : alert("Incorrect Password");
  }
}
validateUser(username, password);
