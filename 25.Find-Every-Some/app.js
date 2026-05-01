// | # | Task                                  |
// | - | ---------------FIND------------------ |
// | 1 | Find first even number in [1,3,5,8,9] |
let num = [1,3,5,8,9];
let arr1 = num.find(value => value % 2 === 0);
console.log(arr1);

// | 2 | Find first string longer than 5 chars |
let names = ['taha','rasekh','ali'];
let arr2 = names.find(value => value.length > 5);
console.log(arr2);

// | 3 | Find user with id = 3                 |
let user = [  { name: "Ali", id:1 },  { name: "Sara", id: 2 },  { name: "Ahmed", id: 3}];
let arr3 = user.find(value => value.id === 3);
console.log(arr3);

// | 4 | Find first negative number            |
let neg = [1,-3,-5,8,9];
let arr4 = neg.find(value => value < 0);
console.log(arr4);

// | 5 | Find first product price > 1000       |
let grocery = [ { product: "rice", price:1200 }, { product: "Sugar", price: 2500 },{ product: "flour", price: 300}];
let arr5 = grocery.find(value => value.price > 1000);
console.log(arr5);

// | # | Task                                 |
// | - | ------------EVERY----------------------- |
// | 1 | Check if all numbers are > 0         |
let checker = [1,3,-5,8,9];
let arr6 = checker.every(value => value > 0);
console.log(arr6);

// | 2 | Check if all users are adults        |

const adults = [  { name: "Ali", age: 17 },  { name: "Ahmed", age: 22 },  { name: "Sara", age: 19 }];
let arr7 = adults.every(value => value.age >= 18 );
console.log(arr7);

// | 3 | Check if all strings have length > 2 |
let word = ['now','yes','no'];
let arr8 = word.every(value => value.length > 2);
console.log(arr8);

// | 4 | Check if all products are in stock   |
let elements = [ { product: "rice", active : true }, { product: "Sugar", active : true },{ product: "flour", active : true}];
let arr9 = elements.every(value => value.active === true);
console.log(arr9);

// | 5 | Check if all marks are above 40      |
const student = [  { name: "Ali", mark: 30 },  { name: "Ahmed", mark: 43 },  { name: "Sara", mark: 55}];
let arr10 = student.every(value => value.mark > 40);
console.log(arr10);

// | 6 | Check if all numbers are even      |
let num2 = [1,3,5,8,9];
let arr11 = num2.every(value => value % 2 === 0);
console.log(arr11);

// | 7 | Check if all users are adults      |
const adultery = [  { name: "Ali", age: 17 },  { name: "Ahmed", age: 22 },  { name: "Sara", age: 19 }];
let arr12 = adultery.every(value => value.age >= 18 );
console.log(arr12);

// | 8 | Check if all strings length > 3    |
let words = ['now','yes','none'];
let arr13 = words.every(value => value.length >= 3);
console.log(arr13);

// | 9 | Check if all marks > 40            |
const students = [  { name: "Ali", mark: 30 },  { name: "Ahmed", mark: 43 },  { name: "Sara", mark: 55}];
let arr14 = students.every(value => value.mark > 40)
console.log(arr14);

// | 10 | Check if all products are in stock |
let items = [ { product: "rice", active : true }, { product: "Sugar", active : true },{ product: "flour", active : true}];
let arr15= items.every(value => value.active === true)
console.log(arr15);

// | # | Task                               |
// | - | --------------SOME-------------------- |
// | 1 | Check if some number is negative   |
let negative = [1 ,-3 ,4 ,6 ,8]
let arr16 = negative.some(value => value < 0)
console.log(arr16);

// | 2 | Check if some user is admin        |
let servers = [{ name:'rasekh', position:'player'},{ name:'ibrahim', position:'player'},{ name:'taha', position:'admin'},{ name:'ahmed', position:'player'},]
let arr17 = servers.some(value => value.position === 'admin')
console.log(arr17);

// | 3 | Check if some string contains "a"  |
let letter = ['usman','taha','obaid'];
let arr18 = letter.some(value => value.includes('a'));
console.log(arr18);

// | 4 | Check if some product price > 1000 |
let groceries = [ { product: "rice", price:1200 }, { product: "Sugar", price: 2500 },{ product: "flour", price: 300}];
let arr19 = groceries.some(value => value.price > 1000);
console.log(arr19);
// | 5 | Check if some array has 0          |

let sum = [1 ,3 ,4 ,6 ,8];
let arr20 = sum.some(value => value === 0);
console.log(arr20);