<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icon  :iconsList="iconsList"></home-icon>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from './component/HomeHeader'
import HomeSwiper from './component/HomeSwiper'
import HomeIcon from './component/HomeIcon'
import HomeRecommend from './component/HomeRecommend'
import HomeWeekend from './component/HomeWeekend'
import HomeFooter from './component/HomeFooter'
import { mapState } from 'vuex'
import axios from 'axios'
export default {
  name: 'Home',
  components: {HomeHeader, HomeSwiper, HomeIcon, HomeRecommend, HomeWeekend, HomeFooter},
  // 首页发送ajax请求，获取到全部的首页数据
  data () {
    return {
      'iconsList': [],
      'swiperList': [],
      'recommendList': [],
      'weekendList': [],
      'lastCity': ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo (city) {
      axios.get('/api/home.json?city=' + city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.data && res.result) {
        const data = res.data
        this.iconsList = data.iconsList
        this.swiperList = data.swiperList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendItemList
      }
    }
  },
  mounted () {
    this.getHomeInfo(this.city)
    this.lastCity = this.city
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.getHomeInfo(this.city)
      this.lastCity = this.city
    }
  }
}
</script>

<style scoped>

</style>
