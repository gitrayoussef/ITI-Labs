const rightIcon = document.querySelector(".right-icon");
const lefttIcon = document.querySelector(".left-icon");
const images = document.querySelectorAll("img");

rightIcon.addEventListener("click", function (e) {
  for (let i = 0; i < images.length; i++) {
    if (images[i + 1].nodeName === "IMG") {
      if (images[i].classList.contains("next")) {
        images[i].classList.remove("next");
        images[i + 1].classList.add("next");
        break;
      }
    } else {
      break;
    }
  }
});

lefttIcon.addEventListener("click", function (e) {
  for (let i = 1; i < images.length; i++) {
    if (images[i - 1].nodeName === "IMG") {
      if (images[i].classList.contains("next")) {
        images[i].classList.remove("next");
        images[i - 1].classList.add("next");
        break;
      }
    } else {
      break;
    }
  }
});
