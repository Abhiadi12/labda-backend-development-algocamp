console.log(foo);
console.log(x);
console.log(arrow);

function foo() {
  console.log("hello");
}

var x = function () {
  console.log("inside function x.");
};

var arrow = () => {
  console.log("welcome.");
};

console.log(foo);
console.log(x);
console.log(arrow);

// try to rename var with x then check.
// you will get ReferenceError: Cannot access 'x' before initialization
