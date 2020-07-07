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
  let tmp;
}