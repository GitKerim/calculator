let numbers = document.querySelectorAll('[type="number"]');
let operants = document.querySelectorAll('[type=operant]')
let display = document.getElementById('maindisplay');
let clear = document.getElementById('clear');
let signChange = document.getElementById('signchange');
let backSpace = document.getElementById('backspace');
let dot = document.getElementById('dot');
let equals = document.getElementById('equals')

let displayText = 0;
let number1 = 0;
let number2 = null;
let sign = null;
let numLength;
let textLength;

equals.addEventListener('click', () => {
   if(number2 != null){
   number1 = Math.round(operate(sign,number1,number2)*1000)/1000;
   number2 = null;
   sign = null;
   displayText = number1;
   display.innerText = displayText;
}})

operants.forEach(operant => operant.addEventListener('click', (e) =>{
   if(sign == null){
      sign = e.target.innerText;
      number1 = displayText;
      displayText = displayText + sign;
      display.innerText = displayText;
      dot.disabled = false;
   }else if(sign != null && number2 == null){
      sign = e.target.innerText;
      displayText = number1 + sign;
      display.innerText = displayText;
      dot.disabled = false;
   }else{
      number1 = Math.round(operate(sign,number1,number2)*1000)/1000;
      number2 = null
      sign = e.target.innerText;
      displayText = number1 + sign;
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
   number1 = displayText
   display.innerText = displayText;
}
}));

clear.addEventListener("click",  () => {
   displayText = 0;
   number1 = 0
   number2 = null;
   display.innerText = displayText;
   sign = null
   dot.disabled = false;
});

signChange.addEventListener("click",  (e) => {
   if(displayText.toString()[0] == '-'){
   displayText = displayText.substring(1);
   number1 = displayText;
   display.innerText = displayText;
   }else{
   displayText = '-'+ displayText;
   number1 = displayText;
   display.innerText = displayText;
 }});

dot.addEventListener('click', () => {
      displayText = displayText +'.';
      display.innerText = displayText;
      dot.disabled = true;
}); 

backSpace.addEventListener('click', () =>{
   if(dot.disabled == true && displayText.slice(-1) == '.'){
      displayText = displayText.slice(0, -1);
      dot.disabled = false;
      number1 = displayText;
      display.innerText = displayText
   }else if (displayText.length == 1 || displayText == 0) {
      displayText = 0
      number1 = 0
      display.innerText = displayText;
   }else if(number2 != null && number2.length !=1){
      numLength = number1.toString().length;
      textLength = displayText.toString().length;
      displayText = displayText.toString().slice(0, -1);
      number2 = displayText.toString().substring(numLength + 1,textLength);
      display.innerText = displayText;
   }else if(sign != null && displayText.slice(0, -1) == '+'||'-'||'*'||'/'){
      sign = null;
      displayText = displayText.toString().slice(0, -1);
      number1 = displayText;
      display.innerText = displayText;
      number2 = null
   }else if(number2 != null){
      numLength = number1.toString().length;
      textLength = displayText.toString().length;
      displayText = displayText.toString().slice(0, -1);
      number2 = displayText.toString().substring(numLength + 1,textLength);
      display.innerText = displayText;
   }else if(number1 == displayText && sign == null){
      displayText = displayText.toString().slice(0, -1);
      number1 = displayText;
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
      number1 = add(parseFloat(a),parseFloat(b));
           return number1
        case '-':
       number1 = subtract(parseFloat(a),parseFloat(b));
           return number1
        case '/':
       number1 = divide(parseFloat(a),parseFloat(b));
           return number1
        case '*':
       number1 = multiply(parseFloat(a),parseFloat(b));
          return number1
    }
}