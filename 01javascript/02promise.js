// understand queues with promises and callbacks
console.log("start");
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(100);
  }, 0);
});

setTimeout(() => {
  console.log("global setTimeout");
}, 1000);

p.then((val) => {
  console.log("value is ", val);
});

console.log("end");
