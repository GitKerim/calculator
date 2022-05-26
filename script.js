let numbers = document.querySelectorAll('[type="number"]');
let operants = document.querySelectorAll('[type=operant]')
let display = document.getElementById('maindisplay');
let clear = document.getElementById('clear');
let signChange = document.getElementById('signchange');
let backSpace = document.getElementById('backspace');
let dot = document.getElementById('dot');
let displayText = 0;
let number1;
let number2 = null;
let sign = null;
let result;
let numLength;
let textLength;

operants.forEach(operant => operant.addEventListener('click', (e) =>{
   if(sign == null){
      sign = e.target.innerText;
      number1 = displayText;
      displayText = displayText + sign;
      display.innerText = displayText;
   }else if(sign != null && number2 == null){
      sign = e.target.innerText;
      displayText = number1 + sign;
      display.innerText = displayText;
   }else{
      operate(sign,number1,number2)
      number1 = result;
      number2 = null
      sign = e.target.innerText;
      displayText = result + sign;
      display.innerText = displayText;
   }

}))

numbers.forEach(number => number.addEventListener("click", (e) =>{
if(displayText.toString()[0] == 0 && displayText.toString()[1] != '.'){
   displayText = e.target.innerText
   display.innerText = displayText;
}else if(sign != null){
   displayText = displayText + e.target.innerText;
   numLength = number1.toString().length;
   textLength = displayText.toString().length;
   number2 = displayText.toString().substring(numLength + 1,textLength);
   display.innerText = displayText
}else{
   displayText = displayText + e.target.innerText;
   display.innerText = displayText;
}
}));

clear.addEventListener("click",  () => {
   displayText = 0;
   number2 = 0;
   display.innerText = displayText;
   sign = null
   dot.disabled = false;
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