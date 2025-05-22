// objects

const addmissionInfo = {
    name : 'Hassan',
    age : 17,
    'phone No' : 319374934794,
    CNIC : 4220123927392,
    // Exmple of object
    courses:{
        wma: 'Web and App Development',
        gd: 'Graphic Designing',
        dm: 'Digital Markeying'
    } // nested object
}


console.log(addmissionInfo.age)
console.log(addmissionInfo['phone No'])

console.log(addmissionInfo['courses']['gd'])