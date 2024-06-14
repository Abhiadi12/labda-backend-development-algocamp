function* fetchNextElement() {
  console.log("inside tge generator.");
  const x = 10;
  yield 11;
  console.log("entering after a yield.");
  const y = x + (yield 30);
  console.log("value of y is", y);
}

const iter = fetchNextElement();
console.log("first", iter.next());
console.log("second", iter.next());
console.log("third", iter.next(20));
