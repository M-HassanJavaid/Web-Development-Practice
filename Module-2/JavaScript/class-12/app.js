//functions

f1(); //we can call function before function

//console.log(hh); // we can not call variable out of  a function because function's variable does not store in first javascript execution Memory phase.

function f1() {
    console.log('helo World');
    var hh = 'hh';
}

f1();

function loop() {
    for (let i = 0; i < 4; i++) {
        console.log('helo');
    } return 'ReturnValue';
}
// loop();
console.log(loop());

function add() {
    let fsum = 2 + 2;
    return fsum;
}

let sum = add();

function greeting(name) { 
    console.log('Hellow ' + name);
}

greeting('hassan');
greeting('ALi');


function subtract( a , b){ // Parame
    subf = a - b;
    return subf;
}

let sub = subtract( 10 , 1);
console.log(sub);