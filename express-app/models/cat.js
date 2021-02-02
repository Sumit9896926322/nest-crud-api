"use strict";
exports.__esModule = true;
var Cat = /** @class */ (function () {
    function Cat(name, age, bread) {
        this.cats = [];
        this.name = '';
        this.age = 0;
        this.bread = '';
        this.name = name;
        this.age = age;
        this.bread = bread;
    }
    Cat.prototype.addToCats = function (cat) {
        this.cats.push();
    };
    Cat.prototype.deleteFromCats = function (cat) {
    };
    Cat.prototype.showCats = function () {
        return this.cats;
    };
    return Cat;
}());
function check(name) {
    console.log(name);
}
exports["default"] = { Cat: Cat, check: check };
