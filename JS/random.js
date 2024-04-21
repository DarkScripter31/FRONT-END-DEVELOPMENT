//JavaScript Medthods
//Methods are functions that belong to an object and can be called on the object. They allow objects to interact with each other in a controlled way.

//=============================
//Method Overloading in JavaScript
//=============================
/*
In JavaScript, method overloading is not supported n
atively like it is in some other programming languages.  
However, we can achieve a similar functionality  using  function  
overloading by creating multiple functions with the  same name but  
different numbers of arguments or different types  of arguments.
*/
function add(a) { return a; }    //add one number
function add(a, b) { return  a + b; }     //add two numbers
function add(a, b , c){ return add(add(a,b),c);}      //add three numbers using recursion
console.log(add(2));             //Output: 2
console.log(add(2,  5));          //Output: 7  
console.log(add(1,   3, 4));       //Output: 8


//=================================== 
//Default Parameters and Arguments Arrays 
//=================================== 
/* 
When you call a function with fewer arguments than expected,  
the remaining parameters are assigned their default values .    
*/ 
function greet (name = "Guest ", msg = "Hello"){
 console.log(`${msg}, ${name }`);
} 
greet();                        // Output : Hello , Guest  
greet("John");                  //  Output : Hello , John    
greet ("John", "Howdy ");         // Output : Howdy , John  

/* An arguments array allows you to  access all the passed arguments as an array */
function sum(){ 
    let args = Array.from(arguments);  
    let total =0 ; 
    for(let i=0;i< args.length;i++){  
        total +=args[i];   
    }    
    return total;     
}
console.log(sum());              // Output : 0 
console.log(sum(1));                        // Output : 1    
console.log(sum(1, 2));               // Output : 3    
console.log(sum(1,  2, 3));            // Output :   6      


var a = Math.random();
var b = 6.777;
console.log(a);
console.log(typeof a);
console.log(Number.isInteger (a));
console.log(Math.floor(b));
console.log(Math.ceil(b));
