window.addEventListener("load", function (e) {
  const params = new URL(this.document.location).searchParams;
  let username = params.get("user_info[username]");
  let password = params.get("user_info[password]");
  document.querySelector(".heading").textContent += username ;
  document.querySelector(".author").textContent += username;
  document.querySelector(".author-password").textContent = password;
});
