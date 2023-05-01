const numberButtons = document.querySelectorAll(".number-btn");
const display = document.querySelector(".display");
const clearButton = document.querySelector(".clear-btn");
const equalsButton = document.querySelector(".equals-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");
const deleteButton = document.querySelector(".delete-btn");
const percentButton = document.querySelector(".percent-btn");
const periodButton = document.querySelector(".period-btn");
const allButtons = document.querySelectorAll("button");

let current = "";
let last = "";
let operator = "";

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const updateDisplay = (value) => display.textContent = value;

deleteButton.addEventListener("click", backspace);
clearButton.addEventListener("click", clear);
percentButton.addEventListener("click", getPercent);
periodButton.addEventListener("click", addPeriod);
allButtons.forEach(button => button.addEventListener("click", button.blur));
numberButtons.forEach(button => button.addEventListener("click", () => getNumber(button.textContent)));
operatorButtons.forEach(button => button.addEventListener("click", () => getOperator(button.dataset.sign)));

document.addEventListener("keydown", (event) => {
    console.log(event.key);
    (event.key === "Backspace") ? backspace() : null;
    (event.key === "Escape" || event.key === "c") ? clear() : null;
    (event.key === "%") ? getPercent() : null;
    (event.key >= 0 && event.key <= 9) ? getNumber(event.key) : null;
    if (event.key === "*" || event.key === "+" || event.key === "/" || event.key === "-") {getOperator(event.key)}
    if (event.key === "Enter") {
        if(operator) {
            updateDisplay(operate(operator, last, current));
        } else {
            return;
        }
    }
});

equalsButton.addEventListener("click", () => {
    if(operator) {
        updateDisplay(operate(operator, last, current));
    } else {
        return;
    }
});

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case "+":
          return add(a, b);
        case "-":
          return subtract(a, b);
        case "*":
          return multiply(a, b);
        case "/":
            if (b === 0) {
                alert("Division by zero!");
                return null;
            } else {
                return divide(a, b);
            }
        default:
          return null;
    }
}

function getNumber(num) {
    display.textContent == "0" ? updateDisplay("") : null;
    current += num;
    updateDisplay(current);
}

function getOperator(op) {
    if(!last) {
        last = current;
        operator = op;
        current = "";
        return;
    }
    updateDisplay(operate(operator, last, current));
    last = operate(operator, last, current);
    operator = op;
    current = "";
}

function backspace() {
    if (current.length > 1) {
        current = current.slice(0, -1);
    } else {
        current = "0";
    }
    updateDisplay(current);
}

function clear() {
    current = "";
    last = "";
    operator = "";
    updateDisplay(0);
}

function getPercent() {
    current = current / 100;
    updateDisplay(current);
}

function addPeriod() {
    if (!current.includes(".")) {
        current += periodButton.textContent;
        updateDisplay(current);
    }
}