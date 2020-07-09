/*
ES5
*/

// JavaScript 的数据类型，共有六种:number、string、null、undefined、boolean、object（ES6：symbol）

// typeof运算符，识别所有值类型，识别函数，判断是否是引用类型（不可再细分）
typeof null // object,null是特殊的引用类型，null指针指向为空地址

/*
JS中，所有的变量都是保存在栈内存中的。
基本数据类型的值，直接保存在栈内存中。值与值之间是独立存在，修改一个变量不会影响其他的变量。
对象是保存到堆内存中的。每创建一个新的对象，就会在堆内存中开辟出一个新的空间；而变量保存了对象的内存地址（对象的引用），保存在栈内存当中。如果两个变量保存了同一个对象的引用，当一个通过一个变量修改属性时，另一个也会受到影响。
*/

Number(null) // 0
5 + null // 5

Number(undefined) // NaN
5 + undefined // NaN


// 空数组（[]）和空对象（{}）对应的布尔值，都是true
if ([]) {
  console.log('true');
}
// true

if ({}) {
  console.log('true');
}
// true

// parseInt方法用于将字符串转为整数。
parseInt('123') // 123

// 如果parseInt的参数不是字符串，则会先转为字符串再转换。
parseInt(1.23) // 1
// 等同于
parseInt('1.23') // 1
// 进制转换
parseInt('1000', 2) // 8
parseInt('1000', 6) // 216
parseInt('1000', 8) // 512

// 如果第二个参数不是数值，会被自动转为一个整数。这个整数只有在2到36之间，才能得到有意义的结果，超出这个范围，则返回NaN。如果第二个参数是0、undefined和null，则直接忽略。
parseInt('10', 37) // NaN
parseInt('10', 1) // NaN
parseInt('10', 0) // 10
parseInt('10', null) // 10
parseInt('10', undefined) // 10

parseInt('1546', 2) // 1
parseInt('546', 2) // NaN
// 上面代码中，对于二进制来说，1是有意义的字符，5、4、6都是无意义的字符，所以第一行返回1，第二行返回NaN

parseInt(0x11, 36) // 43
parseInt(0x11, 2) // 1
// 等同于
parseInt(String(0x11), 36)
parseInt(String(0x11), 2)
// 等同于
parseInt('17', 36)//43
parseInt('17', 2)//1

parseInt(011, 2) // NaN
// 等同于
parseInt(String(011), 2)
// 等同于
parseInt(String(9), 2)

// 如果参数不是字符串，或者字符串的第一个字符不能转化为浮点数，则返回NaN。
parseFloat(true)  // NaN
Number(true) // 1
parseFloat(null) // NaN
Number(null) // 0
parseFloat('') // NaN
Number('') // 0
parseFloat('123.45#') // 123.45
Number('123.45#') // NaN

// isNaN方法可以用来判断一个值是否为NaN。
isNaN(NaN) // true
isNaN(123) // false

isNaN('Hello') // true
// 相当于
isNaN(Number('Hello')) // true

isNaN({}) // true
// 等同于
isNaN(Number({})) // true

isNaN(['xzy']) // true
// 等同于
isNaN(Number(['xzy'])) // true

isNaN([]) // false
isNaN([123]) // false
isNaN(['123']) // false

// 判断NaN更可靠的方法是，利用NaN为唯一不等于自身的值的这个特点，进行判断。
function myIsNaN(value) {
  return value !== value;
}

// 字符串可以被视为字符数组，因此可以使用数组的方括号运算符，用来返回某个位置的字符（位置编号从0开始）。
var s = 'hello';
s[0] // "h"
s[1] // "e"
s[4] // "o"

// 直接对字符串使用方括号运算符
'hello'[1] // "e"

// 但是，字符串与数组的相似性仅此而已。实际上，无法改变字符串之中的单个字符。
var s = 'hello';

delete s[0];
s // "hello"

s[1] = 'a';
s // "hello"

s[5] = '!';
s // "hello"

var s = 'hello';
s.length // 5
s.length = 3;
s.length // 5
s.length = 7;
s.length // 5

// Base64 转码
var string = 'Hello World!';
btoa(string) // "SGVsbG8gV29ybGQh"
atob('SGVsbG8gV29ybGQh') // "Hello World!"

function b64Encode(str) {
  return btoa(encodeURIComponent(str));
}
function b64Decode(str) {
  return decodeURIComponent(atob(str));
}
b64Encode('你好') // "JUU0JUJEJUEwJUU1JUE1JUJE"
b64Decode('JUU0JUJEJUEwJUU1JUE1JUJE') // "你好"

// 如果键名不符合标识名的条件（比如第一个字符为数字，或者含有空格或运算符），且也不是数字，则必须加上引号，否则会报错。
// 报错
var obj = {
  1p: 'Hello World'
};

// 不报错
var obj = {
  '1p': 'Hello World',
  'h w': 'Hello World',
  'p+q': 'Hello World'
};

// 属性可以动态创建，不必在对象声明时就指定。
var obj = {};
obj.foo = 123;
obj.foo // 123

