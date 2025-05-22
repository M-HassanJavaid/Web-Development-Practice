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

const prices = [100 , 877 , 900 , 9999]

let totalPrice = prices.reduce(( accumulator , currentValue)=>{
    return accumulator + currentValue
} , 0)

// function calculatePrice(prices) {
//     let sum = 0;
//     for (let i = 0; i < prices.length; i++) {
//         sum += prices[i]
//     }
//     return sum
// }
// let totalPrice = calculatePrice(prices);

console.log(totalPrice)

// function FindMax(prices) {
//     let max = 0;
//     for (let i = 0; i < prices.length; i++) {
//         if (prices[i] > max) {
//             max = prices[i];
//         }
        
//     }

//     return max
// }

// let bigvalue = FindMax(prices);

// console.log(bigvalue)

let bigvalue = prices.reduce((previous , current)=>{
    if (previous < current) {
        previous = current
    }
    return previous
}, 0)

console.log(bigvalue)

let productsUnder300 = products.filter((item)=>{
    return item.price <= 300
}).map((item)=>{
    return `The price of ${item.brand}'s ${item.productName} is ${item.price} rupees.`
})

console.log(productsUnder300)

console.log(undefined ?? 'hello');

let data = ['hello'];

let value = data.map((item)=>{
    return `hello ${item}`
})

console.log(value)
