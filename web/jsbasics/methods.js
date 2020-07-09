// 数据处理

// 根据row和col，进行data处理转换为多维数据
/*
row=1,col=2,_bookDataByRow:[{...},{...}]
row=2,col=2,_bookDataByRow:[[{...},{...}],[{...},{...}]]
*/
// from 小慕读书/HomeCard
bookData () {
  // 算法，数据处理，多维数组
  if (this.data && this.data.length > 0) {
    // 元素总个数
    const number = this.row * this.col
    // 从data中截取相应个数的number
    const _bookData = this.data.slice(0, number)
    // 存数据
    const _bookDataByRow = []
    let _row = 0
    while (_row < this.row) {
      // 数据截取分组
      _bookDataByRow.push(_bookData.slice(_row * this.col, _row * this.col + this.col))
      _row++
    }
    return _bookDataByRow
  } else {
    return []
  }
}