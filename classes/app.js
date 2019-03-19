"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 22;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(type);
    };
    return Person;
}());
var person = new Person("Thal", "Marcelin");
person.printAge();
person.setType("Cool Guy");
console.log(person);
var Thal = /** @class */ (function (_super) {
    __extends(Thal, _super);
    // name: string = "Thal2";
    function Thal(username) {
        return _super.call(this, "Thal2", username) || this;
    }
    return Thal;
}(Person));
var thal = new Thal("nan");
console.log(thal);
// Getter and Setter
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "Green Plant";
console.log(plant.species);
// Static properties & Methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCirconference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(Helpers.PI * 2);
console.log(Helpers.calcCirconference(23));
// Abstract Classes
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 0;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 3;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject(budget) {
        var _this = _super.call(this) || this;
        _this.budget = budget;
        return _this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject(123);
console.log(newProject);
newProject.changeName("Super project");
console.log(newProject);
