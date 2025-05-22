let num = [1, 2, 4, 7];

function double(item) {  // Call Back Function
    return item * 2;
}

let NewNum = num.map(double);

console.log(NewNum);

num.forEach((item) => {
    console.log(item)
});

console.log(num)

for (const i in num) {
    console.log(num[i])
}

let dummyData = [
    {
        name: 'Hassan',
        id: 1
    },
    {
        name: 'Affan',
        id: 2
    }
]

let ModifyData = dummyData.map((obj) => {
    return `${obj.name}---${obj.id}`
})

console.log(ModifyData)

mixNum = [4, 7, 8, 2, 3, 8, 9]

let Even = mixNum.filter((item) => {
    return item % 2 === 0;
})

let Odd = mixNum.filter((item) => {
    return item % 2 !== 0;
})

console.log(Even)

console.log(Odd)

const users = [
    { id: 1, name: "Ali", age: 22 },
    { id: 2, name: "Sara", age: 19 },
    { id: 3, name: "Ahmed", age: 25 },
    { id: 4, name: "Zara", age: 28 },
    { id: 5, name: "Usman", age: 17 },
    { id: 6, name: "Fatima", age: 24 },
    { id: 7, name: "Bilal", age: 21 },
    { id: 8, name: "Ayesha", age: 26 },
    { id: 9, name: "Hamza", age: 20 },
    { id: 10, name: "Noor", age: 23 }
];

let users_18 = users.filter((item)=>{
    return item.age >= 18;
});

console.table(users_18)

//Reduce

const prices = [74, 447 , 778 , 778 , 77];

let totalPrice = prices.reduce((previous , current)=>{
    return current + previous
} , 0)


const products = [
  { productName: "Smartphone", price: 799, brand: "Samsung" },
  { productName: "Laptop", price: 1200, brand: "Dell" },
  { productName: "Headphones", price: 150, brand: "Sony" },
  { productName: "Smartwatch", price: 250, brand: "Apple" },
  { productName: "Tablet", price: 500, brand: "Lenovo" },
  { productName: "Bluetooth Speaker", price: 100, brand: "JBL" },
  { productName: "Monitor", price: 300, brand: "LG" },
  { productName: "Keyboard", price: 70, brand: "Logitech" },
  { productName: "Camera", price: 950, brand: "Canon" },
  { productName: "Gaming Console", price: 600, brand: "Sony" }
];

let totalProductPrice = products.reduce((previous , current)=>{
    return previous + current.price
} , 0)

console.log(totalProductPrice)



