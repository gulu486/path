const foo = 'bar';
const baz = {foo};
baz // {foo: "bar"}
// 等同于
const baz = {foo: foo};

function f(x, y) {
  return {x, y};
}
// 等同于
function f(x, y) {
  return {x: x, y: y};
}

f(1, 2) // Object {x: 1, y: 2}


const o = {
  method() {
    return "Hello!";
  }
};
// 等同于
const o = {
  method: function() {
    return "Hello!";
  }
};

let birth = '2000/01/01';
const Person = {
  name: '张三',
  //等同于birth: birth
  birth,
  // 等同于hello: function ()...
  hello() { console.log('我的名字是', this.name); }
};

function getPoint() {
  const x = 1;
  const y = 10;
  return {x, y};
}
getPoint()
// {x:1, y:10}

// CommonJS 模块输出一组变量，就非常合适使用简洁写法。
let ms = {};

function getItem (key) {
  return key in ms ? ms[key] : null;
}

function setItem (key, value) {
  ms[key] = value;
}

function clear () {
  ms = {};
}

module.exports = { getItem, setItem, clear };
// 等同于
module.exports = {
  getItem: getItem,
  setItem: setItem,
  clear: clear
};

// 属性的赋值器（setter）和取值器（getter），事实上也是采用这种写法。
const cart = {
  _wheels: 4,

  get wheels () {
    return this._wheels;
  },

  set wheels (value) {
    if (value < this._wheels) {
      throw new Error('数值太小了！');
    }
    this._wheels = value;
  }
}


let user = {
  name: 'test'
};
let foo = {
  bar: 'baz'
};
console.log(user, foo)
// {name: "test"} {bar: "baz"}
console.log({user, foo})
// {user: {name: "test"}, foo: {bar: "baz"}}

// 注意，简写的对象方法不能用作构造函数，会报错。
const obj = {
  f() {
    this.foo = 'bar';
  }
};
new obj.f() // 报错

// 方法一
obj.foo = true;
// 方法二
obj['a' + 'bc'] = 123;

var obj = {
  foo: true,
  abc: 123
};

let propKey = 'foo';
let obj = {
  [propKey]: true,
  ['a' + 'bc']: 123
};