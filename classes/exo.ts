class Car {
    private name: string;
    private _acceleration: number = 0;

    constructor(name: string){
        this.name = name;
    }

    get acceleration(): number{
        return this._acceleration;
    }

    honk(): void {
        console.log("Tooososos");
    }

    accelerate(speed: number): void{
        this._acceleration = speed;
    }
}

const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);


// Exo 2

abstract class BaseObject {
    width: number = 0;
    length: number = 0;
}

class Rectangle {
    
}
