let a = 10;
Promise.resolve().then(() => console.log("Printing from promise"));
process.nextTick(() => console.log("printing from nextTick"));
process.nextTick(() => console.log("printing from nextTick 1"));
process.nextTick(() => console.log("printing from nextTick 2"));
setTimeout(() => console.log("printing from timer"), 0);
console.log(a);