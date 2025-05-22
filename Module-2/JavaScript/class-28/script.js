// const person = {
//     name: 'Ali',
//     age: 17,
//     'roll No': 344820,
//     courses: {
//         WAD : 'Web and App Development',
//         GD: 'Graphic designing',
//         genAi : 'Genreative AI'
//     }
// }

// // add key and value object

// person.phone = 321838448; // add key and value to obj
// delete person.phone // remove key and value to obj



// // loop for objects 

// for(key in person){
//     console.log(`The value of ${key} is ${person[key]}`)
// }

// rollNo = 'roll No'

// console.log(person[rollNo])

// 

const applyForAdmission = [
    {
        name: 'Ali',
        age: 23,
        "roll No": 84578,
        courses: {
            WAD : 'Web and App Development',
            GD: 'Graphic designing',
            genAi : 'Genreative AI'
        }
    },
    {
        name: 'Hassan',
        age: 17,
        "roll No": 344820,
        courses: {
            WAD : 'Web and App Development',
            GD: 'Graphic designing',
            genAi : 'Genreative AI'
        }
    },
    {
        name: 'Affan',
        age: 15,
        "roll No": 83478,
        courses: {
            WAD : 'Web and App Development',
            GD: 'Graphic designing',
            genAi : 'Genreative AI'
        }
    },
    {
        name: 'Hammad',
        age: 10,
        "roll No": 83248,
        courses: {
            WAD : 'Web and App Development',
            GD: 'Graphic designing',
            genAi : 'Genreative AI'
        }
    },
    {
        name: 'Ayan',
        age: 22,
        "roll No": 83748,
        courses: {
            WAD : 'Web and App Development',
            GD: 'Graphic designing',
            genAi : 'Genreative AI'
        }
    }

]

for (let i = 0; i < applyForAdmission.length; i++) {
    if (applyForAdmission[i].name === 'Hassan') {
        console.log(`${applyForAdmission[i].name}'s roll number has found your roll number is ${applyForAdmission[i]['roll No']} `)
        break;
    }
    
}

// method in object

const bio = {
    firstName : 'Hassan',
    fatherName : 'Javaid',
    Class : 'Second year',
    greeting(){
      return `Hello ${this.firstName} ${this.fatherName}`
    }
}

console.log(bio.greeting())

