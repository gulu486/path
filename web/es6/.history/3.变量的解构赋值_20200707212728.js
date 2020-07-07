let a = 1;
let b = 2;
let c = 3;

// ES6
let [a, b, c] = [1, 2, 3];

let [foo, [[bar], baz]] = [1, [[2], 3]];
foo // 1
bar // 2
baz // 3

let [ , , third] = ["foo", "bar", "baz"];
third // "baz"

let [x, , y] = [1, 2, 3];
x // 1
y // 3

let [head, ...tail] = [1, 2, 3, 4];
head // 1
tail // [2, 3, 4]

let [x, y, ...z] = ['a'];
x // "a"
// 如果解构不成功，变量的值就等于undefined。
y // undefined
z // []

let [x, y] = [1, 2, 3];
x // 1
y // 2

let [a, [b], d] = [1, [2, 3], 4];
a // 1
b // 2
d // 4

// 报错,右边要是数组
let [foo] = 1;
let [foo] = false;
let [foo] = NaN;
let [foo] = undefined;
let [foo] = null;
let [foo] = {};

// 对于 Set 结构，也可以使用数组的解构赋值。
let [x, y, z] = new Set(['a', 'b', 'c']);
x // "a"

// 只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。
// fibs是一个 Generator 函数（参见《Generator 函数》一章），原生具有 Iterator 接口。解构赋值会依次从这个接口获取值。
function* fibs() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

let [first, second, third, fourth, fifth, sixth] = fibs();
sixth // 5

// 解构赋值允许指定默认值。
let [foo = true] = [];
foo // true

let [x, y = 'b'] = ['a']; // x='a', y='b'
let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'

// ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。
let [x = 1] = [undefined];
x // 1

let [x = 1] = [null];
x // null

// 如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值
function f() {
  console.log('aaa');
}

let [x = f()] = [1];
// 等价于
let x;
if ([1][0] === undefined) {
  x = f();
} else {
  x = [1][0];
}

// 默认值可以引用解构赋值的其他变量，但该变量必须已经声明。
let [x = 1, y = x] = [];     // x=1; y=1
let [x = 1, y = x] = [2];    // x=2; y=2
let [x = 1, y = x] = [1, 2]; // x=1; y=2
let [x = y, y = 1] = [];     // ReferenceError: y is not defined

// 解构不仅可以用于数组，还可以用于对象。
let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
foo // "aaa"
bar // "bbb"

// 对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
let { bar, foo } = { foo: 'aaa', bar: 'bbb' };
foo // "aaa"
bar // "bbb"

let { baz } = { foo: 'aaa', bar: 'bbb' };、
// 如果解构失败，变量的值等于undefined。
baz // undefined

// 对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量。
// 例一
let { log, sin, cos } = Math;

// 例二
const { log } = console;
log('hello') // hello

// 如果变量名与属性名不一致，必须写成下面这样。

let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // "aaa"

let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
f // 'hello'
l // 'world'

// 对象的解构赋值是下面形式的简写
let { foo: foo, bar: bar } = { foo: 'aaa', bar: 'bbb' };

// 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
