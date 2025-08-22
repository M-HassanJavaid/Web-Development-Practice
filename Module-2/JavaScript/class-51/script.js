class studentAdmission {
    #password
    constructor(name , fatherName , age , cnic , course , password) {
        this.name = name;
        this.fatherName = fatherName;
        this.age = age
        this.cnic = cnic;
        this.course = course;
        this.#password = password
    }

    changePassword(newPassword){
        this.#password = newPassword;
        console.log(`your new password is ${this.#password}`)
    }

    findPassword(){
        console.log(`Dear ${this.name}, Your password is ${this.#password}`)
    }

    greeting(){
        console.log(`hello ${this.name}`)
    }
}

let student1 = new studentAdmission('Hassan' , 'Javaid' , 17 , 42209103832 , 'Web Development' , 'hassan.92')

console.log(student1)
student1.changePassword('hello')
student1.findPassword()

console.log(JSON.stringify(student1))

//! Work of new keyword
//1, Enable this in class
//2, initial value of this will be {}
//3, return this from class
//4, call the constructor

class teacherAdmission extends studentAdmission {
    constructor(name , fatherName , age , cnic , course , password) {
        super(name , fatherName , age , cnic , course , password)
    }

    greeting(){
        console.log(`hello sir ${this.name}`)
        super.greeting()
    }

    showPassword(){
        console.log(`your password is ${this.#password}`)
    }
}
let teacher = new teacherAdmission('Ali' );

teacher.greeting()

console.log(teacher)