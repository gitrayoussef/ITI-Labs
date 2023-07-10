let resArr = new Array(0);
let x = 1

do {
  let firstNum = parseFloat(prompt("Enter first number!", resArr.pop()));
  if(!firstNum) break
  let operation = prompt("Enter an operation!");
  if(!operation) break
  let secondNum = parseFloat(prompt("Enter second number!"));
  if(!secondNum) break
  calculator(firstNum, operation, secondNum);
} while ( x === 1);


function calculator(firstNum, operation, secondNum) {
  let res = "";
  switch (operation) {
    case "+":
      res = firstNum + secondNum;
      alert(`The result is ${res}`);
      resArr.push(res);
      break;
    case "*":
      res = firstNum * secondNum;
      alert(`The result is ${res}`);
      resArr.push(res);
      break;
    case "-":
      res = firstNum - secondNum;
      alert(`The result is ${res}`);
      resArr.push(res);
      break;
    case "/":
      res = firstNum / secondNum;
      alert(`The result is ${res}`);
      resArr.push(res);
      break;
    case "%":
      res = firstNum % secondNum;
      alert(`The result is ${res}`);
      resArr.push(res);
      break;

    default:
      break;
  }
}
