function convertHours() {
  let clock = prompt("Enter 24-hour based number!");
  if (clock == 0 || clock == 24) {
    alert("Time Now is 12 AM");
  } else if (clock > 0 &&  clock < 12) {
    alert(`Time Now is ${clock}AM`);
  } else if (clock == 12) {
    alert(`Time Now is ${clock}PM`);
  } else if (clock > 12 &&  clock < 24) {
    alert(`Time Now is ${clock - 12}PM`);
  } else {
    alert("Invalid Number!!!");
  }
}

convertHours();
