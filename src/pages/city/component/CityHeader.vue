<template>
    <div class="header">
      城市选择
        <router-link to="/">
          <div class="iconfont city-back">&#xe624;</div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  .header
    background:  #00bcd4;
    position relative
    height .86rem
    line-height .86rem
    color #fff
    text-align center
    font-size .36rem
    .city-back
      width .7rem
      text-align center
      position absolute
      top 0
      left 0
      color #fff
      line-height .86rem
      font-size .4rem
</style>
