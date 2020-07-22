[全局过滤器](https://v1-cn.vuejs.org/api/#%E8%BF%87%E6%BB%A4%E5%99%A8)

[自定义过滤器](https://v1-cn.vuejs.org/guide/custom-filter.html)

可以用全局方法Vue.filter()自定义一个全局过滤器
```javascript
{{ msg | msgFormat }}
// Vue.filter 中的第一个参数是过滤器的名称，第二个参数是具体的过滤器函数
// 定义一个 Vue 全局的过滤器，名字叫做  msgFormat
Vue.filter('msgFormat', function (myMsg) {  // function 的第一个参数指的是管道符前面的 msg
  // 字符串的  replace 方法，第一个参数，除了可写一个 字符串之外，还可以定义一个正则
  return myMsg.replace(/单纯/g, '邪恶')
})
```

给过滤器添加多个参数
```javascript
{{ msg | msgFormat('牛x', '参数arg3') }}
// 定义一个 Vue 全局的过滤器，名字叫做  msgFormat
Vue.filter('msgFormat', function (myMsg, arg2, arg3) {
    // 字符串的  replace 方法：第一个参数，除了可写一个 字符串之外，还可以定义一个正则；第二个参数代表要替换为 xxx
    //将 myMsg 中的所有`单纯`字样，修改为`arg2 + arg3`
    return myMsg.replace(/单纯/g, arg2 + arg3)
})
```
同时使用多个过滤器
```javascript
{{ msg | msgFormat('牛x', '参数arg3') | myFilter2}}
添加了多个过滤器，实现的思路是：将 msg 交给第一个过滤器来处理，然后将处理的结果交给第二个过滤器来处理 。
```

时间过滤器
```javascript
time: new Date()
Vue.filter('datefmt', function (input) {
    // 过滤器的逻辑：将input的值格式化成 yyyy-MM-dd 字符串输出
    var res = '';
    var year = input.getFullYear();
    var month = input.getMonth() + 1;
    var day = input.getDate();

    res = year + '-' + month + '-' + day;

    return res;
});
```

[[1,3],[2,6],[8,10],[15,18]]