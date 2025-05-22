//! Array Cardio 

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 }
  ];
  
//^ filter
//~ 1. filter the list of inventors for those who were born in 1500's.

let filteredInventors = inventors.filter((element) => {
  return element.year >= 1500 && element.year < 1600
});

console.table(filteredInventors);

//^ 2. map
//~ 2. Give us an array of inventory first and last name.

let InvetorsFullName = inventors.map((inventor)=>{
    return `${inventor.first} ${inventor.last}`
})

console.log(InvetorsFullName);

//^ sort
//~ 3. sort the inventors by born date oldest to youngest

let sortedInventors = inventors.sort((a , b)=>{
    return b.year - a.year
})

console.table(sortedInventors);

//^ Reduce

//~ 4. How many years did all the inventors live?

let totalyears = inventors.reduce((Total , current)=>{
    return Total + (current.passed - current.year)
} , 0)

console.log(totalyears)

//~ 5. Sort the years by inventors lives

let inventorsliveMore = inventors.sort((a , b)=>{
    let aYearsLive = a.passed - a.year;
    let bYearsLive = b.passed - b.year;
    return bYearsLive - aYearsLive
});

console.table(inventorsliveMore);

//~ 6. Sum of the inatances of each of these

const data = ['car' , 'car' , 'truck' , 'truck' , 'bike' , 'walk' , 'car' , 'van' , 'bike' , 'walk' , 'car' , 'van' , 'car' , 'truck' , 'walk' , 'car' , 'van' , 'truck'];

let transportationCount = data.reduce((obj , current)=>{
    if (!obj[current]) {
        obj[current] = 0;
    }
    obj[current]++;
    return obj;

} , {})

console.table(transportationCount)









