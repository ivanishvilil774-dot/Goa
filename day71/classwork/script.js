// კლასის შექმნა
class Account {
    // კონსტრუქტორი — იღებს პაროლს, იმეილს და სახელს
    constructor(password, email, name) {
        this._password = password; // "პირადი" სტილი (დაქვედკეტილი ხაზი)
        this._email = email;       // "პირადი" სტილი
        this.name = name;          // საჯარო ველი
    }

    // introduce მეთოდი — ბეჭდავს მომხმარებლის სახელს
    introduce() {
        console.log(`მე მქვია ${this.name}`);
    }

    // setter — პაროლის შესაცვლელად ვალიდაციით
    set password(newPassword) {
        let longEnough = newPassword.length >= 6;   // მინ. 6 სიმბოლო
        let hasNumber = false;
        let hasLetter = false;

        // ვამოწმებთ თითოეულ სიმბოლოს
        for (let char of newPassword) {
            if (!isNaN(char) && char !== " ") {     // რიცხვია?
                hasNumber = true;
            } else if (char.toLowerCase() !== char.toUpperCase()) { // ასოა?
                hasLetter = true;
            }
        }

        if (longEnough && hasNumber && hasLetter) {
            this._password = newPassword;
            console.log("✅ პაროლი წარმატებით შეიცვალა!");
        } else {
            console.log("❌ პაროლი უნდა იყოს მინიმუმ 6 სიმბოლო, შეიცავდეს რიცხვს და ინგლისურ ასოს!");
        }
    }

    // getter — აბრუნებს იმეილს
    get email() {
        return this._email;
    }
}

// გამოყენების მაგალითი
let acc = new Account("pass123", "user@mail.com", "LUKA");

acc.introduce();         // მე მქვია გიორგი
console.log(acc.email);  // user@mail.com

acc.password = "abc";    // ❌ არ შეცვლის
acc.password = "abc123"; // ✅ შეცვლის


// 2 
class Vehicle {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }

    startEngine() {
        return `The engine of ${this.brand} is starting.`;
    }

    getInfo() {
        return `This is a ${this.brand} made in ${this.year}.`;
    }
}

class Car extends Vehicle {
    constructor(brand, year, doors = 4) {
        super(brand, year); // super უნდა იყოს პირველი
        this.doors = doors;
    }

    honk() {
        return "Beep Beep";
    }
}

class Motorcycle extends Vehicle {
    constructor(brand, year, hasSidecar = true) {
        super(brand, year);
        this.hasSidecar = hasSidecar;
    }

    revEngine() {
        return "Vrrrooooom";
    }
}

const myCar = new Car("Toyota", 2020);
console.log(myCar.startEngine()); // The engine of Toyota is starting.
console.log(myCar.honk());        // Beep Beep
console.log(myCar.getInfo());     // This is a Toyota made in 2020.

const myBike = new Motorcycle("Harley-Davidson", 2018);
console.log(myBike.startEngine()); // The engine of Harley-Davidson is starting.
console.log(myBike.revEngine());   // Vrrrooooom
console.log(myBike.getInfo());     // This is a Harley-Davidson made in 2018.


//3 

const form = document.querySelector("form");

const account = []

class Account{
    constructor(email, password, fullname){
        this._email = email;
        this._password = password;
        this.fullname = fullname;
    }

    set password(newPassword){
        this.password = newPassword;
    }

    get email(){
        return this.email
    }

}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = form.email.value;
    const pass = form.pass.value;
    const fullname = form.fullname.value;

    // ახალი ობიექტი
    const account = new Account(email, pass, fullname);

    // მასივში დამატება
    accounts.push(account);

    // ტესტი
    console.log(account);
    console.log(accounts);
});