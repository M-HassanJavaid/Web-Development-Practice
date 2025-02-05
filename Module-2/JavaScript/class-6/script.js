if(true) console.log('helo world');

if(false) console.log('helo world 2');

if (true) {
    console.log('It is true');
    console.log('it is not false');
}

const age = prompt('Tell me your age?');

if (age >= 18) {
    console.log('You are not juvenile');
} else{
    console.log('You are juvenile');
}

const ConfirmCnic = confirm('Do you have CNIC ?');

if (ConfirmCnic === true) {
    age = prompt('enter your age.', 18)

    if (age >= 18) {
        alert('Congragulations, you are eligible for Gun Liscence!')

    } else {
        alert('Sorry , You are not eligible for Gun Liscence!')
    }
}

else{
    alert('Sorry , You are not eligible for Gun Liscence!');
}

console.log(true && true && false);

console.log( true || false);

let num = prompt('give me your favourite number');

let message = (num < 10) ? 'your number is under 10' : (num < 20) ? 'your number in under 20' : (num < 100) ? 'your number is under 100' : 'Your number is above 100';

alert(message);