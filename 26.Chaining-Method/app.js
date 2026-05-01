
// | # | Task                                               |
// | - | --------------------CHAINING------------------------------ |
// | 1 | Get names of users age > 18                        |
const ages = [  { name: "Ali", age: 17 },  { name: "Ahmed", age: 22 },  { name: "Sara", age: 19 }];
let chain1 = ages.filter(value => value.age >= 18).map(value => value.name)
console.log(chain1);

// | 2 | Get prices of products < 500                       |
let ration = [ { product: "rice", price:200 }, { product: "Sugar", price: 500 },{ product: "flour", price: 300}];
let chain2 = ration.filter(value => value.price < 500).map(value => console.log(`${value.product} is ${value.price}`));
console.log(chain2);
// | 3 | From numbers → double them → keep > 10             |
let number = [ 1,2,4,6,7];
let chain3 = number.map(value => value * 2).filter(value => value > 10);
console.log(chain3);

// | 4 | From users → filter active → get emails            |
const email = [
    { email: "Ali55@gmail.com", active: true },
    { email: "Sara21@gmail.com", active: false },
    { email: "Ahmed33@gmail.com", active: true }
];
let chain4 = email.filter(value => value.active === true).map(value => value.email)
console.log(chain4);

// | 5 | From orders → filter paid → sum total (use reduce) |
let sold = [ 
    { Sp: 1300, price:'paid' }, 
    { Sp: 3500, price:'paid' }, 
    { Sp: 5500, price:'paid' }, 
];
let total = 0;
let chain5= sold.filter(value =>value.price === 'paid').reduce((total ,value)=>{
    return total + value.Sp ;
},0)
console.log(chain5);

// | 6 | Filter even numbers → double them           |
let digit = [1,5,7,9,11];
let chain6 = digit.filter(value => value % 2 === 0).map(value => value * 2);
console.log(chain6);

// | 7 | Filter active users → get names             |
let username = [
    { name: "taha", active : true },
    { name: "amaan", active : true },
    { name: "zoya", active : true}];
    
    let chain7 = username.filter(value => value.active).map(value => value.name); 
    console.log(chain7);
    
    // | 8 | Filter products < 500 → get prices          |
    let products = [ { product: "rice", price:200 }, { product: "Sugar", price: 500 },{ product: "flour", price: 300}];
    let chain8 = products.filter(value => value.price < 500).map(value => value.price);
    console.log(chain8);
    
    // | 9 | Filter adults → map names → uppercase       |
    const yearold = [  { name: "Ali", age: 17 },  { name: "Ahmed", age: 22 },  { name: "Sara", age: 19 }];
    let chain9 = yearold.filter(value => value.age > 18).map(value => value.name.toUpperCase());
    console.log(chain9);
    
    // | 10 | Filter passed students → sum marks (reduce) |
    const studentMarks = [  { name: "Ali", mark: 30 },  { name: "Ahmed", mark: 78 },  { name: "Sara", mark: 55}];
    let totals = 0;
    let chain10 = studentMarks.filter(value => value.mark > 45).reduce((total ,value) =>{
        return total + value.mark
    },0);
    console.log(chain10);
    