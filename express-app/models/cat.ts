class Cat{

    private cats:Array<string> = [];
    name:string = '';
    age:number = 0;
    bread:string = '';


    constructor(name:string,age:number,bread:string){
        this.name = name;
        this.age = age;
        this.bread = bread;
    }

    addToCats(cat:Cat){
        this.cats.push();
    }

    deleteFromCats(cat:Cat){

    }

    showCats(){
        return this.cats;
    }
}

function check(name:string){
    console.log(name);
}
export default {Cat,check};