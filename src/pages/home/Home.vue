<template>
  <div>
    <home-header></home-header>
    <HomeSwiper></HomeSwiper>
  </div>
</template>

<script>
import HomeHeader from './component/HomeHeader'
import HomeSwiper from './component/HomeSwiper'
export default {
  name: 'Home',
  components: {HomeHeader, HomeSwiper}
}
</script>

<style scoped>

</style>
