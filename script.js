const add = function(a,b){
    return a+b;
}
const subtract = function(a,b){
    return a-b;
}
const divide = function(a,b){
    if(a == 0 || b == 0){
        return 'error';
    }
     else{ 
         return a/b;
        }
}
const multiply = function(a,b){
   return a*b;
}