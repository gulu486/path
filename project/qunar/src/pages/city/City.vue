<template>
  <div>
    <city-header/>
    <city-search :city="city"/>
    <!-- list组件接收来自alphabet组件的letter -->
    <city-list :hot="hotCity" :city="city" :letter="letter"/>
    <city-alphabet :city="city" @change="letterChange"/>
  </div>
</template>

<script>
// 引入Header组件
import CityHeader from './components/Header'
// 引入Search组件
import CitySearch from './components/Search'
// 引入List组件
import CityList from './components/List'
// 引入Alphabet组件
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    // 注册CityHeader组件
    CityHeader,
    // 注册CitySearch组件
    CitySearch,
    // 注册CityList组件
    CityList,
    // 注册CityAlphabet组件
    CityAlphabet
  },
  data () {
    return {
      hotCity: [],
      city: {},
      letter: ''
    }
  },
  methods: {
    // 父组件接收到e.target.innerText和this.letters[index]并赋值给letter
    letterChange (e) {
      this.letter = e
    }
  },
  mounted () {
    axios.get('/api/city.json')
      .then(res => {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.hotCity = data.hotCities
          this.city = data.cities
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
