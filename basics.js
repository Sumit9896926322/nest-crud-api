const p = console.log;

const forInWithObject = () => {
    const Person = {
        name: "Sumit singh",
        designation: "Developer Intern",
        interests: undefined
    }
    Object.defineProperty(Person, "age", {
        value: 11,
        enumerable: true // for in doesn't see this if enumerable = false
    })

    //Can't use for of with object because object is not iterable.

    for (let key in Person) {
        console.log("Value is ", key, "is", Person[key]);
    }
}

const forOfWithArray = () => {

    const arr = [undefined, 1, undefined, 2];


    for (let val of arr) {
        //for of will see values in iterables.
        console.log(val);
    }

    console.log("end-----------");
    for (let val in arr) {
        // for in will see key in objects and index in case of iterables  .
        console.log(arr[val]);
    }

}




const forOfIterables = () => {
    const map = new Map();

    for (let i = 1; i <= 10; i++) {
        if (i <= 5)
            map.set(i, undefined);
        else
            map.set(i, i);
    }
    for (let val of map) {
        console.log(val);
    }
}

const nestedArraywithForOf = () => {
    const arr1 = [];
    arr1.push([1, 2, 3]);
    arr1.push([4, 5, 6]);
    arr1.push([7, 8, 9]);

    for (let outer of arr1)
        for (let inner of outer)
            p(inner);

}



const pyramid = (rowsNum) => {
    let str = "";
    let mid = Math.ceil(rowsNum / 2);

    for (let i = 1; i <= rowsNum; i++) {

        let spaces = Math.abs(mid - i);
        for (let j = 1; j <= spaces; j++)
            str += " ";

        let stars = mid - spaces;
        for (let k = 1; k < stars; k++)
            str += "* ";

        str += "\n";
    }

    p(str);
}

//IIFE
((length) => {
    //odd length will lead to results
    let ladder = "";
    for (let row = 1; row <= length; row++) {
        for (let col = 1; col <= length; col++) {
            if (col == 1 || col == length || (row % 2 == 0 && col % 2 != 0))
                ladder += "#";
            else
                ladder += " ";

        }
        ladder += "\n";
    }
    p(ladder);

})(9);