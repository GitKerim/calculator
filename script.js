let numbers = document.querySelectorAll('[type="number"]');
let operant = document.querySelectorAll('[type=operant]')
let display = document.getElementById('maindisplay');
let clear = document.getElementById('clear');
let signChange = document.getElementById('signchange');
let backSpace = document.getElementById('backspace');
let dot = document.getElementById('dot');
let number1 = 0;
let number2;
let numDump

numbers.forEach(number => number.addEventListener("click", (e) =>{
number1.toString()[0] == 0 ? number1 = e.target.innerText : number1 = number1.toString() + e.target.innerText;
numDump = number1;
display.innerText = numDump;
if(number1.length >= 12){  
   number1 = 0;
   number2 = 0;
   display.innerText = number1;
} 
}));

clear.addEventListener("click",  () => {
   number1 = 0;
   number2 = 0;
   display.innerText = number1;
});

signChange.addEventListener("click",  (e) => {
   number1.toString()[0] == '-' ? number1 = number1.substring(1) : number1 = '-'+ number1
   display.innerText = number1;
 });

dot.addEventListener('click', () => {
   if(number1.includes('.')){
      dot.disabled = true
   }else{
      number1 = number1+'.';
      display.innerText = number1;
      dot.disabled = false;
   }
}); 

backSpace.addEventListener('click', () =>{
   if (number1 === "" || number1 == 0) {
   number1 = 0
   display.innerText = number1;
   }else{
   number1 = number1.slice(0, -1); 
   display.innerText = number1;
   }
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