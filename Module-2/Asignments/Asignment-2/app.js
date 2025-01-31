document.write(`<h1> First Asignment </h1>`);

// 1
let num1 = 15;
let num2 = 10;
let sum = num1 + num2;
document.write(`<p class='sum'> The sum of ${num1} and ${num2} is ${sum}. </p>`);

document.write(`<h1> Second Asignment </h1>`);
// 2
let sub = num1 - num2;
document.write(`<p> The subtraction of ${num1} and ${num2} is ${sub}. </p>`);
let mul = num1 * num2;
document.write(`<p> The multiplication of ${num1} and ${num2} is ${mul}. </p>`);
let div = num1 / num2;
document.write(`<p> The division of ${num1} with ${num2} is ${div}</p>`);

document.write(`<h1> third Asignment </h1>`);
//3
let JsMath;
document.write(`<p> Value After decleration is: ${JsMath}`);
JsMath = 5;
document.write(`<p> Initial Value is: ${JsMath}`);
JsMath++;
document.write(`<p> Value after increment is: ${JsMath}`);
JsMath += 7;
document.write(`<p>After adding 7 the value is ${JsMath}</p>`);
JsMath--;
document.write(`<p>After decrement the value is ${JsMath}</p>`);
reminder = JsMath % 3;
document.write(`<p>After dividing with 3 the reminder is ${reminder}</p>`);

document.write(`<h1> fourth Asignment </h1>`);
//4
let CostOfOneTicket = 600;
let NumOfTickets = 5;
let CostOfTickets = CostOfOneTicket * NumOfTickets;
document.write(`<p> Total Cost to buy ${NumOfTickets} tickets is ${CostOfTickets}PKR </p>`);

document.write(`<h1> fifth Asignment </h1>`);
//5
let number = 4;

document.write(`<p>4 x 1 = ${4 * 1}</p>`);
document.write(`<p>4 x 2 = ${4 * 2}</p>`);
document.write(`<p>4 x 3 = ${4 * 3}</p>`);
document.write(`<p>4 x 4 = ${4 * 4}</p>`);
document.write(`<p>4 x 5 = ${4 * 5}</p>`);
document.write(`<p>4 x 6 = ${4 * 6}</p>`);
document.write(`<p>4 x 7 = ${4 * 7}</p>`);
document.write(`<p>4 x 8 = ${4 * 8}</p>`);
document.write(`<p>4 x 9 = ${4 * 9}</p>`);
document.write(`<p>4 x 10 = ${4 * 10}</p>`);

document.write(`<h1> sixth Asignment </h1>`);
//6

let CelciusTemp = 32;

CelciusToFahrehiet = ( CelciusTemp * 9/5) + 32;

document.write(`<p> 32° Celcius to Farhenhiet is ${CelciusToFahrehiet}°  </p>`);

let FarhenhietTemp = 100;

FahrenhietToCelcius = ( FarhenhietTemp - 32) * 5/9;

document.write(`<p> 100° fahrenhiet to Celcius is ${FahrenhietToCelcius}°  </p>`);

document.write(`<h1> seventh Asignment </h1>`);
//7

let ItemOneQuantity = 2;
let ItemTwoQuantity = 1;
let PriceOfItemOne = 650 * ItemOneQuantity;
let PriceOfItemTwo = 200 * ItemTwoQuantity;
let ShippingCharges = 100;
let TotalCost = PriceOfItemOne + PriceOfItemTwo + ShippingCharges;

document.write(`
    <div>
      <p>Quantity of item 1 is ${ItemOneQuantity}</p>
      <p>Quantity of item 2 is ${ItemTwoQuantity}</p>
      <p>Price of item 1 is ${PriceOfItemOne}</p>
      <p>Price of item 2 is ${PriceOfItemTwo}</p>
      <p>Shipping Charges is ${ShippingCharges}</p>
      <p>Your Total Cost is ${TotalCost}</p>
    </div>

    `)

//8
document.write(`<h1> eight Asignment </h1>`);   

let TotalMarks = 200;
let MarksObtained = 173;
let Percentage = 173*100/200;

document.write(`
    <div>
     <p>Total Marks : ${TotalMarks}</p>
     <p>Marks Obtained : ${MarksObtained}</p>
     <p>Total Percentage Obtained : ${Percentage}%</p>
    </div>
    `)

//9
document.write(`<h1> ninth Asignment </h1>`); 

let NumOfUsDollars = 10;
let PriceOfUsDollars = 278.60;
let NumOfSaudiRiyals = 25;
let PriceOfSaudiRiyals = 74.27;

let UsDollarsToPKR = NumOfUsDollars * PriceOfUsDollars;
let SaudiRiyalsToPKR = NumOfSaudiRiyals * PriceOfSaudiRiyals;

let TotalPKR = UsDollarsToPKR + SaudiRiyalsToPKR;

document.write(`Total Currency in PKR is ${TotalPKR}`);

//10
document.write(`<h1> tenth Asignment </h1>`); 

let num = 7;

num = (num + 5)*10/2;

document.write(`(7 + 5) x 10 / 2 = ${num}`);

//11
document.write(`<h1> eleventh Asignment </h1>`); 
let CurrentYear = 2025;
let YearOfBirth = 2007;
let Age = CurrentYear - YearOfBirth;
document.write(`<p> Current Year is ${CurrentYear} </p>`); 
document.write(`<p> Year of Birth is ${YearOfBirth} </p>`); 
document.write(`<p> Age is ${Age} </p>`); 

// 12
document.write(`<h1> tweleveth Asignment </h1>`); 

let radius = 10;
let FindCircumference = 2 * Math.PI * radius;
let FindArea = Math.PI * radius **2;
document.write(` <p> If circle radius is ${radius} </p>`);
document.write(`<p>The Circumference of circle is ${FindCircumference}</p>`);
document.write(`<p>The area of circle is ${FindArea}</p>`);

//13
document.write(`<h1> thirtennth Asignment </h1>`); 

let FavouriteSnack = 'Cakes';
let CurrentAge = 17;
let MaximumAge = 100;
let SnackPerDay = 3;
let TotalSnack = (SnackPerDay * 365) * ( MaximumAge - CurrentAge);
document.write(`<p> Current Age is : ${CurrentAge}`);
document.write(`<p> Estimated Age is : ${MaximumAge}`);
document.write(`<p> Amount of snacks per day : ${SnackPerDay}`);
document.write(`<p> i will have ${TotalSnack} ${FavouriteSnack} until i become ${MaximumAge} years old`);

// All question has solved
