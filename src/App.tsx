import React from 'react';
import './App.css';


// Define the Vehicle interface
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// Implement the Car class that adheres to the Vehicle interface
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Implement the start method
  start(): void {
    console.log("Car engine started");
  }
}

function App() {
  // Create an instance of the Car class
  const myCar = new Car('Toyota', 'Corolla', 2022);

  // Handle the start button click event
  const handleStartCar = () => {
    myCar.start(); // Call the start method
  };

  return (
    <div className="App">
      <h1>Vehicle Information</h1>
      <p>Make: {myCar.make}</p>
      <p>Model: {myCar.model}</p>
      <p>Year: {myCar.year}</p>
      <button onClick={handleStartCar}>Start Car</button>
    </div>
  );
}

export default App;
