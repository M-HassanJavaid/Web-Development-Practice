//! oop - object oriented programming


// class user {
//     constructor(name , fname , age) {
//         this.name = name;
//         this.FatherName = fname;
//         this.age = age
//     }

//     info(name, age){
//         console.log(`hello, my name is ${name}. i am ${age} old.`)
//     }
// }

// const obj = new user(obj.name , obj.FatherName , obj.age)
// console.log(obj)


//Pillars of oop
// 1.. Abstraction
// 2.. Encapsulation
// 3.. Polymorphism
// 4.. Inheritence

//? Abstraction

// Abstraction means hiding the complex code and showing only the important parts.
// It helps you use an object without needing to know how it works inside.

//? Encapsulation

// Encapsulation means bundling data (variables) and methods (functions) into one unit — like a class — and protecting the internal details from outside access.
// It keeps your code clean, safe, and organized.

//? Inheritence
//Inheritance means a class (child) can use properties and methods from another class (parent).
//It helps you reuse code and avoid repeating yourself.

//? Polymorphism
//Polymorphism in JavaScript means using the same method name in different classes,
//where each class overrides the method to perform its own unique behavior.

class person {
    name = 'Hassan'
    age = 21
}


let p1 = new person();

console.log(p1)