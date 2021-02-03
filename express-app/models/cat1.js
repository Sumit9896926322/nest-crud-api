module.exports = class Cat {
    static catsList = [{ "id": 1, "name": "razor", "age": "20", "breed": "labra" }, { "id": 2, "name": "lucy", "age": "12", "breed": "doberman" }, { "id": 3, "name": "jack", "age": "20", "breed": "labra" }];
    static catNum = 3;
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
