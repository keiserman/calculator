const numberButtons = document.querySelectorAll(".number-btn");
const display = document.querySelector(".display");
const clearButton = document.querySelector(".clear-btn");

let result = 0;

clearButton.addEventListener("click", () => {
    result = 0;
    display.textContent = result;
});

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        display.textContent += button.textContent; 
    });
});

function operater(operator, num1, num2) {
    if (operator === "+") {
        add(num1, num2);
    }
    if (operator === "-") {
        subtract(num1, num2);
    }
    if (operator === "*") {
        multiply(num1, num2);
    }
    if (operator === "/") {
        divide(num1, num2);
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