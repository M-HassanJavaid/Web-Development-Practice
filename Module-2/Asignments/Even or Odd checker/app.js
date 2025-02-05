alert("Welcome to the Even or Odd checker , here you can check if a number is even or odd");
let num = prompt('Give a number', 0);
num = Number(num);

while (isNaN(num)) {
    alert('You did not give number');
    num = prompt('Give number again', 0);
    num = Number(num);
}

let reminder = num % 2;

if (reminder === 0) {
    alert('given number was even');
} else {
    alert('given number was odd');
}
