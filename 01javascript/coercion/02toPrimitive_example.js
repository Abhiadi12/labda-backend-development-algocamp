const obj = {
  a: 10,
};
const obj2 = {
  a: 20,
  toString: function () {
    return 100;
  },
};

const obj3 = {
  a: 20,
  toString: function () {
    return [];
  },
};

const obj4 = {
  a: 20,
  toString: function () {
    return [];
  },
  valueOf: function () {
    return 10;
  },
};
console.log(10 - obj);
console.log(10 - obj2);
console.log(10 - obj4);
console.log(10 - obj3);

//reason: when non primitive value are used in addition , sunstraction operation then
// it will call the valueOf first and if return primitive value then return
// if valueOf return non primitive value then it will call the toString version.
// if toString return primitive value it's number form will be return
