var regex = new RegExp('xyz', 'i');
// 等价于
var regex = /xyz/i;

var regex = new RegExp(/xyz/i);
// 等价于
var regex = /xyz/i;

var regex = new RegExp(/xyz/, 'i');
// Uncaught TypeError: Cannot supply flags when constructing one RegExp from another

// ES6
// 原有正则对象的修饰符是ig，它会被第二个参数i覆盖。
new RegExp(/abc/ig, 'i').flags
// "i"