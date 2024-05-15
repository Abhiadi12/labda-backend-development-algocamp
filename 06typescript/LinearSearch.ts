function linearSearch<E>(arr: E[], x: E): [boolean, number] {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) return [true, i];
  }
  return [false, -1];
}

linearSearch<number>([1, 2, 3], 2);
