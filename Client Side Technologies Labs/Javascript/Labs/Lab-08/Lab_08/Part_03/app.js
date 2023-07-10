async function getData(url) {
  const myReq = await fetch(url);
  const reponse = await myReq.json();
  const data = reponse.data;
  for (let i = 0; i < data.length; i++) {
    const body = document.querySelector("body");
    const cardContainer = document.createElement("div");
    const imgContainer = document.createElement("img");
    imgContainer.setAttribute("src", data[i].avatar);
    cardContainer.appendChild(imgContainer);
    const textContainer = document.createTextNode(data[i].email);
    cardContainer.appendChild(textContainer);
    body.appendChild(cardContainer);
    cardContainer.classList.add("card-container");
    imgContainer.classList.add("image-container");
  }
}

getData("https://reqres.in/api/users?page=2");
