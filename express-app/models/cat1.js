module.exports = class Cat {
    static catsList = [];
    static catNum = 0;
    id = 0
    name = '';
    age = 0;
    breed = '';

    constructor(id, name, age, breed) {
        this.id = id
        this.name = name;
        this.age = age;
        this.breed = breed;
    }

    addToCats(cat) {
        this.cats.push();
    }

    deleteFromCats(cat) {

    }

    showCats() {
        return this.catsList;
    }
}
