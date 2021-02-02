var p = console.log;
var var1 = "sumit";
var arr = ["mark", "sam", "shaurya"];
var arr2 = [1, 2, 3, 4];
var arrin2d = [["sumit", "rahul"], ["rajesh", "mark"]];
var tuple1 = ["jack", 12, false];
var ca = 2.4;
var ranking;
(function (ranking) {
    ranking[ranking["one"] = 0] = "one";
    ranking[ranking["two"] = 1] = "two";
    ranking["three"] = "3";
    ranking["four"] = "4";
})(ranking || (ranking = {}));
var c = ranking.three;
p(c);
function callApi(result, error) {
    if (error)
        return "Wrong api hit";
    return result;
}
function sum(num1, num2) {
    if (num2)
        return num1 + num2;
}
p(callApi(12, true));
p(callApi(14, false));
p(sum(10));
var book1 = {
    name: "The complete guide to typescript",
    author: "Jayson L. wids",
    pages: 500
};
function validBook(bookName) {
    var book2 = {
        name: "Auto generated book",
        author: "Unknown",
        pages: 120
    };
    if (bookName.pages > 0)
        return bookName;
    return book2;
}
p(validBook(book1));


//decorators 


