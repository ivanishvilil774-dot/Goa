
function Car(make, model, year, color) {
    this.make = make;  
    this.model = model;  
    this.year = year;    
    this.color = color;  
    
    
//2

    this.getDiscription = function(){
        console.log(`${this.year} წლის ${this.color} ${this.make} ${this.model}`);
    }

    if(this.year <  2000){
        console.log("this car is old")
    }else{
        console.log("this car is new")
    }
}

const myCar = new Car("Toyota", "Corolla", 2020, "Black");

const secondCar = new Car("Honda", "Civic", 2018, "White");
const thirdCar = new Car("BMW", "X5", 2022, "Blue");

console.log(myCar.getDescription());
console.log(secondCar.getDescription());
console.log(thirdCar.getDescription());


// 3 


function Book(title, author, years, genre){
    this.title = title;
    this.author = author;
    this.years = years;
    this.genre = genre;

    if(typeof this.year === "number" && this.title.length >= 3){
        console.log(`The book name is ${this.title}, its author is ${this.author} and the book was released in ${this.year}`);
    }else{
        console.log("Error: Invalid book data")
    }

}


const book1 = new Book("Harry Potter", "J.K. Rowling", 1997, "Fantasy");  
const book2 = new Book("It", "Stephen King", "1997", "Horror");  



console.log(book1)
console.log(book2)




//4
class Movie {
    constructor(title, director, rating, releaseYear) {
        this.title = title;
        this.director = director;
        this.rating = rating;
        this.releaseYear = releaseYear;
    }

    isHit() {
        if (this.rating > 8) {
            return true;
        }
        return false;
    }
}

const Movie1 = new Movie("Inception", "Christopher Nolan", 9.0, 2010);
const Movie2 = new Movie("The Dark Knight", "Christopher Nolan", 9.1, 2008);
const Movie3 = new Movie("Avatar", "James Cameron", 7.8, 2009);

console.log(Movie1);
console.log(Movie2);
console.log(Movie3);



// 5

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }

    
    set dimensions(value) {
        if (typeof value === "number" && value > 1) {
            this.width = value;
            this.height = value;
        } else {
            console.log("Invalid dimensions");
        }
    }
}


const rect1 = new Rectangle(5, 10);
const rect2 = new Rectangle(7, 3);

console.log(rect1.area);
console.log(rect2.area); 

rect1.dimensions = 8; 
console.log(rect1.area);

rect2.dimensions = 0; 
console.log(rect2.area); 



// 6

// Function constructor არის ფუნქცია, რომელიც გამოიყენება ობიექტების შესაქმნელად.


// Class არის სინტაქსური შაქარი (syntactic sugar) function constructor-ზე რაც ნიშნავს, რომ შიგნით მაინც function constructor-ის მსგავსი ლოგიკაა,
