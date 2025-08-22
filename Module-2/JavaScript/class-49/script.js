// class ===> blueprint 
// object has two things properties and methods

class person {
    //properties
    name = 'Hassan';
    age = 17;
    role = 'student';
    //methods
    greeting(){
        console.log(`Hello ${this.name}`)
    }
}

let p1 = new person()

p1.greeting()
console.log(p1);
      
class studentAdmissions{
    constructor(name , age , cnic) {
        this.name = name;
        this.age = age;
        this.cnic = cnic;
    }

    greeting(){
        console.log(`Hello ${this.name}`)
    }
    info(){
        console.log(this)
    }
}


let student1 = new studentAdmissions('hassan' , 17 , 42201984938);
console.log(student1);

student1.greeting()
student1.info()

//? Inheritence

class Admin extends studentAdmissions {
    constructor(name , age , cnic , role){
        super(name , age , cnic)
        this.role = role;
    }
}

let admin = new Admin('hassan' , 17 , 42201984938)

admin.greeting()