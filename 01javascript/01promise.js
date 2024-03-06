function getRandom() {
  return Math.floor(Math.random() * 10);
}

//promise with sync operation
// function promiseSync() {
//   return new Promise(function (resolve, reject) {
//     let sum = 0;
//     for (let i = 0; i < 10; i++) sum += i;
//     console.log("sum is ", sum);
//     let val = getRandom();
//     if (val % 2 == 0) resolve(val);
//     else reject(val);
//   });
// }

// //promise with async operation directly return
// function promiseAsync() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       let val = getRandom();
//       if (val % 2 == 0) resolve(val);
//       else reject(val);
//     }, 2000);
//   });
// }

// let x = promiseSync(); // execute like a sync operation untill get a resolve or reject.
// let y = promiseAsync(); // return a promise object directly as the first line is async operation

// console.log("x is", x);
// console.log("y is", y);

//2. what if we return inside promise
function promiseSync2() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      let val = getRandom();
      if (val % 2 == 0) {
        console.log("resolving..");
        return val;
      } else {
        console.log("rejecting..");
        return val;
      }
    }, 1000);
  });
}

let p = promiseSync2();
console.log(p);
