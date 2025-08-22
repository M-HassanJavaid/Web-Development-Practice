//! What is Promises

// In JavaScript, a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 
// It provides a cleaner, more manageable way to handle asynchronous code compared to callbacks by allowing chaining with .then() for success, 
// .catch() for errors, and .finally() for cleanup actions. Promises have three states: pending, fulfilled, and rejected.

fetch('https://fakestoreapi.com/products')
.then(res => res.json())
// .then(res => console.log(res))

//! Async Await

// async and await are special keywords in JavaScript that help you write code that waits for something to finish, 
// like loading data from a server — without using .then() or callbacks.

// async is used to mark a function as asynchronous, which means it can pause and wait for something.

// await is used inside an async function to pause the code until a Promise (like a server request) finishes.

async function greeting() {
    let data = await fetch('https://fakestoreapi.com/products');
    data = await data.json();
    console.log(data);
}
// greeting()

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise has resolved')
    }, 3000); 
});

function getData(params) {
    promise
    .then
}


