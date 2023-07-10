let age = prompt("Enter your age!!");
while (age) {
  if(!age) break
  if (age < 0) {
    const warning = alert("Invalid Number!! Positive Number Only!!");
  } else if (age >= 1 && age <= 10) {
    alert("Status is Child");
  } else if (age >= 11 && age <= 18) {
    alert("Status is Teenager");
  } else if (age >= 19 && age <= 50) {
    alert("Status is Grown Up");
  }  else {
    alert("Status is Old");
  }
  age = prompt("Enter your age!!");
}
