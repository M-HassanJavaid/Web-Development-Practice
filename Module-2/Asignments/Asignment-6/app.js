//1
let city = prompt('Tell me your city name?');

if (city.toUpperCase() == 'KARACHI') alert('Welcome To city of lights!');
else alert(`Welcome to ${city} city!`);

let gender = prompt('Tell me your Gender?');

//2
if (gender.toUpperCase() === 'MALE') {
    alert('Good Morning Sir!');
}
else {
    if (gender.toUpperCase() === 'FEMALE') {
        alert(`Good Morning Ma'am!`)
    }
    else {
        alert('Good Morning!');
    }
}


//3
let TrafficSignalColor = prompt('Enter the color of the road traffic signal (Red, Yellow, or Green).');

(TrafficSignalColor.toUpperCase() === 'RED') ? alert('Must Stop') :
    (TrafficSignalColor.toUpperCase() === 'YELLOW') ? alert('Ready To Move') :
        (TrafficSignalColor.toUpperCase() === 'GREEN') ? alert('Move Now') :
            alert('This is not Traffic Signal Color!');

//4
let RemainingFuel = prompt('Enter your remaining Fuel of car in liters.');
RemainingFuel = Number(RemainingFuel);

while (isNaN(RemainingFuel)) {
    alert('Please write only numbers!');
    RemainingFuel = Number(prompt('Enter your remaining Fuel in liters.'));
}

if (RemainingFuel < 0.25) {
    alert('Please refile your fuel in car');
} else {
    alert(`You have ${RemainingFuel} liter fuel , which maybe enough.`);
}

// 5

// a.

var a = 4;
if (++a === 5) {
    alert ('Given Condition is true');
}

// b.

let b = 82;
if (b++ === 83) {
    alert('Given condition is false');
}

// c.

let c = 12;
if (c++ === 13) {
    alert('condition 1 is false');
}

if (c === 13) {
    alert('condition 2 is true');
}

if (++c < 14) {
    alert('condition 3 is false');
}

if (c === 14) {
    alert('condition 4 is true');
}

// d . 

var MaterialCost = 20000;
var laborCost = 2000;
var TotalCost = MaterialCost + laborCost;
if (TotalCost === MaterialCost + laborCost) {
    alert('The cost is equals');
}

// e.

if (true) {
    alert('it is true')
}

if (false) {
    alert('it is false')
}

// f.

if ('cat' > 'car') {
    alert('cat is bigger than car')
}

// 6

let TotalMarks = 300;
var EnglishMarks = Number(prompt('Enter your obtained marks in English.'));

while (isNaN(EnglishMarks)) {
    alert('Please Enter Marks in number.')
    var EnglishMarks = Number(prompt('Enter your obtained marks in English.'));
}

var MathMarks = Number(prompt('Enter your obtained marks in Math.'));

while (isNaN(MathMarks)) {
    alert('Please Enter Marks in number.')
    var MathMarks = Number(prompt('Enter your obtained marks in Math.'));
}

var ScienceMarks = Number(prompt('Enter your obtained marks in Science.'));

while (isNaN(ScienceMarks)) {
    alert('Please Enter Marks in number.')
    var ScienceMarks = Number(prompt('Enter your obtained marks in Science.'));
}

let TotalObtainedMarks = EnglishMarks + MathMarks + ScienceMarks;

let TotalPercentage = TotalObtainedMarks * 100 / TotalMarks ;

if (TotalPercentage >= 80) {
    var grade = 'A-one';
    var remarks = 'Excellent';
} else if (TotalPercentage >= 70) {
    var grade = 'A';
    var remarks = 'Good';
} else if (TotalPercentage >= 60) {
    var grade = 'B';
    var remarks = 'You need to Improve'
} else {
    var grade = 'Fail';
    var remarks = 'Sorry';
}

alert(`Marks Sheet \n \nTotal Marks : ${TotalMarks} \nMarks Obtained : ${TotalObtainedMarks} \nPercentage : ${TotalPercentage.toFixed(3)}% \nGrade : ${grade} \nRemarks : ${remarks}`);
