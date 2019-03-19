"use strict";
var genericsFunction = function (val1, val2) {
    return +val2 + +val2;
};
genericsFunction("asf", "asf");
var Map = /** @class */ (function () {
    function Map() {
        this.map = {};
    }
    Map.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    Map.prototype.getItem = function (key) {
        return this.map[key];
    };
    Map.prototype.clear = function () {
        this.map = {};
    };
    Map.prototype.printMap = function () {
        for (var key in this.map) {
            console.log(key, this.map[key]);
        }
    };
    return Map;
}());
var numberMap = new Map();
numberMap.setItem("Apples", 10);
numberMap.setItem("person", 23);
var neas = numberMap.getItem("Apples");
console.log(neas);
numberMap.printMap();
