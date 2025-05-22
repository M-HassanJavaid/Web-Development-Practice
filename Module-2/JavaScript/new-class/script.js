// Functional Programming

const radius = [2, 3, 7, 27 , 8];

// function CalualateArea(radius) {
//     let areaArray = [];
//     for (let i = 0; i < radius.length; i++) {
//         let area = Math.PI * radius[i]**2;
//         areaArray.push(area)
//     }
//     return areaArray
// }

// let area = CalualateArea(radius);

// console.log(area)


// function CalualateCircumference(radius) {
//     let circumferenceArray = [];
//     for (let i = 0; i < radius.length; i++) {
//         let circumference = 2 * Math.PI * radius[i];
//         circumferenceArray.push(circumference)
//     }
//     return circumferenceArray
// }

// let circumference = CalualateCircumference(radius);

// console.log(circumference)


const calculateArea = (rad) => Math.PI * rad**2;
const calculateCircumference = (rad) => 2 * Math.PI * rad;
const calculateDiameter = (rad) => rad * 2;

function common(calculate , radius) {
    return radius.map((item)=> calculate(item));

}

let output = common( calculateCircumference , radius);
console.log(output)

// array method

// map : map apply a function to an array and provide a new array ,
// it takes two parameters in function once is the current item of array and second is 

// const value = [4, 44 , 8 , 9 , 3 , 9];

// let double = value.map((item , index)=>{
//      return item * 2
// })

// console.log(double)

// 