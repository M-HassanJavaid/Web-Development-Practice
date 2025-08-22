// // 🔵 Parent Class
// class Vehicle {
//   constructor(brand, wheels) {
//     this.brand = brand;
//     this.wheels = wheels;
//   }

//   start() {
//     console.log(`${this.brand} is starting with ${this.wheels} wheels 🔑`);
//   }
// }

// // 🔴 Child Class
// class Car extends Vehicle {
//   constructor(brand, wheels, fuelType) {
//     super(brand, wheels);     // ✅ Inherit properties from Vehicle
//     this.fuelType = fuelType; // 🔁 Car's own property
//   }

//   drive() {
//     console.log(`${this.brand} is driving on ${this.fuelType} 🚗`);
//   }
// }

class Animal {
    constructor(name , color , age) {
        this.name = name;
        this.color = color;
        this.age = age;
    }

    run(){
        console.log(`${this.name} is running!`)
    }

    shout(){
        console.log(`${this.name} is shouting!`)
    }
}

class monkey extends Animal {
    constructor(name , color , age, food) {
        super(name , color , age)
        this.eat = food;
    }

    eatFood() {
        console.log(`${this.name} is eating ${this.eat}`)
    }
}

let Animal_1 = new Animal('leo' , 'brown' , 4)

console.log(Animal_1)

Animal_1.run()
Animal_1.shout()

let monkey_1 = new monkey('chimpanzee' , 'orange' , 7 , 'banana');
console.log(monkey_1)
monkey_1.eatFood()


// method overriding

