// ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。
function log(x, y = 'World') {
  console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello

// 另一个例子
function Point(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

const p = new Point();
p // { x: 0, y: 0 }

// 参数变量是默认声明的，所以不能用let或const再次声明。
function foo(x = 5) {
  let x = 1; // error
  const x = 2; // error
}