// 如果要解释为对象，最好在大括号前加上圆括号。因为圆括号的里面，只能是表达式，所以确保大括号只能解释为对象。
({ foo: 123 }) // 正确
({ console.log(123) }) // 报错

eval('{foo: 123}') // 123
eval('({foo: 123})') // {foo: 123}

var foo = 'bar';
var obj = {
  foo: 1,
  bar: 2
};
obj.foo  // 1
obj[foo]  // 2

// 数字键可以不加引号，因为会自动转成字符串。
var obj = {
  0.7: 'Hello World'
};
obj['0.7'] // "Hello World"
obj[0.7] // "Hello World"

var obj = {
  123: 'hello world'
};
obj.123 // 报错
obj[123] // "hello world"

var obj = { p: 1 };
// 等价于
var obj = {};
obj.p = 1;

// 查看一个对象本身的所有属性，可以使用Object.keys方法。
var obj = {
  key1: 1,
  key2: 2
};
Object.keys(obj);
// ['key1', 'key2']

var obj = { p: 1 };
Object.keys(obj) // ["p"]
delete obj.p // true
obj.p // undefined
Object.keys(obj) // []

// 只有一种情况，delete命令会返回false，那就是该属性存在，且不得删除。
// delete命令只能删除对象本身的属性，无法删除继承的属性
var obj = Object.defineProperty({}, 'p', {
  value: 123,
  configurable: false
});

obj.p // 123
delete obj.p // false

var obj = {};
delete obj.toString // true
obj.toString // function toString() { [native code] }

// 属性是否存在：in 运算符
var obj = { p: 1 };
'p' in obj // true
'toString' in obj // true

// 可以使用对象的hasOwnProperty方法判断一下，是否为对象自身的属性。
var obj = {};
if ('toString' in obj) {
  console.log(obj.hasOwnProperty('toString')) // false
}

// for...in循环用来遍历一个对象的全部属性。
var obj = {a: 1, b: 2, c: 3};
for (var i in obj) {
  console.log('键名：', i);
  console.log('键值：', obj[i]);
}
// 键名： a
// 键值： 1
// 键名： b
// 键值： 2
// 键名： c
// 键值： 3

/*
for...in循环有两个使用注意点。
它遍历的是对象所有可遍历（enumerable）的属性，会跳过不可遍历的属性。
它不仅遍历对象自身的属性，还遍历继承的属性。
*/

var person = { name: '老张' };
for (var key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key);
  }
}
// name

// with它的作用是操作同一个对象的多个属性时，提供一些书写的方便。
// 例一
var obj = {
  p1: 1,
  p2: 2,
};
with (obj) {
  p1 = 4;
  p2 = 5;
}
// 等同于
obj.p1 = 4;
obj.p2 = 5;
// 例二
with (document.links[0]){
  console.log(href);
  console.log(title);
  console.log(style);
}
// 等同于
console.log(document.links[0].href);
console.log(document.links[0].title);
console.log(document.links[0].style);

/*
浅拷贝：只拷贝最外面一层的数据；更深层次的对象，只拷贝引用。
深拷贝：拷贝多层数据；每一层级别的数据都会拷贝。深拷贝会把对象里所有的数据重新复制到新的内存空间，是最彻底的拷贝。
*/

// 浅拷贝的实现方式
const obj1 = {
  name: 'qianguyihao',
  age: 28,
  info: {
      desc: '很厉害', //但是，obj2.info 属性，跟 obj1.info属性，它俩指向的是同一个堆内存地址。
  },
};
const obj2 = {};
//  用 for in 将 obj1 的值拷贝给 obj2
for (let key in obj1) {
  obj2[key] = obj1[key];
}

// 用 Object.assgin() 实现浅拷贝
const obj1 = {
  name: 'qianguyihao',
  age: 28,
  info: {
      desc: 'hello',
  },
};
// 浅拷贝：把 obj1 拷贝给 obj2。如果 obj1 只有一层数据，那么，obj1 和 obj2 则互不影响
const obj2 = Object.assign({}, obj1);//但是，obj2.info 属性，跟 obj1.info属性，它俩指向的是同一个堆内存地址。

// 深拷贝的实现方式
// 深拷贝其实就是将浅拷贝进行递归。
let obj1 = {
  name: 'qianguyihao',
  age: 28,
  info: {
      desc: 'hello',
  },
  color: ['red', 'blue', 'green'],
};
let obj2 = {};
deepCopy(obj2, obj1);
console.log(obj2);
obj1.info.desc = 'github';
console.log(obj2);
// 方法：深拷贝
function deepCopy(newObj, oldObj) {
  for (let key in oldObj) {
      // 获取属性值 oldObj[key]
      let item = oldObj[key];
      // 判断这个值是否是数组
      if (item instanceof Array) {
          newObj[key] = [];
          deepCopy(newObj[key], item);
      } else if (item instanceof Object) {
          // 判断这个值是否是对象
          newObj[key] = {};
          deepCopy(newObj[key], item);
      } else {
          // 简单数据类型，直接赋值
          newObj[key] = item;
      }
  }
}
//
function deepCopy(obj={}) {
  if (typeof obj !== 'Object' || obj == null) {
    return obj
  }
  let result
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepCopy(obj[key])
    } 
  }
  return result
}

