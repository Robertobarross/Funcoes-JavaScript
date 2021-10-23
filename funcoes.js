/* Dois tipos de chamada de função; */
function log(value){
    console.log(value);
}
log('test'); 

var log = function(value) {
    console.log(value);
};
log('teste');

// Argumentos da função 
const str = 'DIO';
const arr = [1,2,3,4];

function logArgs(a, b, c, d) {
    console.log(a, b, c, d);
}
logArgs(...arr);
/*-------------------------------*/



/* função soma; */
    var sun = function(a,b) {
        return a + b;
    };
    console.log(sun(5 , 5)); // Retorna -> 5 + 5 = "10"


/* função soma; */
// Arrow function
    var sun = (a , b) => a + b;
    console.log(sun(5, 10)); // retorna -> 5 + 10 ="15"

// Argumentos da função soma
function sum(a, b) {
    console.log(arguments);

    return a + b;
}
console.log(sum(5,5,5,2,3));

// Argumentos da função soma
function sum(...args) {
    return args.reduce((acc, value) => acc + value, 0); 
}
console.log(sum(5,5,5,2,3));
/*-------------------------------*/


// Multiplicação
function multiply(a, b) {
    return a * b; // Multipliva a x b
}console.log(multiply(10, 10)); // Retorna 10 x 10 = "100"

// Multiplicação evaluation
function randomNumber() {
    return Math.random() * 10;
}
function multiply(a, b = randomNumber()) {
    return a * b;
}
console.log(multiply(5));
/*-------------------------------*/
