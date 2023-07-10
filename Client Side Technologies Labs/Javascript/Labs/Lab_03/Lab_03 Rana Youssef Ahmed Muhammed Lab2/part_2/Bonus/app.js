let shapeName = " ";
do {
  shapeName = prompt(
    "What shape you want to calculate its area?!"
  ).toLowerCase();
  let result = "";
  if (!shapeName) break;
  calculate(shapeName);
} while (shapeName);

function circle() {
  let r = parseFloat(prompt("Enter radius of the circle!"));
  result = alert(` Area = ${(Math.PI * Math.sqrt(r)).toPrecision(3)}`);
}

function triangle() {
  let b = parseFloat(prompt("Enter base of the triangle!"));
  let h = parseFloat(prompt("Enter height of the triangle!"));
  result = alert(`Area = ${(0.5 * b * h).toPrecision(3)}`);
}

function square() {
  let a = parseFloat(prompt("Enter length of the square!"));
  result = alert(`Area = ${(a * a).toPrecision(3)}`);
}

function rectangle() {
  let l = parseFloat(prompt("Enter length of the rectangle!"));
  let w = parseFloat(prompt("Enter width of the rectangle!"));
  result = alert(`Area = ${(l * w).toPrecision(3)}`);
}

function parallelogram() {
  let b = parseFloat(prompt("Enter base of the parallelogram!"));
  let h = parseFloat(prompt("Enter vertical height of the parallelogram!"));
  result = alert(`Area = ${(b * h).toPrecision(3)}`);
}

function trapezium() {
  let a = parseFloat(prompt("Enter first length of the trapezium!"));
  let b = parseFloat(prompt("Enter second length of the trapezium!"));
  let h = parseFloat(prompt("Enter height of the trapezium!"));
  result = alert(`Area = ${(0.5 * (a + b) * h).toPrecision(3)}`);
}

function ellipse() {
  let a = parseFloat(prompt("Enter half minor axis of the ellipse!"));
  let b = parseFloat(prompt("Enter half major axis of the ellipse!"));
  result = alert(`Area = ${(Math.PI * a * b).toPrecision(3)}`);
}

function calculate(shapeName) {
  switch (shapeName) {
    case "circle":
      circle();
      break;
    case "triangle":
      triangle();
      break;
    case "square":
      square();
      break;
    case "rectangle":
      rectangle();
      break;
    case "parallelogram":
      parallelogram();
      break;
    case "trapezium":
      trapezium();
      break;
    case "ellipse":
      ellipse();
      break;
    default:
      result = alert("Oops, Shape isn't valid");
      break;
  }
}
