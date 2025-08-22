console.log('Hello to Backend!');

//! modular programming / modules import and export

// const math = require('./second') // by adding this line wen can import any function or object from another file which it is exporting. it is using commonjs , it is sync
// means it will block my code

// const {add , sub} = require('./second') // we can also rename my modules like that

//! import by Ecmasript feauture

// import math from "./second.js"; // here when we export it we give default keyword so we don't need to add curly braces , we can rename it we can also rename it , 
// by default it will import that data. a js file canhave only one default keyword

// import { remainder as findremainder} from "./second.js"; // here we import a function by using ecmascript , it is compulsory that we give same name as give in second file ,
// we can also rename it by usning as keyword 

// let remainderAns = findremainder(78 , 9);
// console.log(remainderAns)

// let sumVal = math.addFn(2, 4)
// console.log(sumVal)

// let subVal = math.subFn(7 , 70);
// console.log(subVal)


//! import built in packages

const fs = require('fs'); // if we want to import built in modules we don't have to give ./ directory

//! File handling in node js

//& What is sync?
// Synchronous (sync) methods in fs:
// These methods run one at a time. The code waits for the file task to finish before moving to the next line.

// ✅ Simple to use
// ❌ Slows down if the file is big or the task takes time
// handle error by try catch 

//& What is without sync ?
// Asynchronous (async) methods in fs:
// These methods don’t wait. The file task runs in the background, and the next line of code runs immediately.

// ✅ Fast and better for big tasks
// ❌ Needs a callback or Promise to know when it's done
// error handle by callbacks


// try {
//     fs.writeFileSync('./sync.txt' , 'Hello there, it will create a file syncrounously means it will block code! here we can handle error by try catch');
// } catch (error) {
//     console.log(error , 'Some error is occured')
// } 

// fs.writeFile('./async.txt' , 'Hello there , this file will create syncronously means not blocking the code and i argument it also recieve a callback function that will run  after error or file cretion' ,(err)=>{
//     if (err) {
//         console.log(err , 'some error is occured!')
//     } else{
//         console.log('file has creted!')
//     } // we can handle error by callBack
// });

const SyncResult = fs.readFileSync('./sync.txt' , 'utf-8');

// console.log(SyncResult)

const AsyncResult = fs.readFile('./async.txt' , 'utf-8' , (err , data)=>{
    console.log(err);
    console.log(data);
}); 
// here we are reading a file 

let date =  new Date;
date.getFullYear();

fs.appendFileSync('sync.txt' , '\nAdding a new line in file by append file sync  ' +  (new Date).getFullYear().toString());

// copy      from        to
fs.cpSync('./sync.txt' , './copy.txt');

// fs.unlinkSync('./extra.txt');

console.log(fs.statSync('./async.txt').isFile())

//create a folder
fs.mkdirSync('./my_docs/a/b' , {recursive : true})