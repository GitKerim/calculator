let numbers = document.querySelectorAll('[type="number"]');
let number1 = 0;
let operant;
let number2;
let display = document.getElementById('maindisplay');
let clear = document.getElementById('clear');
let signChange = document.getElementById('signchange');


clear.addEventListener("click",  (e) => {
   number1 = 0;
   number2 = 0;
   display.innerText = number1;
});

numbers.forEach(number => number.addEventListener("click", (e) =>{
number1.toString()[0] == 0 ? number1 = e.target.innerText : number1 = number1.toString() + e.target.innerText;
display.innerText = number1
}));

signChange.addEventListener("click",  (e) => {
   number1.toString()[0] == '-' ? number1 = number1.substring(1) : number1 = '-'+ number1
   display.innerText = number1;
 });
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