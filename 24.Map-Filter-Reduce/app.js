// MAP – Assignments

// (map = transform each element, same length output)

// #	Task
// 1	Given [1, 2, 3, 4], return a new array where each number is doubled

let num = [1, 2, 3, 4];

let arr = num.map((element => element * 2)
)
console.log(arr);



// 2	Convert ["ali", "taha", "ahmed"] to uppercase
let username = ["ali", "taha", "ahmed"];

let arr2 = username.map(text => text.toUpperCase())
console.log(arr2);


// 3    Given [5, 10, 15], return array of their squares
let squares = [5, 10, 15];

let arr3 = squares.map((value) => {
    return value * value;
})
console.log(arr3);

// 4	Given [100, 200, 300], convert to prices with tax (+10%)

let digits = [100, 200, 300];
let arr4 = digits.map((value) => {
    return value + (value * 0.10)
})

console.log(arr4);

// 5	Given [{name: "Ali"}, {name: "Sara"}], return ["Ali", "Sara"]
let obj = [{ name: "Ali" }, { name: "Sara" }];
let arr5 = obj.map(value => value.name);
console.log(arr5);



// FILTER – Assignments
// (filter = keep only matching elements)

// #	Task
// 1	From [10, 25, 30, 45], get numbers greater than 20

let nums = [10, 25, 30, 45];
let arr6 = nums.filter((value) => {
    return value > 20;
}
)
console.log(arr6);

// 2	From [1, 2, 3, 4, 5, 6], get only even numbers

let num1 = [1, 2, 3, 4, 5, 6];

let arr7 = num1.filter((value) => {
    return value % 2 === 0
})
console.log(arr7);


// 3	From ["apple", "banana", "kiwi"], get words longer than 5 letters

let fruits = ["apple", "banana", "kiwi"];

let arr8 = fruits.filter((value) => {
    return value.length > 5;
})

console.log(arr8);




// 4	From [true, false, true, false], get only true values
let bool = [true, false, true, false];
let arr9 = bool.filter((value) => {
    return value
})
console.log(arr9);

// 5	From [{age: 15}, {age: 20}, {age: 17}], get people older than 18


let age = [{ age: 15 }, { age: 20 }, { age: 17 }];

let arr10 = age.filter(value => value.age > 18);


console.log(arr10);


// REDUCE – Assignments

// (reduce = turn array into one value)

// #	Task
// 1	Find sum of [10, 20, 30, 40]
let sum = [10, 20, 30, 40];

let array = sum.reduce((value, value2) => {
    return value + value2
})

console.log(array);


// 2	Find product of [2, 3, 4] (multiply all)
let sum2 = [2, 3, 4];

let array2 = sum2.reduce((value, value2) => {
    return value * value2
})
console.log(array2);


// 3	Find largest number in [5, 9, 2, 11, 3]
let sum3 = [5, 9, 2, 11, 3];
let array3 = sum3.reduce((value, value2) => {
    return value > value2 ? value : value2;
})
console.log(array3);

// 4	Count total characters in ["hi", "hello", "hey"]

let text3 = ["hi", "hello", "hey"];

let array4 = text3.reduce((total, value) => {
    return total + value.length;
}, 0)
console.log(array4);



// 5	From [100, 200, 300], calculate total with 10% tax added[]

let sum4 = [100, 200, 300];

let array5 = sum4.reduce((total, value) => {
    let tax = value + (value * 0.10);
    return total + tax;
}, 0);
console.log(array5);