if (obj.a == null)
// 相当于
if (obj.a === null || obj.a === undefined)

// 这个x只在函数体内部可用，指代函数表达式本身，其他地方都不可用。
var print = function x(){
  console.log(typeof x);
};
x // ReferenceError: x is not defined
print() // function

// 如果同一个函数被多次声明，后面的声明就会覆盖前面的声明。
function f() {
  console.log(1);
}
f() // 2

function f() {
  console.log(2);
}
f() // 2

// 计算斐波那契数列的代码。
function fib(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return fib(num - 2) + fib(num - 1);
}
fib(6) // 8

function foo(x) {
  if (x > 100) {
    var tmp = x - 100;
  }
}
// 等同于
function foo(x) {
  var tmp;
  if (x > 100) {
    tmp = x - 100;
  };
}

// 闭包：自由变量的查找，是在函数定义的地方，向上级作用域查找，不是在执行的时候查找
var a = 1;
var x = function () {
  console.log(a);
};
function f() {
  var a = 2;
  x();
}
f() // 1

var p = 2;
function f(p) {
  p = 3;
}
f(p);
p // 2
////
var obj = { p: 1 };
function f(o) {
  o.p = 2;
}
f(obj);
obj.p // 2

// 形式参数（o）的值实际是参数obj的地址，重新对o赋值导致o指向另一个地址，保存在原地址上的值当然不受影响。
var obj = [1, 2, 3];
function f(o) {
  o = [2, 3, 4];
}
f(obj);
obj // [1, 2, 3]

var f = function (one) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  console.log(arguments.length);
}
f(1, 2, 3)
// 1
// 2
// 3
//3

var args = Array.prototype.slice.call(arguments);
// 或者
var args = [];
for (var i = 0; i < arguments.length; i++) {
  args.push(arguments[i]);
}
// 或者
var args = Array.from(arguments)

console.log(arguments.callee === f);//true

// 闭包
// 如果出于种种原因，需要得到函数内的局部变量。正常情况下，这是办不到的，只有通过变通方法才能实现。那就是在函数的内部，再定义一个函数。
// 可以把闭包简单理解成“定义在一个函数内部的函数”。闭包最大的特点，就是它可以“记住”诞生的环境，比如f2记住了它诞生的环境f1，所以从f2可以得到f1的内部变量。在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。
// 闭包的最大用处有两个，一个是可以读取函数内部的变量，另一个就是让这些变量始终保持在内存中，即闭包可以使得它诞生环境一直存在
function f1() {
  var n = 999;
  function f2() {
    console.log(n);
  }
  return f2; //闭包就是函数f2，即能够读取其他函数内部变量的函数
}
var result = f1();
result(); // 999

function createIncrementor(start) {
  return function () {
    return start++;
  };
}
var inc = createIncrementor(5);
inc() // 5
inc() // 6
inc() // 7
// 不会在调用结束后，被垃圾回收机制回收。
// 上面代码中，start是函数createIncrementor的内部变量。通过闭包，start的状态被保留了，每一次调用都是在上一次调用的基础上进行计算。从中可以看到，闭包inc使得函数createIncrementor的内部环境，一直存在。所以，闭包可以看作是函数内部作用域的一个接口。

// 闭包的另一个用处，是封装对象的私有属性和私有方法。
function Person(name) {
  var _age;
  function setAge(n) {
    _age = n;
  }
  function getAge() {
    return _age;
  }

  return {
    name: name,
    getAge: getAge,
    setAge: setAge
  };
}

var p1 = Person('张三');
p1.setAge(25);
p1.getAge() // 25
// 上面代码中，函数Person的内部变量_age，通过闭包getAge和setAge，变成了返回对象p1的私有变量。
// 注意，外层函数每次运行，都会生成一个新的闭包，而这个闭包又会保留外层函数的内部变量，所以内存消耗很大。因此不能滥用闭包，否则会造成网页的性能问题。


// 立即调用的函数表达式，写法二比写法一更好，因为完全避免了污染全局变量。
// 写法一
var tmp = newData;
processData(tmp);
storeData(tmp);
// 写法二
(function () {
  var tmp = newData;
  processData(tmp);
  storeData(tmp);
}());

// eval命令接受一个字符串作为参数，并将这个字符串当作语句执行。
eval('var a = 1;');
a // 1
// 如果eval的参数不是字符串，那么会原样返回。
eval(123) // 123
// eval没有自己的作用域，都在当前作用域内执行，因此可能会修改当前作用域的变量的值，造成安全问题。
var a = 1;
eval('a = 2');
a // 2

(function f() {
  'use strict';
  var foo = 1;
  eval('foo = 2');
  console.log(foo);  // 2
})()
// 上面代码中，严格模式下，eval内部还是改写了外部变量，可见安全风险依然存在。
// 总之，eval的本质是在当前作用域之中，注入代码。由于安全风险和不利于 JavaScript 引擎优化执行速度，所以一般不推荐使用。通常情况下，eval最常见的场合是解析 JSON 数据的字符串，不过正确的做法应该是使用原生的JSON.parse方法。

