let numbers = document.querySelectorAll('[type="number"]');
let operants = document.querySelectorAll('[type=operant]')
let display = document.getElementById('maindisplay');
let clear = document.getElementById('clear');
let signChange = document.getElementById('signchange');
let backSpace = document.getElementById('backspace');
let dot = document.getElementById('dot');
let displayText = 0;
let number1;
let number2;
let sign = null;
let result;

numbers.forEach(number => number.addEventListener("click", (e) =>{
if(displayText.toString()[0] == 0 && displayText.toString()[1] != '.'){
   displayText = e.target.innerText
   display.innerText = displayText;
}else if(sign != null){
   displayText = number1 + sign + e.target.innerText
   let  numLength = number1.length()
   number2 = displayText.slice(numLength+1);
}else{
   displayText = displayText + e.target.innerText;
   display.innerText = displayText;
}
}));

clear.addEventListener("click",  () => {
   displayText = 0;
   number2 = 0;
   display.innerText = displayText;
});

signChange.addEventListener("click",  (e) => {
   displayText.toString()[0] == '-' ? displayText = displayText.substring(1) : displayText = '-'+ displayText
   display.innerText = displayText;
 });

dot.addEventListener('click', () => {
   if(displayText.includes('.')){
      dot.disabled = true
   }else{
      displayText = displayText+'.';
      display.innerText = displayText;
      dot.disabled = false;
   }
}); 

backSpace.addEventListener('click', () =>{
   if (displayText === "" || displayText == 0) {
   displayText = 0
   display.innerText = displayText;
   }else{
   displayText = displayText.slice(0, -1); 
   display.innerText = displayText;
   }
});

const add = (a,b) => { return a+b; } 
const subtract = (a,b) => { return a-b;}
const multiply = (a,b) => { return a*b; }
const divide = (a,b) => { return a == 0 || b == 0 ? 'Error' : a/b } 

let operate = (operation,a,b) => {
    switch (operation){
        case '+':
           result = add(parseInt(a),parseInt(b));
           return result
        case '-':
         result = subtract(a,b);
           return result
        case '/':
         result = divide(a,b);
           return result
        case '*':
         result = multiply(a,b);
          return result
    }
}