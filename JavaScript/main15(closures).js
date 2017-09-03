var func = function(){
  var i = 10;
  return function(){
    return i
  }
};

var anotherFunc = function(){
  var i = 20;
  console.log(fun()());
};

anotherFunc();
