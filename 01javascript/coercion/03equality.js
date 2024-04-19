//abstract equality and strict equality(==, ===)
//incase of strict equality when type is not match it is directly return it.

console.log(NaN == NaN);
console.log(NaN === NaN);

console.log(undefined == null);
console.log(undefined === null);

const obj = { x: 10 };
const obj1 = { x: 10 };
const obj2 = { x: 12 };

console.log(obj == obj1);
console.log(obj == obj2);
console.log(obj == obj);

//object with valueOf
const cc1 = {
  x: 10,
  valueOf: function () {
    return 10;
  },
};

console.log(9 == cc1);
console.log(10 == cc1);
console.log(10 === cc1);
