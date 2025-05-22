//? Call back functions

// setTimeout(() => {
//     console.log('Hello World')
// }, 5000);

// function x(func) {
//     console.log('X')
//     func()
// }

// function y() {
//     console.log('Y') ;
// }

// x(y);

//? Add event Listners

let btn = document.querySelector('button');

function Count() {
    let i = 0;
    const btnEvent = btn.addEventListener('mouseenter', (e) => {
        i++;
        console.log(`button click ${i}`)
    });
    
    removeEventListener('mouseenter' , btnEvent)
}

Count()

