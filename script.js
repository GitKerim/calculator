let numbers = document.querySelectorAll('[type="number"]');
let number1 
let operant
let number2
let display = document.getElementById('maindisplay');

numbers.forEach(number => number.addEventListener("click", (e) =>{
number1 = e.target.innerText; 
display.innerText = number1;
}));
const add = (a,b) => { return a+b; } 
const subtract = (a,b) => { return a-b;}
const multiply = (a,b) => { return a*b; }
const divide = (a,b) => { return a == 0 || b == 0 ? 'Error' : a/b } 

let operate = (operation,a,b) => {
    switch (operation){
        case 'adding':
           return add(a,b);
        case 'subtracting':
           return subtract(a,b);
        case 'dividing':
           return divide(a,b);
        case 'multiplying':
          return multiply(a,b);
    }
}