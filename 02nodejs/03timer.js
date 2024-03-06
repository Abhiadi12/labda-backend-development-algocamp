setTimeout(() => {
  console.log("first");
}, 1000);

setTimeout(() => {
  console.log("second");
}, 200);

setTimeout(() => {
  console.log("third");
}, 300);

// with micro task queue
setTimeout(() => {
  console.log("first");
}, 1000);

setTimeout(() => {
  console.log("second");
  process.nextTick(() => {
    console.log("I'm queued into nextTick queue");
  });
}, 1000);

setTimeout(() => {
  console.log("thirds");
}, 1000);

//Micro task queue callbacks get priority during the execution of timer queue callbacks
