const cart = ['shirts' , 'pents' , 'toys'];



// Promises

// A Promise is an object in JavaScript that represents the eventual completion (or failure) of an asynchronous operation and allows you to handle the result or error once it’s ready. 

// Promise status is Fullfiled , resolve and rejected


fetch('https://fakestoreapi.com/products')
.then((res)=>{
    return res.json();
}).then((res)=>{
    console.log(res)
})
