// let prom1 = new Promise((resolve , reject)=>{
//     setTimeout(() => {
//         let num = +prompt('write number');
//         if (num === 1) {
//             resolve('Promise has done the number is 1')
//         } else {
//             reject('Promise has reject, the number is not 1');
//         }
//     }, 2000)
// });

// prom1.then((value)=>{
//     alert(value)
// })
// .catch((value)=>{
//     alert(value)
// })


// Async & Await 

// async function getData() {
//     let data = prompt('Type Data');
//     return new Promise ((resolve , reject)=>{
//         setTimeout(() => {
//             resolve(data)
//         }, 3000);
//     })
// }

// async function ProcessData() {
//     data = await getData();
//     console.log(data)
// }

// ProcessData()

async function getData() {
    let quote = await fetch('https://api.api-ninjas.com/v1/quotes', {
        method: 'GET',
        headers: {
            'X-Api-Key': 'AqsFBFf66S0jF681hKLLfg==4xT4HNOCKeNPkdHG'
        }
    })
    quote = await quote.json()
    console.log(quote)
}

getData()
