function outer() {
  let x = 1;
  let z = 10;
  return function inner() {
    let y = 1;
    console.log("x is " + x);
    console.log("x is " + y);
    x++;
    y++;
  };
}

let myFunc = outer();

myFunc();
myFunc();
myFunc();

/**
 * after outer remove from callstack how we have the value of x access by the inner function.
 * if you inspect the inner function inside the console it will have one property called scope.
 * Inside the scope it maintains all the closures value. (x will be inside the closure scope).
 * z will not persist as it is not used inside the inner.
 */
