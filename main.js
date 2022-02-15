import input from 'input';

async function prompt(cars) {
    while (true) {
        let name = await input.text('Enter your name');
        let urMake = await input.text('Enter the make of your car');
        let urModel = await input.text('Enter the model of your car');
        let urYear = await input.text('Enter the year of your car');
        let done = await input.confirm('Are you finished?');
        const yourCar = {
            make:'',
            model:'',
            year:'',
        }
        yourCar.make = urMake;
        yourCar.model = urModel;
        yourCar.year = urYear;
        cars.set(name, yourCar);
        if (done) {
            break;
        }
    }
}

function display(cars) {
  for (const [name, yourCar] of cars) {
      console.log(`${name} has a ${yourCar.year} ${yourCar.make} ${yourCar.model}`);
  }
}

async function main() {
    const cars = new Map();

    await prompt(cars);
    display(cars);
}

main();