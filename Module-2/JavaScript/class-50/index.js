class createProfile {
    #Password
    constructor(FullName , UserName , Email , Password) {
        this.name = FullName;
        this.UserName = UserName;
        this.Email = Email;
        this.#Password = Password;
    }

    greet(){
        console.log(`Hello ${this.name}!`)
    }

    showUserData(){
        console.log(`Your username is ${this.UserName} , Email is ${this.Email} and password is ${this.#Password}`)
    }
}

let profile1 = new createProfile('Hassan Javaid' , 'hassan474' , 'javaidhassan474@gmail.com' , 'hassan.92')

// console.log(profile1)

// profile1.showUserData()

class admin extends createProfile {
    constructor(FullName , UserName , Email , Password) {
        super(FullName , UserName , Email , Password)
    }

    dataForAdmin(){
        console.log(`${this.UserName}'s Email is ${this.Email} and password is ${this.Password}`)
    }
}

let Admin = new admin('Hassan Javaid' , 'hassan474' , 'javaidhassan474@gmail.com' , 'hassan.92')

console.log(Admin)