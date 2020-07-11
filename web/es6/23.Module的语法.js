// 在 ES6 之前，社区制定了一些模块加载方案，最主要的有 CommonJS 和 AMD 两种。前者用于服务器，后者用于浏览器。ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 CommonJS 和 AMD 规范，成为浏览器和服务器通用的模块解决方案。

// ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。CommonJS 和 AMD 模块，都只能在运行时确定这些东西。比如，CommonJS 模块就是对象，输入时必须查找对象属性。

// CommonJS模块
let { stat, exists, readfile } = require('fs');
// 等同于
let _fs = require('fs');
let stat = _fs.stat;
let exists = _fs.exists;
let readfile = _fs.readfile;

// 上面代码的实质是整体加载fs模块（即加载fs的所有方法），生成一个对象（_fs），然后再从这个对象上面读取 3 个方法。这种加载称为“运行时加载”，因为只有运行时才能得到这个对象，导致完全没办法在编译时做“静态优化”。


// ES6 模块不是对象，而是通过export命令显式指定输出的代码，再通过import命令输入。
// ES6模块
import { stat, exists, readFile } from 'fs';
// 上面代码的实质是从fs模块加载 3 个方法，其他方法不加载。这种加载称为“编译时加载”或者静态加载，即 ES6 可以在编译时就完成模块加载，效率要比 CommonJS 模块的加载方式高。当然，这也导致了没法引用 ES6 模块本身，因为它不是对象。

// 模块功能主要由两个命令构成：export和import。export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。

// 一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量。下面是一个 JS 文件，里面使用export命令输出变量。
// profile.js
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;
// 上面代码是profile.js文件，保存了用户信息。ES6 将其视为一个模块，里面用export命令对外部输出了三个变量。

// export的写法，除了像上面这样，还有另外一种。
// profile.js
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

export { firstName, lastName, year };

// export命令除了输出变量，还可以输出函数或类（class）。
export function multiply(x, y) {
  return x * y;
};
// 上面代码对外输出一个函数multiply。

// 通常情况下，export输出的变量就是本来的名字，但是可以使用as关键字重命名。
function v1() { ... }
function v2() { ... }
export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
};
// 上面代码使用as关键字，重命名了函数v1和v2的对外接口。重命名后，v2可以用不同的名字输出两次。

// 报错
export 1;
// 报错
var m = 1;
export m;
// 上面两种写法都会报错，因为没有提供对外的接口。第一种写法直接输出 1，第二种写法通过变量m，还是直接输出 1。1只是一个值，不是接口。正确的写法是下面这样。
// 写法一
export var m = 1;
// 写法二
var m = 1;
export {m};
// 写法三
var n = 1;
export {n as m};

// 报错
function f() {}
export f;
// 正确
export function f() {};
// 正确
function f() {}
export {f};

export var foo = 'bar';
setTimeout(() => foo = 'baz', 500);
// 上面代码输出变量foo，值为bar，500 毫秒之后变成baz。

// 使用export命令定义了模块的对外接口以后，其他 JS 文件就可以通过import命令加载这个模块。
// main.js
import { firstName, lastName, year } from './profile.js';

function setName(element) {
  element.textContent = firstName + ' ' + lastName;
}
// 上面代码的import命令，用于加载profile.js文件，并从中输入变量。import命令接受一对大括号，里面指定要从其他模块导入的变量名。大括号里面的变量名，必须与被导入模块（profile.js）对外接口的名称相同。

// 如果想为输入的变量重新取一个名字，import命令要使用as关键字，将输入的变量重命名。
import { lastName as surname } from './profile.js';

// import命令输入的变量都是只读的，因为它的本质是输入接口。也就是说，不允许在加载模块的脚本里面，改写接口。
import {a} from './xxx.js'
a = {}; // Syntax Error : 'a' is read-only;
// 上面代码中，脚本加载了变量a，对其重新赋值就会报错，因为a是一个只读的接口。但是，如果a是一个对象，改写a的属性是允许的。
import {a} from './xxx.js'

a.foo = 'hello'; // 合法操作
// 上面代码中，a的属性可以成功改写，并且其他模块也可以读到改写后的值。不过，这种写法很难查错，建议凡是输入的变量，都当作完全只读，不要轻易改变它的属性。

import { foo } from 'my_module';
import { bar } from 'my_module';
// 等同于
import { foo, bar } from 'my_module';


// export-default.js
export default function () {
  console.log('foo');
}
// 上面代码是一个模块文件export-default.js，它的默认输出是一个函数。
// 其他模块加载该模块时，import命令可以为该匿名函数指定任意名字。
// import-default.js
import customName from './export-default';
customName(); // 'foo'
// 上面代码的import命令，可以用任意名称指向export-default.js输出的方法，这时就不需要知道原模块输出的函数名。需要注意的是，这时import命令后面，不使用大括号。

// export-default.js
export default function foo() {
  console.log('foo');
}
// 或者写成
function foo() {
  console.log('foo');
}
export default foo;
// 上面代码中，foo函数的函数名foo，在模块外部是无效的。加载的时候，视同匿名函数加载。

// 第一组
export default function crc32() { // 输出
  // ...
}
import crc32 from 'crc32'; // 输入

// 第二组
export function crc32() { // 输出
  // ...
};
import {crc32} from 'crc32'; // 输入
// 上面代码的两组写法，第一组是使用export default时，对应的import语句不需要使用大括号；第二组是不使用export default时，对应的import语句需要使用大括号。

// 正确
export var a = 1;
// 正确
var a = 1;
export default a;
// 错误
export default var a = 1;

// 正确
export default 42;
// 报错
export 42;