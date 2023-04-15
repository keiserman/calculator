const numberButtons = document.querySelectorAll(".number-btn");
const displayCurrent = document.querySelector(".display-current");
const displayLast = document.querySelector(".display-last");
const clearButton = document.querySelector(".clear-btn");
const equalButton = document.querySelector(".equal-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");

let current = 0;
let placeholder = 0;
let operator;

clearButton.addEventListener("click", clear);

console.log(operate("-", 6, 10));

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (current === 0) {
            current = current.toString().slice(1);
        }
        current += button.textContent;
        displayCurrent.textContent = current;
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (placeholder != 0) {
            current = operate(operator, current, placeholder);
            displayCurrent.textContent = current;
        }
        placeholder = current;
        operator = button.textContent;
        current = 0;
        displayCurrent.textContent = placeholder;
        displayLast.textContent = placeholder + " " + operator;
    });
});

equalButton.addEventListener("click", () => {
    current = operate(operator, current, placeholder);
    displayCurrent.textContent = current;
    displayLast.textContent = placeholder + " " + operator;
});

function operate(operator, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    switch (operator) {
        case "+":
          return add(num1, num2);
        case "-":
          return subtract(num1, num2);
        case "*":
          return multiply(num1, num2);
        case "/":
          return divide(num1, num2);
        default:
          return "Invalid operator";
    }
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function clear() {
    current = 0;
    placeholder = 0;
    placeholder = placeholder.toString().slice(1);
    displayLast.textContent = placeholder;
    displayCurrent.textContent = current;
}