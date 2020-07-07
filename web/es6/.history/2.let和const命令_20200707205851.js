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
  function f() { console.log('I am inside!'); }//TODO
  if (false) {
  }
  f();
}());//“I am inside!”

// 浏览器的 ES6 环境
function f() { console.log('I am outside!'); }
(function () {
  var f = undefined;//TODO
  if (false) {
    function f() { console.log('I am inside!'); }
  }

  f();
}());
// Uncaught TypeError: f is not a function

// 考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。
// 块级作用域内部的函数声明语句，建议不要使用
{
  let a = 'secret';
  function f() {
    return a;
  }
}

// 块级作用域内部，优先使用函数表达式
{
  let a = 'secret';
  let f = function () {
    return a;
  };
}

// ES6 的块级作用域必须有大括号，如果没有大括号，JavaScript 引擎就认为不存在块级作用域。
// 第一种写法，报错
if (true) let x = 1;

// 第二种写法，不报错
if (true) {
  let x = 1;
}

// 严格模式下，函数只能声明在当前作用域的顶层。
// 不报错
'use strict';
if (true) {
  function f() {}
}

// 报错
'use strict';
if (true)
  function f() {}



// const声明一个只读的常量。一旦声明，常量的值就不能改变。
const PI = 3.1415;
PI // 3.1415

PI = 3;
// TypeError: Assignment to constant variable.

// const一旦声明变量，就必须立即初始化，不能留到以后赋值。
const foo;
// SyntaxError: Missing initializer in const declaration

// const的作用域与let命令相同：只在声明所在的块级作用域内有效。
if (true) {
  const MAX = 5;
}

MAX // Uncaught ReferenceError: MAX is not defined

// const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。
if (true) {
  console.log(MAX); // ReferenceError
  const MAX = 5;
}

// const声明的常量，也与let一样不可重复声明。
var message = "Hello!";
let age = 25;

// 以下两行都会报错
const message = "Goodbye!";
const age = 30;

// const实际上保证的是变量指向的那个内存地址所保存的数据不得改动,简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址;但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针,至于它指向的数据结构是不是可变的，就完全不能控制了。

const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop // 123

// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only

const a = [];
a.push('Hello'); // 可执行
a.length = 0;    // 可执行
a = ['Dave'];    // 报错

// 如果真的想将对象冻结，应该使用Object.freeze方法。
const foo = Object.freeze({});

// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
foo.prop = 123;

// 将对象彻底冻结的函数
var constantine = (obj) => {
  Object.freeze(obj);
  Object.keys(obj).forEach( (key, i) => {
    if ( typeof obj[key] === 'object' ) {
      constantine( obj[key] );
    }
  });
};

// ES6声明变量的六种方法：var、function、let、const、import、class