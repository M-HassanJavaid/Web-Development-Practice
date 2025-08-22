const promise = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve("PROMISE 1 RESOLVED!!")
    }, 3000);
});

const promise1 = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve("PROMISE 2 RESOLVED!!")
    }, 3000);
});

// async function getData() {
//     const p1 = await promise;
//     console.log(p1);

//     const p2 = await promise1;
//     console.log(p2);

//     console.log("Hello World!");
// }


// getData();

async function fetchdata() {
    try {
        let response = await fetch('https://fakestoreapi.com/products');
        let data = await response.json();
        return data
    } catch (error) {
        console.log(error)
    }
}

fetchdata()
.then((res)=>{
    // console.log(res)
})
// promise.then((res)=>{
//     console.log('promise 1 resolved!')
// });

// promise1.then((res)=>{
//     console.log('Promise 2 resolved 2')
// });
