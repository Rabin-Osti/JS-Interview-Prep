/* 
    let vs const vs var

    Differences:
    - Assignment
    - Re-declaration
    - Scope
    - Hoisting

 */

// temporal dead zone

{
  console.log(a); // start
  // other code
  // other code
  // other code
  // other code
  // other code
  // other code
  // other code
  // other code
  // other code
  // other code
  // other code
  let a = 100; // end
  console.log(x);
}
