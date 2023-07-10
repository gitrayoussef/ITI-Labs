var contacts = new Array();
var result = " ";

do {
  var operation = prompt("Do you want to add or search contact?!");
  if (!operation) break;
  phoneBook(search, add, operation);
} while (!NaN);

function search(userName, userphone) {
  let name = "";
  let phone = "";
  for (let i = 0; i < contacts.length; i++) {
    name = contacts[i].name;
    phone = contacts[i].phone;
    if (name === userName && phone === userphone) {
      result = alert(`Name: ${name} ,Phone: ${phone}`);
      break
    }
  }
  if (name !== userName && phone !== userphone) {
    result = alert(`Contact not found`);
  }
}

function add(userName, userphone) {
  let contact = new Object();
  contact.name = userName;
  contact.phone = userphone;
  contacts.push(contact);
}

function phoneBook(search, add, operation) {
  if (operation === "add") {
    let userName = prompt("Please enter a name");
    let userphone = prompt("Please enter a phone number");
    add(userName, userphone);
    result = alert("Your contact was added to phone book successfully");
  } else if (operation === "search") {
    let userName = prompt("Please enter a name");
    let userphone = prompt("Please enter a phone number");
    search(userName, userphone);
  } else {
    result = alert("OOPS , Operation not valid!!!");
  }
}
