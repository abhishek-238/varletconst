//To run remove the multi-line- comment('/*'  &  '*/').
//DIFFERENCE BETWEEN var and let:-

//The var keyword allows multiple declaration
/*var x = 20;
var x = "hello";
console.log(x)*/

//But let keyword do not allow multiple declaration
//throws an error :Uncaught SyntaxError: Identifier 'x' has already been declared
/*let x = 20;
var x = "hello";
console.log(x)*/


//The var keyword  allows the variable hoisting
//result:undefined
/*console.log(x)
var x = 10;*/


//But let do not allows the variable hoisting
//throws error:Uncaught ReferenceError: Cannot access 'x' before initialization at script.js:24
/*console.log(x)
let x = 10;*/


//var creates global scope.
/*for(var x=1; x<5; x++)
{
    console.log("inside",x)
}
console.log(x)*/



//But let creates scope level.
//result :inside 1 script.js:40 inside 2script.js:40 inside 3script.js:40 inside 4 
//error:script.js:42 Uncaught ReferenceError: x is not defined at script.js:42

/*for(let x=1; x<5; x++)
{
    console.log("inside",x)
}
console.log(x)*/


//DIFFERENCE BETWEEN let & const:-

//let allow re-initialize.
/*let x=10;
x=40;
console.log(x)*/

//const restrict to re-initialize.
//Throws error:script.js:57 Uncaught TypeError: Assignment to constant variable.at script.js:57
/*const x=10;
x=40;
console.log(x)*/

//let allows to initialize value later on
/*let x;
x=5
console.log(x)*/


//const do not allows to initialize value later on
//Throws error:Uncaught SyntaxError: Missing initializer in const declaration
const x;
x=5
console.log(x)