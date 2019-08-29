<template>
    <div class="detail">
      <banner></banner>
      <detail-header></detail-header>
      <div class="content"></div>
    </div>
</template>

<script>
import Banner from './component/Banner'
import DetailHeader from './component/DetailHeader'
export default {
  name: 'Detail',
  components: {Banner, DetailHeader}
}
</script>

<style lang="stylus" scoped>
  .content
    height 30rem
</style>
