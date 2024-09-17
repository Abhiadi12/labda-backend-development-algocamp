function foo() {
  console.log(x);
  console.log(y);

  let x = 10;
  var y = 10;
  console.log(x);
  console.log(y);
}

foo();

// block scope and function scope.
// TDZ of block scope.
