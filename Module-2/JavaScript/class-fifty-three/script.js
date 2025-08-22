// Oop (Object Oriented Programming)

// Spaghetti Code 

// class is like the blue print of object

class car {
    constructor(brand , Model , Category){
        this.brand = brand;
        this.Model = Model;
        this.Category = Category;
    }

    introduction(){
        console.log(`This is a ${this.Category} ${this.Model} of ${this.brand}`)
    }
}

const newCar = new car('supra' , 'supra MK4' , 'Sports');
newCar.introduction()
console.log(newCar)

class ElectricCar extends car{
    constructor(brand , Model , Category, batterCapacity , ChargeTimimg) {
        super(brand , Model , Category);
        this.batterCapacity = batterCapacity;
        this.ChargeTimimg = ChargeTimimg;
    }
}

console.log(new ElectricCar('Tesla' , 'Tesla Cybertruck' , 'Electric' , '100km' , '1 hours'))

class BankAcount {
    accountHolder;
    #accountNumber;
    #balance;
    constructor(accountHolder , accountNuumber , balance) {
        this.accountHolder = accountHolder;
        this.#accountNumber = accountNuumber;
        this.#balance = balance;

        
    }
}

const bankAcount1 = new BankAcount('Hassan Javaid' , 209030903 , 999);

console.log(bankAcount1)