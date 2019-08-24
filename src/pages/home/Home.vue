<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icon></home-icon>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
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
export default {
  name: 'Home',
  components: {HomeHeader, HomeSwiper, HomeIcon, HomeRecommend, HomeWeekend, HomeFooter}
}
</script>

<style scoped>

</style>
