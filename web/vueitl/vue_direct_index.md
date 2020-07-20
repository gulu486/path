qianguyihao

```
v-cloak
v-cloak指令和CSS 规则一起用的时候，能够解决差值表达式闪烁的问题（即：可以隐藏未编译的标签直到实例准备完毕）。

/*2、在样式表里设置：只要是有 v-cloak 属性的标签，我都让它隐藏。
    直到 Vue实例化完毕以后，v-cloak 会自动消失，那么对应的css样式就会失去作用，最终将span中的内容呈现给用户 */
    [v-cloak] {
      display: none;
    }

<!-- 1、给 span 标签添加 v-cloak 属性 -->
    <span v-cloak>{{name}}</span>
```

```
v-text
v-text可以将一个变量的值渲染到指定的元素中

<span v-text="name"></span>
data: {
      name: 'hello smyhvae'
    }
```

```
差值表达式和 v-text 的区别
区别1： v-text 没有闪烁的问题，因为它是放在属性里的。
区别2 :插值表达式只会替换自己的这个占位符，并不会把整个元素的内容清空。v-text 会覆盖元素中原本的内容。

<!-- 差值表达式 -->
<p>content:++++++{{name}}------</p>
<!-- v-text -->
<p v-text="name">------++++++</p>
其实，第二行代码中，只要浏览器中还没有解析到v-text="name"的时候，会显示------++++++；当解析到v-text="name"的时候，name的值会直接替换------++++++。
```

```
v-html
v-text是纯文本，而v-html会被解析成html元素
注意：使用v-html渲染数据可能会非常危险，因为它很容易导致 XSS（跨站脚本） 攻击，使用的时候请谨慎，能够使用{{}}或者v-text实现的不要使用v-html。
```

```
v-bind：用于绑定属性。
<img v-bind:src="imageSrc +'smyhvaeString'">
<div v-bind:style="{ fontSize: size + 'px' }"></div>
上方代码中，给属性加了 v-bind 之后，属性值里的整体内容是表达式，属性值里的imageSrc和size是Vue实例里面的变量。
也就是说， v-bind的属性值里，可以写合法的 js 表达式。
```

```
v-on:click：点击事件
v-on 提供了click 事件，也提供了一些其他的事件。
v-on:click
v-on:keydown
v-on:keyup
v-on:mousedown
v-on:mouseover
v-on:submit
...
```

```
文字滚动显示（跑马灯效果）

如果在定时器中直接使用this，这个this指向的是window。为了解决这个问题，我们是通过_this来解决了这个问题。

另外，我们还可以利用箭头函数来解决this指向的问题，因为箭头函数总的this指向，会继承外层函数的this指向。
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <div id="app">
        <p>{{msg}}</p>
        <input type="button" value="跑马灯走起" @click="startMethod">
        <input type="button" value="跑马灯停止" @click="stopMethod">

    </div>
    <script src="vue2.5.16.js"></script>
    <script>
        var vm = new Vue({
            el: '#app',
            data: {
                msg: '生命壹号，永不止步～～～',
                intervalId: null
            },
            methods: {
                startMethod: function () {

                    //【重要】在开启定时器之前，先进行判断，避免出现多个定时器
                    //如果出现了多个定时器，后面的“停止定时器”操作是无效的
                    if (this.intervalId != null) return; //【注意】这个定时器的this，一定不要忘记了

                    //添加定时器：点击按钮后，让字符串连续滚动
                    this.intervalId = setInterval(() => {
                        // 获取 msg 的第一个字符
                        var start = this.msg.substring(0, 1);
                        // 获取 后面的所有字符
                        var end = this.msg.substring(1);
                        // 重新拼接得到新的字符串，并赋值给 this.msg
                        // 注意： VM实例，会监听自己身上 data 中所有数据的改变，只要数据一发生变化，就会自动把 最新的数据，从data 上同步到页面中去
                        this.msg = end + start;
                        console.log(this.msg);
                    }, 400);
                },

                stopMethod: function () {
                    // 停止定时器：点击按钮后，停止字符串的滚动
                    clearInterval(this.intervalId);
                    // 每当清除了定时器之后，需要重新把 intervalId 置为 null
                    this.intervalId = null;
                }
            }
        })
    </script>

</body>

</html>
上方代码的总结：

在Vue的实例中，如果想要获取data里的属性、methods里面的方法，都要通过this来访问。这里的this指向的是Vue的实例对象。

VM实例，会监听自己身上 data 中所有数据的改变，只要数据一发生变化，就会自动把最新的数据，从 data 上同步到页面中去。这样做 的好处是：程序员只需要关心数据，不需要考虑如何重新渲染DOM页面；减少DOM操作。

在调用定时器 id 的时候，代码是this.intervalId，这个this一定不要漏掉了。
```