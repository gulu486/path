v-model：双向数据绑定

重点：双向数据绑定，只能用于表单元素，或者用于自定义组件。

```
区别：

v-bind：只能实现数据的单向绑定，从 M 自动绑定到 V。

v-model：只有v-model才能实现双向数据绑定。注意，v-model 后面不需要跟冒号，

注意：v-model 只能运用在表单元素中，或者用于自定义组件。常见的表单元素包括：input(radio, text, address, email....) 、select、checkbox 、textarea。
```

Vue中通过属性绑定为元素设置class 类样式
``` 
<!-- vue的写法1：数组的形式 -->
<h1 :class="['my-red', 'my-thin']">我是smyhvae，生命壹号</h1>
上方代码中，注意，数组里写的是字符串；如果不加单引号，就不是字符串了，而是变量。

写法二：在数组中使用三元表达式
<h1 :class="[flag?'my-active':'']">我是smyhvae，生命壹号</h1>

写法三：在数组中使用 对象 来代替 三元表达式（提高代码的可读性）
<h1 :class="[ {'my-active':flag} ]">我是smyhvae，生命壹号</h1>

写法四：直接使用对象
<h1 :class="{style1:true, style2:false}">我是smyhvae，生命壹号</h1>
```

Vue中通过属性绑定为元素设置 style 行内样式
```
写法一：直接在元素上通过 :style 的形式，书写样式对象。
<h1 :style="{color: 'red', 'font-size': '20px'}">我是生命壹号，smyhvae</h1>

写法二：将样式对象，定义到 data 中，并直接引用到 :style 中。

写法三：在 :style 中通过数组，引用多个 data 上的样式对象。
<h1 :style="[ styleObj1, styleObj2 ]">我是生命壹号，smyhvae</h1>
data: {
    styleObj1: { color: 'red', 'font-size': '20px' },
    styleObj2: { 'font-style': 'italic' }
}
```

v-for：for循环的四种使用方式

作用：根据数组中的元素遍历指定模板内容生成内容。
```
每次 for 循环的时候，通过指定 key 来标示当前循环这一项的唯一身份。

当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用 “就地复用” 策略。如果数据项的顺序被改变，Vue将不是移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。

为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 key 属性。

key的类型只能是：string/number，而且要通过 v-bind 来指定。
```

v-if：设置元素的显示和隐藏（添加/删除DOM元素）

作用：根据表达式的值的真假条件，来决定是否渲染元素，如果为false则不渲染（达到隐藏元素的目的），如果为true则渲染。

在切换时，元素和它的数据绑定会被销毁并重建。

v-show：设置元素的显示和隐藏（在元素上添加/移除style="display:none"属性）

作用：根据表达式的真假条件，来切换元素的 display 属性。如果为false，则在元素上添加 display:none属性；否则移除display:none属性。

v-if和v-show的区别
```
v-if和v-show都能够实现对一个元素的隐藏和显示操作。

区别：

v-if：每次都会重新添加/删除DOM元素

v-show：每次不会重新进行DOM的添加/删除操作，只是在这个元素上添加/移除style="display:none"属性，表示节点的显示和隐藏。

优缺点：

v-if：有较高的切换性能消耗。这个很好理解，毕竟每次都要进行dom的添加／删除操作。

v-show：有较高的初始渲染消耗。也就是说，即使一开始v-show="false"，该节点也会被创建，只是隐藏起来了。而v-if="false"的节点，根本就不会被创建。

总结：

如果元素涉及到频繁的切换，最好不要使用 v-if, 而是推荐使用 v-show

如果元素可能永远也不会被显示出来被用户看到，则推荐使用 v-if
```