console.log("hai");
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

