let sumCount = 0;
const numArr = new Array();
let result = 0;

function sum(numArr) {
  var sum = 0;
  var init = 0;
  numArr.forEach((element) => {
    sum = init + element;
    init = sum;
  });
  return sum;
}

function average(numArr) {
  var sum = 0;
  var init = 0;
  var average = 0;
  numArr.forEach((element) => {
    sum = init + element;
    init = sum;
  });
  average = sum / numArr.length;
  return average;
}

function calculator(sum, average, numArr) {
  do {
    sumCount = parseInt(prompt("How many numbers to sum?!!"));
    if (!sumCount) break;
    for (let i = 0; i < sumCount; i++) {
      const userInput = parseFloat(prompt("Enter a number !!"));
      if (!userInput) break;
      numArr[i] = userInput;
    }
    result = alert(`Sum = ${sum(numArr)} & Average = ${average(numArr)}`);
  } while (sumCount);
}

calculator(sum, average, numArr);
