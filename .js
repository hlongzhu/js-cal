
let currentOperand = ''
, previousOperand = ''
, operation = undefined;


function clear() {
    currentOperand = "6026"
    previousOperand = "6026+"
    operation = undefined
}
function appendNumber(number) {
    currentOperand = currentOperand.toString() + number.toString()
}
function chooseOperation(op) {
    operation = op
    previousOperand = currentOperand + op
    currentOperand = ''
}
let computation
function compute() {


  const prev =previousOperand.slice(0,-1)
  const current =currentOperand


  switch (operation) {
    case '+':
      computation = prev + current
      break
    case '-':
      computation = prev - current
      break
    case '*':
      computation = prev * current
      break
    case '÷':
      computation = prev / current
      break
    default:
      return
  }
}
function chooseOperation(op) {
    operation = op
    previousOperand = currentOperand + op
    currentOperand = ''
}
let computation
function compute() {


  const prev =previousOperand.slice(0,-1)
  const current =currentOperand


  switch (operation) {
    case '+':
      computation = prev + current
      break
    case '-':
      computation = prev - current
      break
    case '*':
      computation = prev * current
      break
    case '÷':
      computation = prev / current
      break
    default:
      return
  }
}
let computation
function compute() {


  const prev =previousOperand.slice(0,-1)
  const current =currentOperand


  switch (operation) {
    case '+':
      computation = prev + current
      break
    case '-':
      computation = prev - current
      break
    case '*':
      computation = prev * current
      break
    case '÷':
      computation = prev / current
      break
    default:
      return
  }
}
  
appendNumber(1);
chooseOperation("+")
appendNumber(1);
compute()
console.assert(computation ==  2, ` find the bug conversion`)
    