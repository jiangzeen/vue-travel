<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icon></home-icon>
  </div>
</template>

<script>
import HomeHeader from './component/HomeHeader'
import HomeSwiper from './component/HomeSwiper'
import HomeIcon from './component/HomeIcon'
export default {
  name: 'Home',
  components: {HomeHeader, HomeSwiper, HomeIcon}
}
</script>

<style scoped>

</style>
