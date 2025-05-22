function x() {
    for (var i = 0; i <= 10; i++) {
        function y(itreator) {
            setTimeout(() => {
                console.log(itreator)
            }, 1000);
        }
        y(i)
    }
}

x()


// FUNCTION STATEMENT // FUNCTION DEFINITION // FUNCTION DECLARATION

a() // it can be call 

function a() {
    console.log('FUNCTION STATEMENT')
}

// FUNCTION EXPRESSION
b() // it can not call, undefined cannot call

var b = function () {
    console.log('FUNCTION EXPRESSION');
}

c() //due to temporal dead we cannot cannot access before initaillization
let c = function () {
    console.log('FUNCTION EXPRESSION with let');
}

//Arrow function 
const d = ()=>{
    return 'Arrow Function'
}

console.log(d())

// ANONYMOUS FUNCTION

var e = ()=>{
    console.log('ANONYMOUS FUNCTION')
}


// NAME FUNCTION EXPRESSION

var a = function abc() {
    console.log('NAME FUNCTION EXPRESSION')
}


// FIRST CLASS FUNCTION
//Those function who recieved a function in parameter or return a function

function y(x) {
    x()
}

y(function z() {
    console.log('FIRST CLASS FUNCTION')
});










