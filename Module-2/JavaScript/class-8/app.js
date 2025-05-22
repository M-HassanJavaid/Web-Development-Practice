let fname = ['Ali' , 123 , false ]; //array

let person = {
    name: 'Ali',
    age: 25,
    isStudent: false
}

console.log(person.name);

fname[2] = true
console.log(fname);

console.log(fname.length);

console.log(fname[fname.length - 1]);

let fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Peach']; 
// fruits.push('Grapes' , 'Watermelon'); //add element at the end

// console.log(fruits);

// fruits.pop(); //remove element from the end
// fruits.pop(); //remove element from the end


// console.log(fruits);

// fruits.shift(); //remove element from the start

// console.log(fruits);

// fruits.unshift('Apple' , 'Melon' ); //add element at the start 

// console.log(fruits);

for (var i = 0; i < fruits.length; i++) {
    console.log(`On Index ${i} the value is ${fruits[i]} `);
}

if (fruits[i] === 'Banana') {
    console.log('Banana has found');
}



