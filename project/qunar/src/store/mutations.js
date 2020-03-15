export default {
  citychange (state, el) {
    state.city = el
    try {
      localStorage.city = el
    } catch (e) {
      console.log(e)
    }
  }
}
