
// ---
// ## **for...in Loop – 5 Assignments (Objects)**
// 1. Given:
//    ```js
//    let obj = {a: 1, b: 2, c: 3};
//    ```
//    Print all keys.
let obj = { a: 1, b: 2, c: 3 }


for (const key in obj) {
    const element = obj[key];

    console.log(key);
}
// 2. Print all values of the object.
for (const key in obj) {
    const element = obj[key];

    console.log(element);
}

// 3. Find the sum of all values in an object.
let number = 0;
for (const key in obj) {
    const element = obj[key];
    number += element;
}
console.log(number);

// 4. Count how many properties an object has.
let length = 0;
for (const key in obj) {
    const element = obj[key];
    length++;
    console.log(length);
}
// 5. Given:
//    ```js
//    let student = {name: "Ali", age: 16, marks: 85};
//    ``
//    Print like:
//    `name: Ali`
//    `age: 16`
//    `marks: 85`
// ---
// If you actually solve these without copying, your brain will start doing that “oh I see patterns now” thing. If you just stare at them and open YouTube… congratulations, you’ve joined the infinite beginner loop.
let student = { name: "Ali", age: 16, marks: 85 };
for (const key in student) {
    const element = student[key];
    console.log(key + ':' + element);
}