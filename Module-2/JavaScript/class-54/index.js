//! Destructuring
// Destructuring is a way in JavaScript to quickly take values out of arrays or objects and put them into separate variables.

const person = {
    name: 'Hassan',
    age: 23,
}

const {name , age} = person;

console.log(name);

const arr = [12, 324 , 344];

const [first ,  , third] = arr;

console.log(first + third);

//!Spread Operator
// Sperator spreads our array our array means it removes [];

const a = [10 , 20 , 30];
const b = [40 , 50 , 60]

const c = [...a , ...b]

console.log(c)

//! Rest operator 
// Rest operator packed all rest values in an array;

export default function sum(a , b , ...c) {
    // console.log(c)
    return a + b
}

console.log(sum(...c))

//! Enhanced object literals

let Fname = 'Hassan Javaid';
let myAge = 17;

const person1 = {
    Fname,
    myAge
}

const {Fname : name1 , myAge: myAge1} = person1 //Destructor  object by asigning new variable

console.log(person1)
console.log(name1 , myAge1)

// Modules 

let dbConfig = "308403943o4i3o4i";
let dbPassworrd = 'hassan.92';

export let exported ={
    dbConfig,
    dbPassworrd,
    sum
}




