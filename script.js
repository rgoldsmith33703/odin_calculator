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

let display = document.querySelector('#display');
let digitButtons = document.querySelectorAll('.digit');
let operatorButtons = document.querySelectorAll('.operator');
let buttons = document.querySelectorAll('button');
let equals = document.querySelector('#equals').textContent;

let digits = [];
let operators = [];
digitButtons.forEach(button => digits.push(button.textContent));
operatorButtons.forEach(button => operators.push(button.textContent));

buttons.forEach(button => {
    button.addEventListener('click', e => {
        if ((digits.includes(e.target.textContent))) {
            display.textContent += e.target.textContent
        } else if (operators.includes(e.target.textContent)) {
            num1 = parseInt(display.textContent)
            operator = e.target.textContent
            display.textContent = ''
        }  else if (e.target.textContent === equals) {
            num2 = parseInt(display.textContent)
            let result = operate(operator, num1, num2)
            display.textContent = result
        }
    })
})




