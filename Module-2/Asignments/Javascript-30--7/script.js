const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 },
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen in my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 },
];


//? .some()
//In JavaScript, the.some() method is used on arrays to test whether at least one element in the array passes a given condition(i.e., the callback function returns true).
//It returns a boolean: true if any element satisfies the condition, otherwise false.

let currentYear = (new Date).getFullYear();

let any18 = people.some((person)=>{
    return (currentYear - person.year) >= 18;
});

console.log(any18)

//? .every()
//Returns true only if all elements pass the test.
let every18 = people.every((person)=>{
    return (currentYear - person.year) >= 18;
});

console.log(every18)

//? .find()
//.find() → returns a single object (first match).

let find823423 = comments.find((comment)=>{
    return comment.id === 823423;
});

console.log(find823423 ?? 'This is not found');

//? .findIndex

let findIndex = comments.findIndex((comment)=>{
    return comment.id === 823423;
});

comments.splice(findIndex , 1);

console.log(comments)