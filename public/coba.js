const Car = require("../public/scripts/car");
const carsData = require("../data/cars.json");

// Car.init(carsData);
const data = carsData.map((car) => new Car(car));
const innerHTML = data.map((car) => car.show());

console.log(typeof Car);
