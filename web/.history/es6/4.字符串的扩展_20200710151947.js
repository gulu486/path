"\u{20BB7}"
// "𠮷"

"\u{41}\u{42}\u{43}"
// "ABC"

let hello = 123;
hell\u{6F} // 123

'\u{1F680}' === '\uD83D\uDE80'
// true

for (let codePoint of 'foo') {
  console.log(codePoint)
}
// "f"
// "o"
// "o"

// 模板字符串
$('#result').append(
  'There are <b>' + basket.count + '</b> ' +
  'items in your basket, ' +
  '<em>' + basket.onSale +
  '</em> are on sale!'
);
// 上面这种写法相当繁琐不方便，ES6 引入了模板字符串解决这个问题。
$('#result').append(`
  There are <b>${basket.count}</b> items
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`);

// 普通字符串
`In JavaScript '\n' is a line-feed.`
// 多行字符串
`In JavaScript this is
 not legal.`

console.log(`string text line 1
string text line 2`);
// 字符串中嵌入变量
let name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`

let greeting = `\`Yo\` World!`;

// 如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中。
$('#list').html(`
<ul>
  <li>first</li>
  <li>second</li>
</ul>
`);