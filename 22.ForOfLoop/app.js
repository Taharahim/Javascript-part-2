
// ## **for...of Loop – 5 Assignments (Arrays)**

// 1. Given an array `[10, 20, 30, 40]`, print each element.
let tens = [10, 20, 30, 40]

for (const element of tens) {
    console.log(element)
}
// 2. Find the sum of all elements in an array.
let Sum = [10, 20, 30, 40]
let results = 0;
for (const element of Sum) {
    results += element;
}
console.log(results)

// 3. Count how many numbers in an array are greater than 50.
let arr = [34, 56, 66, 3, 43, 70]
let counter = 0;
for (const element of arr) {
    if (element >= 50) {
        counter++;
    }
}
console.log(counter);

// 4. Convert all strings in an array to uppercase.
//    Example: `["apple", "banana"] → ["APPLE", "BANANA"]`
let text = ["apple", "banana"];
let upper = [];
for (const Upper of text) {
    upper.push(Upper.toUpperCase());
}
console.log(upper);
// 5. Find the largest number in an array.
let sums = [34, 56, 66, 3, 43, 70]
let largest = sums[0]
for (const element of sums) {

    if (element > largest) {
        largest = element;
    }
}
console.log(largest);

