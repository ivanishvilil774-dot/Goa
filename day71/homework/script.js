const form = document.querySelector("form");
const button = document.querySelector("button");
const cars = []; // better plural name

class Cars {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

button.addEventListener("click", (e) => {
    e.preventDefault();

    // Get values from form
    const make = form.make.value;
    const model = form.model.value;
    const year = form.year.value;

    // Create new car object
    const newCar = new Cars(make, model, year);

    // Add to array
    cars.push(newCar);


    // Reset form
    form.reset();

    // Add row to table
    const table = document.querySelector("table"); // Make sure table exists in HTML
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${make}</td>
        <td>${model}</td>
        <td>${year}</td>
    `;
    table.appendChild(row);
});

