console.log("sync process");

Promise.resolve(42).then(() => {
  console.log(
    "I'm queued into promise queue: in cjs i have less priority than nextTick queue"
  );
});

process.nextTick(() => {
  console.log("I'm queued into nextTick queue");
});

process.nextTick(() => {
  setTimeout(() => {
    console.log(
      "Timer callback inside nextTick callback: queued in timer queue"
    );
  }, 1000);
});

console.log("sync 2 process");
