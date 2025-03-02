const date = new Date();

// console.log(date);

// console.log(date.getDate());

// const days = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday']

// console.log(date.getDay());

// console.log(days[date.getDay()]);

// // const Months = 

// console.log(date.getMonth());

// console.log(date.getDate());

// console.log(date.getFullYear()); // return year

// let hours = date.getHours();

// // if

// console.log(date.getMinutes());

// console.log(date.getSeconds());

// console.log(date.getMilliseconds());

// let time = date.getTime();

const CustomDate = new Date('June 30, 2030');

// console.log(CustomDate.getTime());

DiffTime =  (CustomDate.getTime()) - ( date.getTime());

console.log(DiffTime);

console.log( DiffTime /(1000 * 60 * 60 * 24 * 365)); // convert miliseconds to seconds , to minutes, to hours , to days , to years.

const SetDate = new Date();

SetDate.setFullYear(2007);

console.log(SetDate.getFullYear());

function TellTime() {
    const NowTime = new Date();
    const NowHours = NowTime.getHours();
    const NowSeconds = NowTime.getMinutes();
    alert(`Current  is ${NowHours}:${NowSeconds}`);
}

time
