<template>
  <div>
    <city-header></city-header>
    <city-search :city="city"></city-search>
    <city-list :hot="hotCity" :city="city" :letter="letter"></city-list>
    <city-alphabet :city="city" @change="letterChange"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
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
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      // console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.hotCity = data.hotCities
        this.city = data.cities
      }
    },
    letterChange (e) {
      // console.log(e)
      this.letter = e
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang='stylus' scoped>

</style>
