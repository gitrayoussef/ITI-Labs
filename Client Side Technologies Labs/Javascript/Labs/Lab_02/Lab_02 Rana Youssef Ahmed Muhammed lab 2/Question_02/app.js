const userString = prompt("Enter a String!!");
const arr = new Array();
for (let i = 0; i < userString.length; i++) {
  let char = userString[i].toLowerCase();
  switch (char) {
    case "a":
      arr.push(char);
      break;
    case "e":
      arr.push(char);
      break;
    case "o":
      arr.push(char);
      break;
    case "u":
      arr.push(char);
      break;
    case "i":
      arr.push(char);
      break;
    default:
      break;
  }
}

console.log(arr.length)