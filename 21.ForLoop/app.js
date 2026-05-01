
// ## **For Loop – 5 Assignments**
// 1. Print numbers from 1 to 50.
//    Then modify it to print only even numbers.


for (let i = 1; i <= 50; i++) {
    console.log(i);
}

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    };
}




// 2. Find the sum of numbers from 1 to 100.

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i; // This adds the current value of 'i' to our total
}

console.log(sum);


// 3. Take a number `n` and print its multiplication table (e.g., 7 × 1 → 7 × 10).
let table = 7;
for (let j = 1; j <= 10; j++) {
    console.log(`${table} X ${j} = ${table * j}`);
}



// 4. Count how many numbers between 1 and 100 are divisible by 3.
let count = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        count++;
    };
}

console.log(count);

// 5. Reverse a number (e.g., 1234 → 4321) using a loop.
let num = 1234;
let result = 0;
while (num > 0) {
    let digit = num % 10;
    result = (result * 10) + digit;
    num = Math.floor(num / 10)
}
console.log(result);

