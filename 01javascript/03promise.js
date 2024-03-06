function createPromise() {
  return new Promise(function exec(resolve) {
    console.log("resolving the promise.");
    resolve("Done");
  });
}

setTimeout(function process() {
  console.log("Timer completed");
}, 0);

let p = createPromise();
p.then(function fullfillHandler(value) {
  console.log("we fullfilled with a value", value);
});

let q = createPromise();
q.then(function fullfillHandler(value) {
  console.log("we fullfilled with a value", value);
});

console.log("ending");
