const p = console.log;

let var1:string = "sumit";

let arr:Array<string> = ["mark","sam","shaurya"];
let arr2:number[] = [1,2,3,4];

let arrin2d:Array<Array<string>> = [["sumit","rahul"],["rajesh","mark"]];

let tuple1:[string,number,boolean] = ["jack",12,false];

let ca:number = 2.4;

enum ranking{
    one,
    two ,
    three = "3",
    four = "4"
}

let c:ranking = ranking.three;
p(c);

function callApi(result:number,error:boolean):number|string{
    if(error)
        return "Wrong api hit";   
    return result;
}

function sum(num1:number ,num2?:number){
    if(num2)
        return num1+num2;
}

p(callApi(12,true));
p(callApi(14,false));


p(sum(10));


interface book{
    name:string;
    author:string;
    pages:number;
}
let book1:book = {
    name:"The complete guide to typescript",
    author:"Jayson L. wids",
    pages:500
}

function validBook(bookName:book):book{
    let book2:book = {
        name:"Auto generated book",
        author:"Unknown",
        pages:120
    };

    if(bookName.pages > 0) return bookName;
    return book2;
}


p(validBook(book1));