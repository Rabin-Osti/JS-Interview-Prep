/* 

The scope chain in JavaScript is the mechanism that JavaScript uses to resolve variable references. When JavaScript encounters a variable name, it searches for the variable in the current scope. If the variable is not found in the current scope, the JavaScript interpreter searches the outer scope, and so on.

The JavaScript interpreter searches for variables in the following order:

The current scope
The outer scope
The global scope

  Scope Chain

  ➜ Mechanism that JavaScript uses to resolve variables references.  
  ➜ The JavaScript interpreter searches for variables in the following order: 
    - Current scope
    - Outer scope
    - Global scope


https://medium.com/@mohdtalib.dev/scope-chain-1e3cd8cfaae8 */

function outer() {
  let abc = 100;

  function inner() {
    console.log(abc);
  }

  inner();
}

outer();
