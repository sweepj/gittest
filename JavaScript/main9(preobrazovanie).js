console.log(5 + "5");
console.log(typeof (5 + "5"));
console.log("5" * "4");
console.log("5" * "hi");
console.log("5" == 5);
console.log("0" == false);
console.log("5" == true);
console.log("" == false);
console.log(null == false);
console.log(null == true);
console.log(undefined == false);
console.log(undefined == true);

//Явное пре образование

console.log(Number("555"));
console.log(String(4433));
console.log(Boolean(1));

console.log(!!5);
console.log(!!0);

console.log(345 + "");
console.log(+"345");

var number = 22;
console.log(number.toString());
number = 45;
console.log(number.toString(3));
number = 5;

console.log(number.toString(2));


console.log(parseInt("45 px"));
console.log(parseInt("45 px", 10));

console.log(parseFloat("12.43 em"));
console.log(String(Infinity));
console.log(String(NaN));
console.log(+"");

console.log(+"      4");
console.log(+"g 45");
console.log();
console.log(parseInt("45px"));

console.log(+true);
console.log(+false);


var n = 5;

console.log(n.value);
