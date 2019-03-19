"use strict";
// Simple Genercs
var echo = function (data) {
    return data;
};
console.log(echo("Max"));
console.log(echo(25).length);
console.log(echo({ name: "max", age: 23 }));
// Bettet Generics
var betterEcho = function (data) {
    return data;
};
console.log(betterEcho("Max").length);
console.log(betterEcho(23));
console.log(betterEcho({ name: "max", age: 23 }));
// Built in generics
var testResults = [1.53, 32.45];
testResults.push(23);
// Arrays
var printAll = function (args) {
    args.forEach(function (element) { return console.log(element); });
};
printAll((["35", "Ada"]));
// Generics Types
var echo2 = betterEcho;
echo2("sd");
// Generics clasees
var MathC = /** @class */ (function () {
    function MathC(val1, val2) {
        this.baseValue = val1;
        this.multiplyValue = val2;
    }
    MathC.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return MathC;
}());
var simpleMath = new MathC("Ads", 20);
console.log(simpleMath.calculate());
