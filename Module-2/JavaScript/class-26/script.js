// let promise = new Promise((resolve, reject) => {
//     // do something
//     let success = true;
  
//     if (success) {
//       resolve("Operation successful!");
//     } else {
//       reject("Something went wrong.");
//     }
//   });
  
//   promise
//     .then((result) => console.log(result))    // handles success
//     .catch((error) => console.log(error));    // handles error
  

// let num = 233;
// console.log(num.toString().padStart(2, 0))

elements = document.querySelectorAll('.para');
console.log(elements);

elements.forEach((element)=>{
    element.addEventListener('click', (e)=>{
        alert(e.target)
    });
});

