export default {
  citychange (ctx, el) {
    console.log(el)
    ctx.commit('citychange', el)
  }
}
