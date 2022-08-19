function add(...numbers) {
    return numbers.reduce((a, b) => a + b);
}

function subtract(...numbers) {
    return numbers.reduce((a, b) => a - b);
}

function multiply(...numbers) {
    return numbers.reduce((a, b) => a * b);
}

function divide(...numbers) {
    return numbers.reduce((a, b) => a / b);
}

function operate(operator, num1, num2) {
    switch (operator) {
        case "+": 
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
            break
    }
}