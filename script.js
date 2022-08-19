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
let clear = document.querySelector('#clear');

let digits = [];
let operators = [];
digitButtons.forEach(button => digits.push(button.textContent));
operatorButtons.forEach(button => operators.push(button.textContent));

let num1;
let num2;

clear.addEventListener('click', e => {
    num1 = undefined
    num2 = undefined
    display.textContent = ''
})

buttons.forEach(button => {
    button.addEventListener('click', e => {
        if ((digits.includes(e.target.textContent))) {
            display.textContent += e.target.textContent
        } else if (operators.includes(e.target.textContent)) {
            if (num1 === undefined) {
                num1 = parseInt(display.textContent)
                operator = e.target.textContent
                display.textContent = ''
            } else {
                num2 = parseInt(display.textContent)
                display.textContent = operate(operator, num1, num2)
                num1 = num2
                operator = e.target.textContent
            }
        }  else if (e.target.textContent === equals) {
            num2 = parseInt(display.textContent)
            display.textContent = operate(operator, num1, num2)
        }
    })
})




