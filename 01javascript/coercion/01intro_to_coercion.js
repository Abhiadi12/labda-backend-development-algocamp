console.log(1 + 1);
console.log("1" + 1);
console.log("1" - 1);
// it is not magic , read official docs everything will be cleared

//1. what is coercion  ?
//-> automatic type conersion or implicit type conversion
//2. Abstract Operation
//-> Some specific rules and algorithm that is present in the ecmascript docs , but they are not available for usage.

/*
ToNumber(10)
ToNumber(undefined) -> NaN
ToNumber(null) -> 0
This rule is apply below  
*/
console.log(2 - 9);
console.log(2 - null);
console.log(2 - undefined);
console.log(3 - "3");
console.log(1 - "0xa");
