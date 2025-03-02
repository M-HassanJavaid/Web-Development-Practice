function AgeCalculator(Month, DobDate, Year) {
    
const Today = new Date();

let CurrentYear = Today.getFullYear();
let CurrentDate = Today.getDate();
let CurrentMonth = Today.getMonth() + 1;

let AgeInYears = CurrentYear - Year; 
if ((Month > CurrentMonth) || (Month === CurrentMonth && DobDate > CurrentDate)) {
    if (AgeInYears != 0) {
        AgeInYears--;
    }
} 

let AgeInMonths;
let AgeInDays;
let LastMonthDate = new Date(CurrentYear , CurrentMonth - 1 , 0).getDate();

if (Month > CurrentMonth) {
    AgeInMonths = (12 - Month) + CurrentMonth;
} else{
    AgeInMonths = CurrentMonth - Month;
}

if (DobDate > CurrentDate) {
    if (AgeInMonths != 0) {
        AgeInMonths--;
    }
    AgeInDays = (LastMonthDate - DobDate) + CurrentDate;
} else{
    AgeInDays = CurrentDate - DobDate;
}

AgeInDays = Math.abs(AgeInDays);

return {
    Years : AgeInYears,
    Days : AgeInDays,
    Months : AgeInMonths
} 

}

let DateInput = document.getElementById('date');
let OutputContainer = document.getElementById('Output');
let Input = document.getElementById('Input');
let btn = document.querySelectorAll('.btn');
let OutputPara = document.getElementById('Output-p');
let check = 0;

DateInput.max = new Date().toISOString().split('T')[0];


btn.forEach((element)=>{
    element.addEventListener('click' , ()=>{
        let DateInputValue = DateInput.value.split('-');
        let Age = AgeCalculator(DateInputValue[1], DateInputValue[2], DateInputValue[0])
        if (check === 0) {
            OutputPara.innerHTML = `You are ${Age.Years} years , ${Age.Months} months and ${Age.Days} days old.`
            Input.style.height = '0%';
            Output.style.height = '100%';
            check = 1;
        } else {
            Input.style.height = '100%';
            Output.style.height = '0%';
            OutputPara.innerHTML = ``;
            check = 0;
        }
    });
});

