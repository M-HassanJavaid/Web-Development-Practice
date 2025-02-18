var fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Peach' , 'Banana'  ]

console.log(fruits.length);

// for (var i = 0; i < fruits.length; i++) {
//     console.log(`On Index ${i} the value is ${fruits[i]} `);

//     if (fruits[i] === 'Peach') {
//         console.log(`The ${fruits[i]} has found on index ${i}`)
//     }
// }

// let slice = fruits.slice(0, 2); //start index, end is lenght value
// console.log(slice);

// let slice2 = fruits.slice(2); //give only start index
// console.log(slice2);

// Splice

// modify = fruits.splice( 3 , 1 , 'KIWI' , 'LYCHEE'); // First value is starting value // second is deleting count // third is items 

// console.log(modify);
// console.log(fruits);

// let table = +prompt('What table do you want to generate' , 5);


// for (let i = 1; i <= 10; i++) {
//     console.log(`${table} X  ${i} = ${table * i}`)
// }

for (let i = 1; i <= 5; i++) {
    let star = ''
    for (let j = 1; j <= i; j++) {
        star = star + '*'
    }

    console.log(star);
}
