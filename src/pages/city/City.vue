<template>
    <div>
      <city-header></city-header>
      <city-search></city-search>
      <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
      <alphabet @changeLetter="handleChangeLetter" :cities="cities"></alphabet>
    </div>
</template>

<script>
import CityHeader from './component/CityHeader'
import CitySearch from './component/CitySearch'
import CityList from './component/CityList'
import Alphabet from './component/Alphabet'
import axios from 'axios'
export default {
  name: 'City',
  components: {CitySearch, CityHeader, CityList, Alphabet},
  data () {
    return {
      'hotCities': [],
      'cities': {},
      'letter': ''
    }
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    getCityInfo: function () {
      axios.get('/api/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc: function (res) {
      res = res.data
      if (res.data && res.ret) {
        const data = res.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    },
    handleChangeLetter: function (letter) {
      this.letter = letter
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
