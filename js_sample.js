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
