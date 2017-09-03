console.log(true);
console.log(false);

console.log(5 === 5);

console.log(5 === 6);

console.log(Boolean(5));

//Falsy values

console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(""));

var s = "Hello";

if (s) {
  console.log("let's go");
}

var s = "";

if (s) {
  console.log("not worked");
}

console.log(true && false);
console.log(true && true);

console.log(true ||  false);
console.log(true || true);


console.log(!true);

var a = 0,
  isTrue = true;

isTrue && (a = 5);

console.log(a);


var sameString = "Hello world";
var newString = sameString || "World is dead";
console.log(newString);
