// What is prototype ?

// prototype is the extra jascript built it properties to give all object.

// what is prototype inheritance ?

// prototype inheritance is something like that when we want to give any other object properties to other object!

var canHuman = { 
    fly: false, 
    run: true, 
    talk: true 
} 

var canWebDev = { 
    createWebsite : true , 
    solveJavaScript : true 
}

// here we know that a web developer can also do that things that a human can do


canWebDev.__proto__ = canHuman;

console.log(canWebDev) 

// what is this?

// in function and global scope value of this is window 
// in method the value of this is object
// in addEventListener the value of this is the that element which is before addEventListener!

// call apply bind => agar tumhare pass koi func hai and koi object hai and tumhe func chalana us object par 
// aur by default  jo this ki value window na rakh ke point karawana hai kisi object ki taraf
// here how can we do it?

function func(value , val2) {
    console.log(this);
}

var obj = {
    name : 'hassan'
}

func.call(obj) // while we use .call we will change the value of this in a function, it will bind to an object and call it
func.call(obj , 'hello' , 'world') //when we want to also pass arguments
func.apply(obj , ['hassan' , 'javaid']) // by apply way pass argument
var justChangeThis = func.bind(obj) // it will just change this value but don't call


// Impure and pure functions

// pure functions has two feautures
// 1. when function return same value on same input value on every call
// 2. it will naver change any global variable
var global = 23;
function sum(a , b) {
    global = 23;
    return a + b
}

console.log(sum(2,2))
console.log(sum(2,2)) // it will also return same as uper line , it is not changing global so it is pure function 
// if any function don't follow it then it is impure function




