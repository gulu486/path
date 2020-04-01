# learning-path
## 🏫 mdn
### [1.guess the number game](https://github.com/gulu486/learning-path/tree/master/web/mdn/guess%20the%20number%20game)
```javascript
// 0~100的随机数
let randomNumber = Math.floor(Math.random() * 100);

//添加节点和移除自身节点
document.body.appendChild(resetButton);
resetButton.parentNode.removeChild(resetButton);
```
>data\
html中的节点使用**document.querySelector**方法获取;\
随机数用内置Math产生，声明定义计数轮次**guessCount**;

>js\
if语句判断猜的数字高低和是否结束;\
for语句遍历设置内容清空;\
事件监听器**addEventListener('click', 𝓕)**执行函数;

### 2.joke generator
##  🔧 tool