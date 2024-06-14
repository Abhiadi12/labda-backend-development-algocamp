function* fetchNextElement() {
  console.log("I am inside");
  yield 1; //simillar to a return but not a return
  yield 2;
  console.log("last statement");
  yield 3;
}

const iter = fetchNextElement();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
