function x() {
    let a = 20;

    return function y() {
        console.log(a);
    }
}
var a = x();

a()

function delay(params) {
    var a = 10;

    setTimeout(() => {
        console.log(a)
    }, 0);

    console.log('Hello World');
}

delay()

for (let i = 1; i <= 10; i++) {
    function y(iterator) {
        setTimeout(() => {
            console.log(iterator);
        }, iterator * 1000); 
    }
    
    y(i);
}



async function name(params) {
    
}