// JavaScript 语言中，生成实例对象的传统方法是通过构造函数。下面是一个例子。
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);

//es6
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
// 上面代码定义了一个“类”，可以看到里面有一个constructor方法，这就是构造方法，而this关键字则代表实例对象。也就是说，ES5 的构造函数Point，对应 ES6 的Point类的构造方法。

class Bar {
  doStuff() {
    console.log('stuff');
  }
}
var b = new Bar();
b.doStuff() // "stuff"


class Point {
  constructor() {
    // ...
  }
  toString() {
    // ...
  }
  toValue() {
    // ...
  }
}
// 等同于
Point.prototype = {
  constructor() {},
  toString() {},
  toValue() {},
};


class B {}
let b = new B();
b.constructor === B.prototype.constructor // true
// 上面代码中，b是B类的实例，它的constructor方法就是B类原型的constructor方法。

class Point {
  constructor(){
    // ...
  }
}
Object.assign(Point.prototype, {
  toString(){},
  toValue(){}
});

// 类的内部所有定义的方法，都是不可枚举的（non-enumerable）。
class Point {
  constructor(x, y) {
    // ...
  }

  toString() {
    // ...
  }
}

Object.keys(Point.prototype)
// []
Object.getOwnPropertyNames(Point.prototype)
// ["constructor","toString"]

class Point {
}
// 等同于
class Point {
  constructor() {}
}

class Foo {
  constructor() {
    return Object.create(null);
  }
}
new Foo() instanceof Foo
// false

// 类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。
class Foo {
  constructor() {
    return Object.create(null);
  }
}
Foo()
// TypeError: Class constructor Foo cannot be invoked without 'new'

class Point {
  // ...
}
// 报错
var point = Point(2, 3);
// 正确
var point = new Point(2, 3);

//定义类
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
var point = new Point(2, 3);
point.toString() // (2, 3)
point.hasOwnProperty('x') // true
point.hasOwnProperty('y') // true
point.hasOwnProperty('toString') // false
point.__proto__.hasOwnProperty('toString') // true
// 上面代码中，x和y都是实例对象point自身的属性（因为定义在this变量上），所以hasOwnProperty方法返回true，而toString是原型对象的属性（因为定义在Point类上），所以hasOwnProperty方法返回false。这些都与 ES5 的行为保持一致。

var p1 = new Point(2,3);
var p2 = new Point(3,2);
p1.__proto__ === p2.__proto__
//true

var p1 = new Point(2,3);
var p2 = new Point(3,2);
p1.__proto__.printName = function () { return 'Oops' };
p1.printName() // "Oops"
p2.printName() // "Oops"
var p3 = new Point(4,2);
p3.printName() // "Oops"