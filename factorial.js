

// function factorial(n){
//     var factorial = 1; 
//     for(var i = 1; i <= n; i++){
//         factorial = factorial * i;
//     }
//     return factorial; 
// }

// var result = factorial(10); 
// console.log(result);
// var i = 1; 
// var factorial = 1; 
// while(i <= 10){
//     factorial = factorial * i;
//     console.log(i, factorial);  
//     i++; 
// }
function factorial (n){
    var i = 1; 
    var factorial = 1; 
while(i <= n){
    factorial = factorial * i;
    // console.log(i, factorial);  
    i++; 
}
return factorial;
}
var result = factorial(10);
console.log(result);
