console.log("start");
setTimeout(() => {
  console.log("timer 1 done");
}, 0);

let x = Promise.resolve("sanket's promise");
x.then(function processPromise(value) {
  console.log("promise value", value);
});

setTimeout(function timer2() {
  console.log("Timer 2 done");
}, 0);

console.log("End of the file");
