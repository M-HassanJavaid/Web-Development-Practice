// module.exports = {
//     addFn : add,
//     subFn : sub
// }; // by add this line we export any function and object from this file and we can use object to export multiple functions and object // it si called multiple exports

module.exports = {
    addFn : add,
    subFn : sub
}; //we can export it by using ecmascript feauture it is async means it will not block my code

function add(a , b) {
    return a + b
}

function sub(a,b) {
    return a - b;
}

// export function remainder(a , b) {
//     return a % b 
// }

// exports.muliply = (a , b) =>{
//     return a * b;
// } 
    
// exports.divde = (a , b) =>{
//     return a / b;
// } // here we can exports single function , we can import all it as a object as in export multiple function