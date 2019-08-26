<template>
  <div>
    <home-header :city="city"></home-header>
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
import axios from 'axios'
export default {
  name: 'Home',
  components: {HomeHeader, HomeSwiper, HomeIcon, HomeRecommend, HomeWeekend, HomeFooter},
  // 首页发送ajax请求，获取到全部的首页数据
  data () {
    return {
      'city': '',
      'iconsList': [],
      'swiperList': [],
      'recommendList': [],
      'weekendList': []
    }
  },
  mounted () {
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/home.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.data && res.result) {
        const data = res.data
        this.city = data.city
        this.iconsList = data.iconsList
        this.swiperList = data.swiperList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendItemList
      }
    }
  }
}
</script>

<style scoped>

</style>
