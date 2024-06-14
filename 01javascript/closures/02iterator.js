/**
 * Javascript - Imperative P language.
 * Sql - Declarative P language.
 */

let arr = [10, 20, 30, 40, 50, 60, 70];

let iterator = arr[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//closures can help to implement custom iterators
//let's say you decide to use a custom fetcher

function custom(arr) {
  let index = 0;
  return function inner() {
    if (index >= arr.length) return { value: undefined, done: true };

    let element = arr[index];
    index++;
    return { value: element, done: false };
  };
}

const myFetcher = custom(arr);
console.log(myFetcher());
console.log(myFetcher());
console.log(myFetcher());
console.log(myFetcher());
console.log(myFetcher());
console.log(myFetcher());
console.log(myFetcher());
console.log(myFetcher());
