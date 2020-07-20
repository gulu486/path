"\u{20BB7}"
// "𠮷"

"\u{41}\u{42}\u{43}"
// "ABC"

let hello = 123;//声明变量hello
hell\u{6F} // 123

'\u{1F680}' === '\uD83D\uDE80'
// true

for (let codePoint of 'foo') {//遍历字符串'foo'
  console.log(codePoint)
}
// "f"
// "o"
// "o"

// 模板字符串
$('#result').append(//在id为result得dom节点添加模板
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
`);//模板字符串写法，${basket.count}变量的值

// 普通字符串
`In JavaScript '\n' is a line-feed.`
// 多行字符串
`In JavaScript this is
 not legal.`//两行

console.log(`string text line 1
string text line 2`);
// 字符串中嵌入变量
let name = "Bob", time = "today";//声明两个变量
`Hello ${name}, how are you ${time}?`//嵌入变量的值

let greeting = `\`Yo\` World!`;//反义符

// 如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中。
$('#list').html(`
<ul>
  <li>first</li>
  <li>second</li>
</ul>
`);
// 上面代码中，所有模板字符串的空格和换行，都是被保留的，比如<ul>标签前面会有一个换行。如果你不想要这个换行，可以使用trim方法消除它。
$('#list').html(`
<ul>
  <li>first</li>
  <li>second</li>
</ul>
`.trim());

// 模板字符串中嵌入变量，需要将变量名写在${}之中。
function authorize(user, action) {
  if (!user.hasPrivilege(action)) {
    throw new Error(
      // 传统写法为
      // 'User '
      // + user.name
      // + ' is not authorized to do '
      // + action
      // + '.'
      `User ${user.name} is not authorized to do ${action}.`);
  }
}

let x = 1;
let y = 2;

`${x} + ${y} = ${x + y}`
// "1 + 2 = 3"

`${x} + ${y * 2} = ${x + y * 2}`
// "1 + 4 = 5"

let obj = {x: 1, y: 2};
`${obj.x + obj.y}`
// "3"

// 模板字符串之中还能调用函数。
function fn() {
  return "Hello World";
}

`foo ${fn()} bar`
// foo Hello World bar

// 模板字符串之中还能调用函数。
function fn() {
  return "Hello World";
}

`foo ${fn()} bar`
// foo Hello World bar

// 如果大括号中的值不是字符串，将按照一般的规则转为字符串。比如，大括号中是一个对象，将默认调用对象的toString方法。

// 变量place没有声明
let msg = `Hello, ${place}`;
// 报错

// 由于模板字符串的大括号内部，就是执行 JavaScript 代码，因此如果大括号内部是一个字符串，将会原样输出。
`Hello ${'World'}`
// "Hello World"

// 模板字符串甚至还能嵌套。
const tmpl = addrs => `
  <table>
  ${addrs.map(addr => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
  `).join('')}
  </table>
`;
// 上面代码中，模板字符串的变量之中，又嵌入了另一个模板字符串，使用方法如下。
const data = [
    { first: '<Jane>', last: 'Bond' },
    { first: 'Lars', last: '<Croft>' },
];

console.log(tmpl(data));
// <table>
//
//   <tr><td><Jane></td></tr>
//   <tr><td>Bond</td></tr>
//
//   <tr><td>Lars</td></tr>
//   <tr><td><Croft></td></tr>
//
// </table>

// 如果需要引用模板字符串本身，在需要时执行，可以写成函数。
let func = (name) => `Hello ${name}!`;
func('Jack') // "Hello Jack!"

// 模板编译
let template = `
<ul>
  <% for(let i=0; i < data.supplies.length; i++) { %>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`;
// 上面代码在模板字符串之中，放置了一个常规模板。该模板使用<%...%>放置 JavaScript 代码，使用<%= ... %>输出 JavaScript 表达式。

//标签模板
alert`hello`
// 等同于
alert(['hello'])

// 如果模板字符里面有变量，就不是简单的调用了，而是会将模板字符串先处理成多个参数，再调用函数。
let a = 5;
let b = 10;

tag`Hello ${ a + b } world ${ a * b }`;
// 等同于
tag(['Hello ', ' world ', ''], 15, 50);
// 上面代码中，模板字符串前面有一个标识名tag，它是一个函数。整个表达式的返回值，就是tag函数处理模板字符串后的返回值。
// 函数tag依次会接收到多个参数。

function tag(stringArr, value1, value2){
  // ...
}
// 等同于
function tag(stringArr, ...values){
  // ...
}