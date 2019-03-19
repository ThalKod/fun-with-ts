"use strict";
var Car = /** @class */ (function () {
    function Car(name) {
        this._acceleration = 0;
        this.name = name;
    }
    Object.defineProperty(Car.prototype, "acceleration", {
        get: function () {
            return this._acceleration;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.honk = function () {
        console.log("Tooososos");
    };
    Car.prototype.accelerate = function (speed) {
        this._acceleration = speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
// Exo 2
var BaseObject = /** @class */ (function () {
    function BaseObject() {
        this.width = 0;
        this.length = 0;
    }
    return BaseObject;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    return Rectangle;
}());
