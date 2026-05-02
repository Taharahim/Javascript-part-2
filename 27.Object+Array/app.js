// 🧪 ASSIGNMENTS (do these seriously)
// 🔹 Level 1 (basic but important)
// let users = [
//   { name: "Ali", age: 17 },
//   { name: "Taha", age: 18 },
//   { name: "Sara", age: 22 }
// ];
// Get all users age >= 18
// Return only names
// Add field isAdult

let users = [
  { name: "Ali", age: 17 },
  { name: "Taha", age: 18 },
  { name: "Sara", age: 22 },
];

let adulthood = users.filter((value) => value.age >= 18);
console.log(adulthood);

let names = adulthood.map((value) => value.name);
console.log(names);

let adults = users.map((value) => ({ ...value, isAdult: value.age >= 18 }));
console.log(adults);

// 🔹 Level 2 (real thinking)
// let userdata = [
//   {
//     name: "Ali",
//     skills: ["JS", "HTML"],
//     address: { city: "Lahore" }
//   },
//   {
//     name: "Taha",
//     skills: ["CSS"],
//     address: { city: "Karachi" }
//   }
// ];
let userdata = [
    {
        name: "Ali",
        skills: ["JS", "HTML"],
        address: { city: "Lahore" },
    },
    {
        name: "Taha",
        skills: ["CSS"],
        address: { city: "Karachi" },
    },
];
// Get users from Karachi
let searchofCity = userdata.filter(value =>value.address.city.includes("Karachi"));
console.log(searchofCity);

// Get all skills in one array
let searchofSkills = userdata.flatMap(value => value.skills);
console.log(searchofSkills);


// Get users who know "JS"
let skilled = userdata.filter(value => value.skills.includes("JS"));
console.log(skilled);

// 🔹 Level 3 (API-style mess)
// let data = [
//   {
//     id: 1,
//     user: {
//       name: "Ali",
//       orders: [
//         { product: "Laptop", price: 1000 },
//         { product: "Mouse", price: 20 }
//       ]
//     }
//   },
//   {
//     id: 2,
//     user: {
//       name: "Taha",
//       orders: [
//         { product: "Keyboard", price: 50 }
//       ]
//     }
//   }
// ];
let data = [
  {
    id: 1,
    user: {
      name: "Ali",
      orders: [
        { product: "Laptop", price: 1000 },
        { product: "Mouse", price: 20 },
      ],
    },
  },
  {
    id: 2,
    user: {
      name: "Taha",
      orders: [{ product: "Keyboard", price: 50 }],
    },
  },
];
// Get all product names
let product = data.flatMap(value => value.user.orders.map( item => item.product));
console.log(product);

// Calculate total spent by each user
let total = data.reduce((sum,item)=> {
    return sum + item.user.orders.reduce((s,o)=>s+o.price,0)
},0);
console.log(total);


// Get users who spent more than 100
let spent = data.map(value => value.user.orders.filter(value => value.price >= 100),0)
console.log(spent);
