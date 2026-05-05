// 1. Counter App

// What it wants:
// A number on screen that increases or decreases when buttons are clicked.

// Requirements:

// Show a number (start from 0)
// Two buttons: Increase and Decrease
// Clicking buttons updates the number instantly

// What you’ll practice:

// getElementById / querySelector
// addEventListener
// Updating text using innerText

// alert('WELCOME TO MY WORLD');


let addBtn = document.querySelector('.add-btn');
let subBtn = document.querySelector('.sub-btn');
let count = 0
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    count++;
    document.querySelector('.count').textContent = count;
}
)
subBtn.addEventListener('click', (e) => {
    e.preventDefault();
    count--;
    document.querySelector('.count').textContent = count;
})

    // 2. Live Character Counter

    // What it wants:
    // As user types in an input or textarea, show how many characters they typed.

    // Requirements:

    // One textarea/input
    // A text below like: Characters: 0
    // Count updates in real time while typing

    // What you’ll practice:

    // input event
    // Reading value
    // Dynamic DOM updates
    = document.getElementById('text').addEventListener('input', (e) => {
        let text = e.target.value;
        let counting = text.length;
        let letters = `The total character you type without whitespace is ${counting}`;
        let answer = document.querySelector('.text-count').textContent = letters;
    });



// 3. Todo List (Basic)
// What it wants:
// User can add tasks and see them listed.

// Requirements:

// Input field + Add button
// When clicked:
// New task appears in a list (ul or div)
// No delete yet (don’t get ahead of yourself)

// What you’ll practice:

// createElement
// appendChild
// Handling user input

let todoBtn = document.querySelector('.add-taskbtn');
function ADDTASK(text) {
    let Lists = document.createElement('li');
    Lists.className = 'Text'
    Lists.innerHTML = `${text}`;
    let note = document.querySelector('.Tasks');
    note.appendChild(Lists);
}
todoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let sentence = document.getElementById('sentence').value;
    ADDTASK(sentence);
    document.getElementById('sentence').value = '';
});


// 4. Toggle Theme (Dark/Light Mode)
// What it wants:
// A button that switches the website between dark and light mode.
// Requirements:
// Button: “Toggle Mode”
// Change background color + text color
// Use class toggle (not manual style mess)
// What you’ll practice:
// classList.toggle
// Working with CSS + DOM together


let themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let body = document.getElementById('body');
    if (themeBtn.innerText === 'Turn Dark') {
        body.style.backgroundColor = '#000';
        body.style.color = 'antiquewhite';
        themeBtn.innerText = 'Turn Light';
    } else {
        body.style.backgroundColor = 'antiquewhite';
        body.style.color = '#000';
        themeBtn.innerText = 'Turn Dark';
    }
})

// 5. Image Switcher
// What it wants:
// Click a button and image changes.
// Requirements:
// Show one image initially
// Button: “Change Image”
// On click → image source changes
// What you’ll practice:
// Manipulating attributes (src)
// DOM element selection

let images = [
    'https://m.media-amazon.com/images/I/51sG+agaZbS._AC_UF894,1000_QL80_.jpg',
    'https://media.istockphoto.com/id/2166773378/photo/autumn-on-lake-gosau-in-salzkammergut-austria.jpg?s=612x612&w=0&k=20&c=MLZqujxxqGP2wjQaT6zVHhnEgiHQefzLiee5Hudaqx0=',
    'https://static.vecteezy.com/system/resources/thumbnails/016/940/106/small/beautiful-moonlight-scenery-background-free-scenery-illustration-moonlight-scenery-with-stars-on-the-night-sky-beautiful-midnight-background-free-vector.jpg',
];
let counter = 0;
let imageBtn = document.getElementById('image-btn');
let img = document.createElement('img')
let imagesChannel = document.querySelector('.images');
imagesChannel.appendChild(img);
img.style.width = '350px';
img.style.height = '350px';

imageBtn.addEventListener('click', (e) => {
    e.preventDefault();
    img.setAttribute('src', images[counter]);
    counter++;
    if (counter >= images.length) {
        counter = 0;
    }
})
