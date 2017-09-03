function greet(name) {
  return "hello" + name;
}

var greet11 = function(name) {
  return "Hello" + name
}

console.log(greet("Mike"));

console.log(greet("Mike").toUpperCase());

console.log(greet11 ("Mike"));


var func = function(callback){
  var name = "Sorax";
  callback(name);
};

func(function(n){
  console.log("Hello" + n)
});

var func = function(){
  return function(){
    console.log("Hi");
  }
};

func()();


var greeting = (function(name){
  return "Hello " + name;
}("sorax"));

console.log(greeting);
