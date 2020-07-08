// let用来声明变量，所声明的变量，只在let命令所在的代码块内有效。
{
  let a = 10;
  var b = 1;
}
a // ReferenceError: a is not defined.外部访问不到，报错
b // 1，外部作用域可以访问到

// for循环的计数器
for (let i = 0; i < 10; i++) {
  // ...
}
// 计数器i只在for循环体内有效，在循环体外引用就会报错
console.log(i);
// ReferenceError: i is not defined，外部作用域访问不到i，报错

// 使用var
var a = [];//全局声明定义数组a
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    // 全局的i
    console.log(i);//0，1，2，3，4，5，6，7，8，9
  };
}
a[6](); // 10，for循环执行完毕，i=10

// 使用let，声明的变量仅在块级作用域内有效
var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);//i在块作用域中，类似创造了一个新的变量i
  };
}
a[6](); // 6

// 设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域
for (let i = 0; i < 3; i++) {
  let i = 'abc';//子作用域
  console.log(i);
}
// abc
// abc
// abc

// let不存在变量提升
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;//变量提升，声明了foo

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;//不存在变量提升，报错

// 只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
var tmp = 123;//全局声明

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

  let tmp; // TDZ结束，声明tmp
  console.log(tmp); // undefined
  // 变量赋值
  tmp = 123;
  console.log(tmp); // 123
}

// typeof抛出异常
typeof x; // ReferenceError
let x;//不存在变量提升，x未定义，不存在，死区

// 不存在的变量名无异常
typeof undeclared_variable // "undefined"

// 参数x默认值等于另一个参数y，而此时y还没有声明，属于“死区”
function bar(x = y, y = 2) {//类似let x = y，y未声明
  return [x, y];
}

bar(); // 报错

// x已经声明
function bar(x = 2, y = x) {//let x=2，y=2
  return [x, y];
}
bar(); // [2, 2]

// 不报错
var x = x;//不规范

// 报错
let x = x;
// ReferenceError: x is not defined

// let不允许在相同作用域内，重复声明同一个变量。
// 报错
function func() {
  let a = 10;
  var a = 1;//能重复声明同一个变量
}

// 报错
function func() {
  let a = 10;
  let a = 1;//不能重复声明同一个变量
}


// 不能在函数内部重新声明参数
function func(arg) {
  let arg;//不能声明参数
}
func() // 报错

function func(arg) {
  {
    let arg;//不影响函数作用域的参数arg
  }
}
func() // 不报错

// ES5 只有全局作用域和函数作用域，没有块级作用域
// 第一种场景，内层变量可能会覆盖外层变量。
var tmp = new Date();//全局作用域

function f() {
  // 函数作用域，变量未声明，undefined
  console.log(tmp);
  // 判断为假，不执行
  if (false) {
    var tmp = 'hello world';//tmp变量提升，但未赋值
  }
}

f(); // undefined

// 第二种场景，用来计数的循环变量泄露为全局变量。
var s = 'hello';

for (var i = 0; i < s.length; i++) {
  console.log(s[i]);//全局的i
}

console.log(i); // 5

// let实际上为 JavaScript 新增了块级作用域。
function f1() {
  let n = 5;
  if (true) {
    // 块级作用域，新变量n
    let n = 10;
  }
  console.log(n); // 5，访问不到大括号里面的n
}

// ES6 允许块级作用域的任意嵌套。
{{{{
  {let insane = 'Hello World'}
  console.log(insane); // 报错
}}}};//多层嵌套

// 内层作用域可以定义外层作用域的同名变量。
{{{{
  let insane = 'Hello World';
  {let insane = 'Hello World'}//互不影响，谁也访问不到谁
}}}};

// 块级作用域的出现，实际上使得获得广泛应用的匿名立即执行函数表达式（匿名 IIFE）不再必要了。
// IIFE 写法
(function () {
  var tmp = ...;
  ...
}());//立即执行函数，执行完tem销毁

