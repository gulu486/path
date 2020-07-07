// let用来声明变量，所声明的变量，只在let命令所在的代码块内有效。
{
  let a = 10;
  var b = 1;
}
a // ReferenceError: a is not defined.
b // 1

// for循环的计数器
for (let i = 0; i < 10; i++) {
  // ...
}
// 计数器i只在for循环体内有效，在循环体外引用就会报错
console.log(i);
// ReferenceError: i is not defined

// 使用var
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    // 全局的i
    console.log(i);
  };
}
a[6](); // 10

// 使用let，声明的变量仅在块级作用域内有效
var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6

// 设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域
for (let i = 0; i < 3; i++) {
  let i = 'abc';
  console.log(i);
}
// abc
// abc
// abc

// let不存在变量提升
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;

// 只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  // 不存在变量提升
  let tmp;
}

// 暂时性死区（TDZ）
if (true) {
  // TDZ开始
  tmp = 'abc'; // ReferenceError
  console.log(tmp); // ReferenceError

  let tmp; // TDZ结束
  console.log(tmp); // undefined
  // 变量赋值
  tmp = 123;
  console.log(tmp); // 123
}

// typeof抛出异常
typeof x; // ReferenceError
let x;

// 不存在的变量名无异常
typeof undeclared_variable // "undefined"

// 参数x默认值等于另一个参数y，而此时y还没有声明，属于“死区”
function bar(x = y, y = 2) {
  return [x, y];
}

bar(); // 报错

// x已经声明
function bar(x = 2, y = x) {
  return [x, y];
}
bar(); // [2, 2]

// 不报错
var x = x;

// 报错
let x = x;
// ReferenceError: x is not defined

// let不允许在相同作用域内，重复声明同一个变量。
// 报错
function func() {
  let a = 10;
  var a = 1;
}

// 报错
function func() {
  let a = 10;
  let a = 1;
}


// 不能在函数内部重新声明参数
function func(arg) {
  let arg;
}
func() // 报错

function func(arg) {
  {
    let arg;
  }
}
func() // 不报错

// ES5 只有全局作用域和函数作用域，没有块级作用域
// 第一种场景，内层变量可能会覆盖外层变量。
var tmp = new Date();

function f() {
  // 函数作用域，变量未声明，undefined
  console.log(tmp);
  // 判断为假，不执行
  if (false) {
    var tmp = 'hello world';
  }
}

f(); // undefined

// 第二种场景，用来计数的循环变量泄露为全局变量。
var s = 'hello';

for (var i = 0; i < s.length; i++) {
  console.log(s[i]);
}

console.log(i); // 5

// let实际上为 JavaScript 新增了块级作用域。
function f1() {
  let n = 5;
  if (true) {
    // 块级作用域，新变量n
    let n = 10;
  }
  console.log(n); // 5
}

// ES6 允许块级作用域的任意嵌套。
{{{{
  {let insane = 'Hello World'}
  console.log(insane); // 报错
}}}};

// 内层作用域可以定义外层作用域的同名变量。
{{{{
  let insane = 'Hello World';
  {let insane = 'Hello World'}
}}}};

// 块级作用域的出现，实际上使得获得广泛应用的匿名立即执行函数表达式（匿名 IIFE）不再必要了。
// IIFE 写法
(function () {
  var tmp = '...';
  '...'
}());

// 块级作用域写法
{
  let tmp = '...'
  '...'
}

// ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。
// 根据 ES5 的规定都是非法的
// 浏览器没有遵守这个规定，为了兼容以前的旧代码，还是支持在块级作用域之中声明函数，因此这两种情况实际都能运行，不会报错。
// 情况一
if (true) {
  function f() {}
}

// 情况二
try {
  function f() {}
} catch(e) {
  // ...
}

// ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。ES6 规定，块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用。
function f() { console.log('I am outside!'); }

(function () {
  if (false) {
    // 重复声明一次函数f
    function f() { console.log('I am inside!'); }
  }

  f();
}());// 浏览器的 ES6 环境  // Uncaught TypeError: f is not a function

// ES5 环境
function f() { console.log('I am outside!'); }

(function () {
  function f() { console.log('I am inside!'); }
  if (false) {
  }
  f();
}());//“I am inside!”
