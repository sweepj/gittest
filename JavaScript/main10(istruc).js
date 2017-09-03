if (true)
  console.log("its true");

if (false)
  console.log("its true");


var n = 5;

if (n > 3){
  n *= 3
  console.log(n);
}
else {
  console.log("no");
}

if (n < 3){
  n *= 3
  console.log(n);
}
else {
  console.log("no");
}


var name = "Sorax", homecity;

if (name === "Jonh"){
  homecity = "Boston";
} else if (name === "Sorax"){
  homecity = "Sevastopol"
}

console.log(homecity);


switch (name) {
  case "Jonh": homecity = "Boston"; break;
  case "Sorax": homecity = "Sevastopol"; break;
  default: homecity = "Hello"
}
