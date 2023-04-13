const numberButtons = document.querySelectorAll(".number-btn");
const displayCurrent = document.querySelector(".display-current");
const displayLast = document.querySelector(".display-last");
const clearButton = document.querySelector(".clear-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");
const number = [];

let result = 0;
let placeholder = 0;
let operator;


clearButton.addEventListener("click", clear);

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (result === 0) {
            result = result.toString().slice(1);
        }    
        result += button.textContent;
        displayCurrent.textContent = result;
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (placeholder === 0) {
            placeholder = result;
            operator = button.textContent;
            displayLast.textContent = placeholder + " " + operator;
        } else {
            result = operate(operator, placeholder, result);
            displayCurrent.textContent = result;
        }
    });
});

function operate(operator, num1, num2) {
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
    result = 0;
    placeholder = 0;
    placeholder = placeholder.toString().slice(1);
    displayLast.textContent = placeholder;
    displayCurrent.textContent = result;
}