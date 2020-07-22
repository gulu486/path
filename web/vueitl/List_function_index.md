搜索
```javascript
search(keywords) { // 根据关键字，进行数据的搜索，返回匹配的item
    var newList = this.list.filter(item => {
        // 注意 ： ES6中，为字符串提供了一个新方法，叫做  String.prototype.includes('要包含的字符串')
        //  如果包含，则返回 true ，否则返回 false
        if (item.name.includes(keywords)) {
            return item
        }
    })
    return newList
  }
}
```