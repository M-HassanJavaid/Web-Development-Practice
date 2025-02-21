function Addition(num1 , num2) {
    add = num1 + num2;
    return add;
}
function Subtraction(num1 , num2) {
    sub = num1 - num2;
    return sub;
}
function Multiplication(num1 , num2) {
    Multiply = num1 * num2;
    return Multiply;
}
function Division(num1 , num2) {
    Divide = num1 / num2;
    return Divide;
}

let num1 = Number(prompt('Enter your first number!'));
let operation = prompt('What do you want to do : \n+ , - , x , ÷ ');
let num2 = Number(prompt('Enter your Second number!'));

if (operation === '+') {
    let ans = Addition(num1 , num2);
    alert(`The Answer is ${ans}`);
} else if (operation === '-') {
    let ans = Subtraction(num1 , num2);
    alert(`The Answer is ${ans}`);
} else if (operation === 'x' || operation === '*') {
    let ans = Multiplication(num1 , num2);
    alert(`The Answer is ${ans}`);
} else if (operation === '/' || operation === '÷') {
    let ans = Division(num1 , num2);
    alert(`The Answer is ${ans}`);
} else {
    alert('Please enter right Symbol!')
}