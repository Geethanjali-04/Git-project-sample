console.log("hai");
console.log("while");

var a = 100
 // creates a separate execution context and push into callstack (so this variable inside function has memory) once executed it gets removed
function ai(){
    var a = 10;
    console.log(a);
 }
 // creates a separate execution context and push into callstack (so this variable inside function has memory) once executed it gets removed
  function b(){
    var a = 20;
    console.log(a);
 }
 ai();
 b();

 console.log(a);

 //output 10 20 100

 //lexical scope
 var x = 10;
 function outerfun()
 {
   innerfun();
   // var x = 10;
   function innerfun()
   {
      console.log(x);
      // checks value of a in local memory of execution context and then checks the lexical environment of its parent hierachicaly (c has ref to a and a has global execution context)
   }
 }
outerfun();



// for var variable shadowing and modifying takes place as it is in global scope
var x1 = 100;
{
   var x1= 1000;
}
console.log(`x2 value :${x1}`);

// for let, const variable shadowning alone takes place due to block scope

let y1 = 10;
{
   let y1 = 100;
   console.log(`value of y1 inside block:${y1}`);
}
console.log(`value of y1 outside block:${y1}`);


const z1 = 10;
{
   const z1 = 100;
   console.log(`value of z1 inside block:${z1}`);
}
console.log(`value of z1 outside block:${z1}`);


// closures function bundled together along with its lexical scope

function closure(){
   var c1 = 15;
   function inside_closure()
   {
      console.log(`function inside closure ${c1}`);
   }
   return inside_closure;
}

curr_cl = closure();
debugger;
curr_cl();
console.log(curr_cl());


//setTimeOut with eg.. print 1,2,3 for every sec in incresing order

//for var variable it doesnt work, because it doesnt store the i value every time in separate memory, it points to the same reference
for(var i=0;i<5;i++)
   {
     setTimeout(function (){
      console.log(i);
     },i*1000);
   }
   debugger;

//let is a block scope and creates memory everytime in local scope
for(let j=0;j<5;j++)
{
  setTimeout(function (){
   console.log(j);
  },j*1000);
}
debugger;


for(var k=0;k<5;k++){
   function close(k){
   {
     setTimeout(function (){
      console.log(k);
     },k*1000);
   }
   close(k);
}
}



// usage of closures 

//data hiding and encapsulation ie u cannot access the variable outside the scope or function 
// everytime when i call this function, the value of the closure should increase
// if it is one function and try to increment count, when we call multiple times it will create new closure, new scope so always gets one, so use 2 function closure

function counter()
{
   var count = 0; 
   function increment(){
      count++;
      console.log(count);
   }
   return increment;
}
inc_counter = counter();
inc_counter();
inc_counter();

// to make it in a scalable way u can use constructor for both increment and decrement counter

function Counter1()
{
   var count = 0;
   this.incrementCounter = function(){
      count++;
      console.log(count);
   }
   this.decrementCounter = function(){
      count--;
      console.log(count);
   }
}

var inc = new Counter1();
inc.decrementCounter();
inc.incrementCounter();

// named function declaration

function namedFun()
{
   console.log("this is a named function");
}

namedFun();


// anonymous function expression

var a = function()
{
   console.log("this is a function expression");
}

a();

// named function expression
//namedFun() cannot call with the internal function name,result in uncaught reference error

var a = function namedFunEx()
{
console.log("this is a named function expression");
}

a(); 


// first class function 
// the ability of function to use like value, ie a function can be passed as an argument and accepted as parameter
// a function can be returned as a  value from the function
var firstClassFun = function(param)
{
   console.log(param);
}

let param = function(){
 let jay = "jayasundari";
 console.log(jay);
}

firstClassFun(param);

var exampleFirstClass = function()
{ 
   return function(){
   console.log("Return Function");
   }
}

var val = exampleFirstClass();
console.log(val);








