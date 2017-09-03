console.log(2 << 8);
console.log(0xfffcc);//16-рич система счисления
console.log(0345);//8 система счисления начало с 0
console.log(12.45);
console.log(.89);
console.log(1.34e4);
console.log(1.34e-4);

var N = new Number(4000),
		n1 = 5000;
console.log(typeof N);

var n = 5000;
console.log(typeof n);

console.log(N.toFixed(2));
console.log(n1.toFixed(2));
console.log(n.toFixed(2));
console.log(2 .toFixed(2));

console.log(n.toExponential(4));
console.log(n.toPrecision(8));

//унарный + и -, инкримент, дикримент
console.log(+10);
console.log(-10);
var i = 10;
console.log(++i);
console.log(i);
console.log(i++);

// бинарные операторы
console.log(5 + 10);
console.log(7 - 3);
console.log(5 * 9);
console.log(10 / 3);
console.log(10 % 3);

var n = 200;
n = n + 20;
console.log(n);

n += 20;
console.log(n);

// операторы отношения
console.log(5 < 10);
console.log(5 > 10);
console.log(10 >= 10);
console.log(8 <= 10);
console.log(10 === 10);
console.log(10 == "10");
console.log(10 !== 10);
console.log("");
console.log(Math.sqrt(25));
console.log(Math.pow(3,5));
console.log(Math.PI);
console.log(Math.E);
console.log(typeof Infinity);
console.log(5/0);
console.log(0/0);
console.log(Infinity/Infinity);
console.log(Math.sqrt(-10));

console.log(NaN === NaN);

console.log(0.2 + 0.1);

console.log(10000000000000000 + 10000000000000006);




