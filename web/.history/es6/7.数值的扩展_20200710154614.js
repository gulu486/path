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