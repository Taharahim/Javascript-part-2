// Given:

// let fruits = ["apple", "banana", "mango", "orange"];

// Task:
// Use forEach to print:

// 0 apple
// 1 banana
// 2 mango
// 3 orange
// 2. Sum of Numbers


let fruits = ["apple", "banana", "mango", "orange"];

fruits.forEach((value, index) => {
    console.log(index + " " + value);
})


// Given:

// let nums = [10, 20, 30, 40];
// Use forEach to calculate the total sum and print it.
// Expected output:100

let nums = [10, 20, 30, 40];
let total = 0
nums.forEach((value) => {
    total += value
}, 0)
console.log(total);

// Task:
// 3. Count Even Numbers
// Given:
// let numbers = [1, 2, 3, 4, 5, 6, 8];
// Use forEach to count how many even numbers are in the array.

let numbers = [1, 2, 3, 4, 5, 6, 8];
let count = 0;
numbers.forEach((value) => {
    if (value % 2 === 0) {
        count++
    }
}, 0)
console.log(count);

// Task:
// 4. Modify External Array
// Given:
// let nums = [1, 2, 3, 4];
// Task:
// Use forEach to create a new array where each number is squared.
// Expected:
// [1, 4, 9, 16]
// Yes, I know map is better for this. Do it anyway. Pain builds skill.

let digit = [1, 2, 3, 4];

digit.forEach((value) => {
    console.log(value * value);

}, 0)

// 5. Extract Names from Objects

// Given:

// let users = [
//   { name: "Taha", age: 18 },
//   { name: "Ali", age: 20 },
//   { name: "Sara", age: 19 }
// ];
// Task:
// Use forEach to create a new array that only contains names:

// ["Taha", "Ali", "Sara"]

let users = [
    { name: "Taha", age: 18 },
    { name: "Ali", age: 20 },
    { name: "Sara", age: 19 }
];
let arr = [];
users.forEach((value) => {
    arr.push(value.name);
})
console.log(arr);