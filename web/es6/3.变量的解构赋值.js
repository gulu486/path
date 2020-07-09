let a = 1;//普通的定义赋值
let b = 2;//普通的定义赋值
let c = 3;//普通的定义赋值

// ES6
let [a, b, c] = [1, 2, 3];//数组形式的对应赋值

let [foo, [[bar], baz]] = [1, [[2], 3]];//二维数组形式
foo // 1
bar // 2
baz // 3

let [ , , third] = ["foo", "bar", "baz"];//一一对应
third // "baz"

let [x, , y] = [1, 2, 3];//中间的为空
x // 1
y // 3

let [head, ...tail] = [1, 2, 3, 4];//解构赋值，...扩展匹配多项
head // 1
tail // [2, 3, 4]，为数组

let [x, y, ...z] = ['a'];
x // "a"
// 如果解构不成功，变量的值就等于undefined。
y // undefined，未定义
z // []，为空数组

let [x, y] = [1, 2, 3];
x // 1
y // 2

let [a, [b], d] = [1, [2, 3], 4];
a // 1
b // 2
d // 4

// 报错,右边要是数组，要对应起来
let [foo] = 1;//不是数组，是数字
let [foo] = false;//不是数组，是布尔值
let [foo] = NaN;//不是数组，是数字
let [foo] = undefined;//不是数组，是未定义
let [foo] = null;//不是数组，是空对象
let [foo] = {};//不是数组，是对象

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
let [foo = true] = [];//foo默认值为true
foo // true

let [x, y = 'b'] = ['a']; // x='a', y的默认值为'b'
let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'

// ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。
let [x = 1] = [undefined];//数组成员等于undefined，默认值生效
x // 1

let [x = 1] = [null];//数组成员为null不是undefined，默认值不生效
x // null

// 如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值
function f() {
  console.log('aaa');
}

let [x = f()] = [1];//当x取f(),f()才会取值
// 等价于
let x;
if ([1][0] === undefined) {//[1][0]表示数组[1]的第一项
  x = f();//数组成员第一项为undefined，默认值生效
} else {
  x = [1][0];//数组成员第一项不适宜undefined，默认值不生效
}

// 默认值可以引用解构赋值的其他变量，但该变量必须已经声明。
let [x = 1, y = x] = [];     // x=1; y=1，x已声明
let [x = 1, y = x] = [2];    // x=2; y=2
let [x = 1, y = x] = [1, 2]; // x=1; y=2
let [x = y, y = 1] = [];     // ReferenceError: y is not defined，y没有提前声明，报错

// 解构不仅可以用于数组，还可以用于对象。
let { foo, bar } = { foo: 'aaa', bar: 'bbb' };//对应的是键名
foo // "aaa"
bar // "bbb"

// 对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
let { bar, foo } = { foo: 'aaa', bar: 'bbb' };//不根据顺序赋值，根据键名
foo // "aaa"
bar // "bbb"

let { baz } = { foo: 'aaa', bar: 'bbb' };
// 如果解构失败，变量的值等于undefined。
baz // undefined，解构失败，找不到对应键名，undefined

// 对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量。
// 例一
let { log, sin, cos } = Math;//对应Math里面的方法{log:f(),sin:f(),cos:f()}

// 例二
const { log } = console;//对应console里面的方法，{log:f()}
log('hello') // hello

// 如果变量名与属性名不一致，必须写成下面这样。
let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // "aaa",str类型，foo与baz不一致

let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
f // 'hello'，str
l // 'world'，str

// 对象的解构赋值是下面形式的简写
let { foo: foo, bar: bar } = { foo: 'aaa', bar: 'bbb' };//foo：foo简写foo，es6写法

// 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
let { foo: baz } = { foo: 'aaa', bar: 'bbb' };//真正被赋值的是baz，而不是foo。
baz // "aaa"
foo // error: foo is not defined
// foo是匹配的模式，baz才是变量。真正被赋值的是变量baz，而不是模式foo。

// 与数组一样，解构也可以用于嵌套结构的对象。
let obj = {
  p: [
    'Hello',
    { y: 'World' }
  ]
};
let { p: [x, { y }] } = obj;//p为匹配模式，不赋值
x // "Hello"
y // "World"
// 这时p是模式，不是变量，因此不会被赋值。如果p也要作为变量赋值，可以写成下面这样。
let obj = {
  p: [
    'Hello',
    { y: 'World' }
  ]
};

let { p, p: [x, { y }] } = obj;//给p赋值
x // "Hello"
y // "World"
p // ["Hello", {y: "World"}]，arr类型


// 代码有三次解构赋值，分别是对loc、start、line三个属性的解构赋值。注意，最后一次对line属性的解构赋值之中，只有line是变量，loc和start都是模式，不是变量。
const node = {
  loc: {
    start: {
      line: 1,
      column: 5
    }
  }
};
let { loc, loc: { start }, loc: { start: { line }} } = node;//loc赋值，loc模式start赋值，loc、start模式line赋值
line // 1
loc  // Object {start: Object}
start // Object {line: 1, column: 5}

// 嵌套赋值
let obj = {};
let arr = [];
({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });
obj // {prop:123}，obj.prop=123
arr // [true]，arr[0]=true

// 如果解构模式是嵌套的对象，而且子对象所在的父属性不存在，那么将会报错。
// 报错
let {foo: {bar}} = {baz: 'baz'};//{bar}与'baz'形式不一致，报错

// 对象的解构赋值可以取到继承的属性。
const obj1 = {};
const obj2 = { foo: 'bar' };
Object.setPrototypeOf(obj1, obj2);//obj1继承obj2

const { foo } = obj1;
foo // "bar"

