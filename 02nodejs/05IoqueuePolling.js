//all bulit-in nodejs method are I/O polling
// setImmidiate will queue a cb in check queue

const fs = require("fs");

fs.readFile(__filename, () => {
  console.log("This is readfile 1");
}); //IO queue

process.nextTick(() => {
  console.log("This is process next tick 1");
}); // micro task -> procsess

Promise.resolve().then(() => {
  console.log("Promise resolve one");
}); // micro task -> Promise resolve

setTimeout(() => {
  console.log("This is timeout cb");
}); // Timer queue

setImmediate(() => {
  console.log("This is setImmidiate log");
}); // check queue

// IO queue has > check queue
// but why check CB execute first ?
// I/O events are polled and callback functions are added tp the I/O queue only after the I/O is completey