// 块级作用域写法
{
  let tmp = ...
  ...
}//外部无法访问

// ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。
// 根据 ES5 的规定都是非法的
// 浏览器没有遵守这个规定，为了兼容以前的旧代码，还是支持在块级作用域之中声明函数，因此这两种情况实际都能运行，不会报错。
// 情况一
if (true) {
  function f() {}
}//在判断语句中声明函数f

// 情况二
try {
  function f() {}
} catch(e) {
  // ...
}//在try...catch语句中声明函数f

// ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。ES6 规定，块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用。
function f() { console.log('I am outside!'); }

(function () {
  if (false) {
    // 重复声明一次函数f
    function f() { console.log('I am inside!'); }//在判断语句声明函数f，外部无法访问，类似let f，死区
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
    function f() { console.log('I am inside!'); }//类似let
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
  let f = function () {//使用函数表达式，而不是声明函数
    return a;
  };
}

// ES6 的块级作用域必须有大括号，如果没有大括号，JavaScript 引擎就认为不存在块级作用域。
// 第一种写法，报错
if (true) let x = 1;//需要大括号

// 第二种写法，不报错
if (true) {
  let x = 1;
}

// 严格模式下，函数只能声明在当前作用域的顶层。
// 不报错
'use strict';
if (true) {
  function f() {}
}//在if语句声明函数f

// 报错
'use strict';
if (true)
  function f() {}



// const声明一个只读的常量。一旦声明，常量的值就不能改变。
const PI = 3.1415;//声明常量，不能改变
PI // 3.1415

PI = 3;//报错
// TypeError: Assignment to constant variable.

// const一旦声明变量，就必须立即初始化，不能留到以后赋值。
const foo;//需要赋值
// SyntaxError: Missing initializer in const declaration

// const的作用域与let命令相同：只在声明所在的块级作用域内有效。
if (true) {
  const MAX = 5;//块级作用域
}

MAX // Uncaught ReferenceError: MAX is not defined

// const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。
if (true) {
  console.log(MAX); // ReferenceError
  const MAX = 5;//变量不能提升
}

// const声明的常量，也与let一样不可重复声明。
var message = "Hello!";
let age = 25;

// 以下两行都会报错
const message = "Goodbye!";//常量不可以重复声明
const age = 30;

// const实际上保证的是变量指向的那个内存地址所保存的数据不得改动,简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址;但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针,至于它指向的数据结构是不是可变的，就完全不能控制了。

const foo = {};//声明对象foo，常量

// 为 foo 添加一个属性，可以成功
foo.prop = 123;//可改变对象里面的属性
foo.prop // 123

// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only，不能指向另一个对象

const a = [];
a.push('Hello'); // 可执行
a.length = 0;    // 可执行
a = ['Dave'];    // 报错

// 如果真的想将对象冻结，应该使用Object.freeze方法。
const foo = Object.freeze({});//对象冻结，不能改变属性

// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
foo.prop = 123;

// 将对象彻底冻结的函数
var constantine = (obj) => {//箭头函数
  Object.freeze(obj);//冻结对象obj
  Object.keys(obj).forEach( (key, i) => {//遍历obj键值（arr）
    if ( typeof obj[key] === 'object' ) {//判断对应的属性值是否为对象
      constantine( obj[key] );//递归
    }
  });
};

// ES6声明变量的六种方法：var、function、let、const、import、class

// 顶层对象，在浏览器环境指的是window对象，在 Node 指的是global对象。ES5 之中，顶层对象的属性与全局变量是等价的。
// 顶层对象的属性赋值与全局变量的赋值
window.a = 1;
a // 1，this为window

a = 2;
window.a // 2

// 从 ES6 开始，全局变量将逐步与顶层对象的属性脱钩。
var a = 1;
// 如果在 Node 的 REPL 环境，可以写成 global.a
// 或者采用通用方法，写成 this.a
window.a // 1

let b = 1;
window.b // undefined，this不为window