// 对象的解构也可以指定默认值。
var {x = 3} = {};//理解为x：x=3
x // 3

var {x, y = 5} = {x: 1};//y的默认值为5
x // 1
y // 5

var {x: y = 3} = {};//x为模式，y的默认值为3
y // 3

var {x: y = 3} = {x: 5};//子对象属性值为5，不是undefined，默认值不生效
y // 5

var { message: msg = 'Something went wrong' } = {};//对象属性值为undefined，默认值生效
msg // "Something went wrong"

// 默认值生效的条件是，对象的属性值严格等于undefined。
var {x = 3} = {x: undefined};//对象属性值为undefined，默认值生效
x // 3

var {x = 3} = {x: null};//对象属性值为null，默认值不生效
x // null

// 如果要将一个已经声明的变量用于解构赋值，必须非常小心。
// 错误的写法
let x;//声明了x
{x} = {x: 1};//x是模式，但是已声明，报错
// SyntaxError: syntax error

// 正确的写法
let x;
({x} = {x: 1});//外层加括号

// 由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构。
let arr = [1, 2, 3];
let {0 : first, [arr.length - 1] : last,length} = arr;//0是匹配模式，first赋值,arr是特殊的对象
first // 1
last // 3
length// 3

// 字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。
const [a, b, c, d, e] = 'hello';//字符串被转换成了一个类似数组的对象
a // "h"，str类型
b // "e"，str类型
c // "l"，str类型
d // "l"，str类型
e // "o"，str类型

// 类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
let {length : len} = 'hello';//length：5
len // 5

// 解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。
// 数值和布尔值的包装对象都有toString属性，因此变量s都能取到值。
let {toString: s} = 123;//123先转换为对象
s === Number.prototype.toString // true，Number的显式原型的toString方法

let {toString: s} = true;//true先转换为对象
s === Boolean.prototype.toString // true，Boolean的显式原型的toString方法

// undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
let { prop: x } = undefined; // TypeError，undefined无法转换为对象
let { prop: y } = null; // TypeError，null无法转换为对象

// 函数的参数也可以使用解构赋值。
function add([x, y]){
  return x + y;
}

add([1, 2]); // 3

[[1, 2], [3, 4]].map(([a, b]) => a + b);//参数解构，数组形式
// [ 3, 7 ]

// 函数参数的解构也可以使用默认值。
function move({x = 0, y = 0} = {}) {//对象参数解构，有默认值
  return [x, y];
}

move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]

// 代码是为函数move的参数指定默认值，而不是为变量x和y指定默认值
function move({x, y} = { x: 0, y: 0 }) {//有默认值
  return [x, y];
}

move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, undefined]，参数y不存在，无法赋值
move({}); // [undefined, undefined]，x和y都不在的空对象
move(); // [0, 0]，取默认值

// undefined就会触发函数参数的默认值。
[1, undefined, 3].map((x = 'yes') => x);//undefined，默认值生效
// [ 1, 'yes', 3 ]

// 以下三种解构赋值不得使用圆括号。
// 变量声明语句
// 全部报错
let [(a)] = [1];//不能使用括号

let {x: (c)} = {};//不能使用括号
let ({x: c}) = {};//不能使用括号
let {(x: c)} = {};//不能使用括号
let {(x): c} = {};//不能使用括号

let { o: ({ p: p }) } = { o: { p: 2 } };//不能使用括号

// 函数参数
// 报错
function f([(z)]) { return z; }
// 报错
function f([z,(x)]) { return x; }

// 赋值语句的模式
// 全部报错
({ p: a }) = { p: 42 };//不能使用括号
([a]) = [5];//不能使用括号

// 报错
[({ p: a }), { x: c }] = [{}, {}];//不能使用括号

// 可以使用圆括号的情况只有一种：赋值语句的非模式部分，可以使用圆括号。
[(b)] = [3]; // 正确，不是变量声明语句
({ p: (d) } = {}); // 正确，赋值语句的非模式部分
[(parseInt.prop)] = [3]; // 正确，不是变量声明语句

// 变量的解构赋值用途很多。
// 交换变量的值
let x = 1;
let y = 2;
[x, y] = [y, x];//x和y值互换

// 从函数返回多个值
// 返回一个数组

function example() {
  return [1, 2, 3];
}
let [a, b, c] = example();//return [1,2,3]

// 返回一个对象

function example() {
  return {
    foo: 1,
    bar: 2
  };
}
let { foo, bar } = example();//返回一个对象{ foo: 1,bar: 2};

// 函数参数的定义
// 参数是一组有次序的值
function f([x, y, z]) { ... }//一一对应
f([1, 2, 3]);

// 参数是一组无次序的值
function f({x, y, z}) { ... }
f({z: 3, y: 2, x: 1});//匹配模式与属性不同

// 提取 JSON 数据
let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};

let { id, status, data: number } = jsonData;//json对象

console.log(id, status, number);
// 42, "OK", [867, 5309]

// 函数参数的默认值
jQuery.ajax = function (url, {
  async = true,
  beforeSend = function () {},
  cache = true,
  complete = function () {},
  crossDomain = false,
  global = true,
  // ... more config
} = {}) {
  // ... do stuff
};
// 指定参数的默认值，就避免了在函数体内部再写var foo = config.foo || 'default foo';这样的语句。

// 遍历 Map 结构
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {//[key, value] = map
  console.log(key + " is " + value);
}
// first is hello
// second is world

// 获取键名
for (let [key] of map) {
  // ...
}

// 获取键值
for (let [,value] of map) {
  // ...
}

// 输入模块的指定方法
// 加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰。
const { SourceMapConsumer, SourceNode } = require("source-map");//加载所需模块