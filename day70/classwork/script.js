class Person{
    constructor(name, age, lastname, coutry){
        this.name = name;
        this.age = age;
        this.lastname = lastname;
        this.coutry = coutry;
    }
}


const firstobject = new Person("luka", 10, "ivanishvili", "rustavi");
const secondObject = new Person("nino", 25, "beridze", "tbilisi");
const thirdObject  = new Person("giorgi", 32, "kapanadze", "batumi");
const fourthObject = new Person("mari", 18, "chkheidze", "kutaisi");


console.log(firstobject);
console.log(secondObject);
console.log(thirdObject);
console.log(fourthObject);

//class – არის ობიექტის გეგმა
// New instance – ეს არის კონკრეტული ობიექტი, რომელიც შეიქმნა კლასის მიხედვით new სიტყვით