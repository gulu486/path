let defaultCity = '深圳'
// 用户关闭本地存储,抛出异常
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
  console.log(e)
}

export default {
  city: defaultCity
}
