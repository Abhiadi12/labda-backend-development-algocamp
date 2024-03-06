console.log("start");
setTimeout(() => {
  console.log("execute");
  process.nextTick(() => {
    console.log("inside the timer :next tick");
  });
}, 0);

Promise.resolve().then(() => console.log("Promise 1"));
process.nextTick(() => {
  console.log("next tick: 1");
});

setTimeout(() => console.log("Timer 2"), 0);
