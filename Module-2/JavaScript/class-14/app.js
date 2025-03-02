// const FullName = 'Hassan Javaid'

// console.log(FullName.length);
// let ModifiedName = FullName.slice(0, 6); // Extract substring from string but don't change the real string
// let ClearLastLetter = FullName.slice(0, FullName.length -1); //Clear Last letter
// console.log(ClearLastLetter);
// console.log(FullName);
// console.log(ModifiedName);


// const message = 'Keep it up , Keep going!';
// console.log(message.indexOf('Pakistan')); // when it will not find substring it will print -1
// console.log(message.indexOf('Keep'));
// console.log(message.lastIndexOf('Keep'))

// console.log(FullName.charAt(0).toUpperCase());

const text = 'Hassan!';

for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) === '!') {
        console.log('Exclamation Mark has Found');
        break;
    }

    else{
        if (text.length - 1 === i) {
            console.log('Exclamation Mark not found!')
        }
    }
    
}

// const win = 'Yesterday Pakistan won the match , Pakistan Zindabad';

// console.log(win.replaceAll('Pakistan','India'));


// let num = 12.1;

// console.log(Math.round(num));

// console.log(Math.ceil(num));

// console.log(Math.floor(9.9));

console.log(Math.floor(Math.random() * 10) + 1);

// console.log( Math.ceil(Math.random() * 10)); 
// console.log( Math.ceil(Math.random() * 10));
// console.log( Math.ceil(Math.random() * 10));
// console.log( Math.ceil(Math.random() * 10));
// console.log( Math.ceil(Math.random() * 10));
// console.log( Math.ceil(Math.random() * 10));

// console.log( Math.ceil(0.43535454)   * 10)

let num = '3.643353';
// console.log(num.toFixed(2));
// console.log(num.toPrecision(1));

console.log('ParseInt' , parseInt(num)); // convert to number and remove decimals , it removes alphabets
console.log('ParseFloat' , parseFloat(num)); // convert to number and don't remove decimals , it removes alphabets





