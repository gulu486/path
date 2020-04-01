# learning-path
## 🏫 mdn
### 1.[guess the number game](https://github.com/gulu486/learning-path/tree/master/web/mdn/guess%20the%20number%20game)
```javascript
// 0~100的随机数
let randomNumber = Math.floor(Math.random() * 100);

//添加节点和移除自身节点
document.body.appendChild(resetButton);
resetButton.parentNode.removeChild(resetButton);
```
>data\
html中的节点使用**document.querySelector**方法获取;\
随机数用内置函数Math产生，声明定义计数轮次**guessCount**;

>js\
if语句判断猜的数字高低和是否结束;\
for语句遍历设置内容清空;\
事件监听器**addEventListener**('**click**', 🎐)执行函数;

### 2.joke generator
##  🔧 tool
### 🎺 js
1.300毫秒点击延迟问题(click事件延迟)--**npm install fastclick --save**
```javascript
import fastClick from 'fastclick'
fastClick.attach(document.body)
```
b2.
### 🍀 css
1.重置页面样式表(手机浏览器页面样式统一)--**[reset.css](https://github.com/gulu486/learning-path/blob/master/web/tool/src/reset.css)**\
2.移动端1像素边框问题--**[border.css](https://github.com/gulu486/learning-path/blob/master/web/tool/src/border.css)**\
3.图标--**[iconfont](https://www.iconfont.cn/)**\
4.
### 🕸 [html](https://github.com/gulu486/learning-path/blob/master/web/tool/tool.html)
1.移动端设备，用户用手指放大缩小操作无效，页面比例始终是1：1\
2.
## 🎈 project
### 📃 [qunar](https://github.com/gulu486/learning-path/tree/master/project/qunar)
### 📃 tooth