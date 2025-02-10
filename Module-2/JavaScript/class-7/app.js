console.log(true && false);

console.log(true || false);

console.log(!!null);

console.log(!true); 

let user ;

console.log(user ?? 'name');

let firstName = null;
let SecondName = null;
let nickname = 0;

console.log(firstName ?? SecondName ?? nickname ?? 'Anonymous'); // output will be 0 

console.log(firstName || SecondName || nickname || 'Anonymous'); // output will be Anonymous



for (let i = 0; i < 10; i++) {
    console.log(`Hello World`);
}

