const numberButtons = document.querySelectorAll(".number-btn");
const display = document.querySelector(".display");
const clearButton = document.querySelector(".clear-btn");
const equalsButton = document.querySelector(".equals-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");
const deleteButton = document.querySelector(".delete-btn");
const percentButton = document.querySelector(".percent-btn");

let current = "";
let last = "";
let operator = "";

clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", deleteEntry);
equalsButton.addEventListener("click", () => {
    if(operator) {
        updateDisplay(operate(operator, last, current));
    } else {
        return;
    }
});

percentButton.addEventListener("click", () => {
    current = current / 100;
    updateDisplay(current);
});

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        display.textContent == "0" ? updateDisplay("") : null;
        if (current.includes(".")) {
            console.log("Period");
        }
        current += button.textContent;
        updateDisplay(current);
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if(!last) {
            last = current;
            operator = button.textContent;
            current = "";
            return;
        }
        updateDisplay(operate(operator, last, current));
        last = operate(operator, last, current);
        operator = button.textContent;
        current = "";
    });
});

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case "+":
          return add(a, b);
        case "-":
          return subtract(a, b);
        case "×":
          return multiply(a, b);
        case "÷":
          return divide(a, b);
        default:
          return "NaN";
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
    if (num2 === 0) {
        alert("Division by zero");
        return num1;
    }
    return num1 / num2;
}

function clear() {
    current = "";
    last = "";
    operator = "";
    updateDisplay(0);
}

function updateDisplay(value) {
    display.textContent = value;
}

function deleteEntry() {
    if (current.length > 1) {
        current = current.substring(0, current.length - 1);
        updateDisplay(current);
    } else {
        current = "0";
        updateDisplay(current);
    }
}