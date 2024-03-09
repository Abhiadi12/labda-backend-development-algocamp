console.log(module);
console.log(module.filename);
console.log(module.exports);
console.log(__filename);
console.log(__dirname);

//every file in node js is a module
//to share the entire file just use require("path")
//better to export some sort of functionality in the file

//IIFE
//before a module's code is executed , node.js will wrap it with a function wrapper that provides module scope

(function (m) {
  const superHero = "Batman";
  console.log(superHero);
  console.log(m);
})("Hello");

(function (m) {
  const superHero = "superhero";
  console.log(superHero);
})("worlld");
