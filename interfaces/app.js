"use strict";
var greet = function (person) {
    console.log("Hello " + person.name);
};
var person = {
    name: "Thal",
    age: 34,
    hobbies: ["hello"],
    greet: function (lastName) {
        console.log(this.name + " " + lastName);
    }
};
greet(person);
person.greet("lasfa");
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function (lastName) {
        console.log(this.name + " " + lastName);
    };
    ;
    return Person;
}());
var newPerson = new Person("Thal");
greet(newPerson);
newPerson.greet("Marcelin");
var myFunction = function (val, val2) {
    return val2 + val;
};
console.log(myFunction(12, 24));
var oldPerson = {
    name: "ad",
    age: 23,
    hobbies: ["hello"],
    greet: function (lastName) {
        console.log(this.name + " " + lastName);
    }
};
