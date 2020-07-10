Number('0b111')  // 7
Number('0o10')  // 8

// Number.isNaN()用来检查一个值是否为NaN。
// Number.isNaN()只有对于NaN才返回true，非NaN一律返回false。
Number.isNaN(NaN) // true
Number.isNaN(15) // false
Number.isNaN('15') // false
Number.isNaN(true) // false
Number.isNaN(9/NaN) // true
Number.isNaN('true' / 0) // true
Number.isNaN('true' / 'true') // true

// ES5的写法
parseInt('12.34') // 12
parseFloat('123.45#') // 123.45

// ES6的写法
Number.parseInt('12.34') // 12
Number.parseFloat('123.45#') // 123.45

// 这样做的目的，是逐步减少全局性方法，使得语言逐步模块化。
Number.parseInt === parseInt // true
Number.parseFloat === parseFloat // true

// Number.isInteger()用来判断一个数值是否为整数。
Number.isInteger(25) // true
Number.isInteger(25.1) // false

// 如果参数不是数值，Number.isInteger返回false。
Number.isInteger() // false
Number.isInteger(null) // false
Number.isInteger('15') // false
Number.isInteger(true) // false