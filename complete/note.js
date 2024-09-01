/*  

shift + alt + a for multiline comment

Closures provide a way to encapsulate variables and functions, preventing them from being accessed by other parts of the program.

 counter function comes at the top of global execution context. when the function is exectued it is removed from the global execution context so it is no longer in scope. 

 */

function counter() {
  let count = 0;
  function incrementCounter() {
    count++;
    console.log("count: ", count);
  }
  incrementCounter();
}

counter();
counter();

in this example when the counter function is called it comes at the top of the global execution context and when the function is executed it is removed fom the global execution context so both counter gives value 1.

how ever we can make our counter work by using closures.

function counter() {
    let count = 0;
    function incrementCounter() {
      count++;
      console.log("count: ", count);
    }
    return incrementCounter;
  }

// incrementCounter();
