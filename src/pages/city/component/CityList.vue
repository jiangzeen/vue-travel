<template>
    <div class="list" ref="wrapper">
      <div>
        <div class="area">
          <div class="title">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">赣州</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper" v-for="(hotCity, index) in hotCities" :key="index">
              <div class="button">{{ hotCity.name }}</div>
            </div>
          </div>
        </div>
        <div class="area" v-for="(citiesItem, name, index) of cities" :key="index">
          <div class="title border-topbottom">{{ name }}</div>
          <div class="item-list" v-for="city in citiesItem" :key="city.id">
            <div class="item border-bottom">{{ city.name }}</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    'hotCities': Array,
    'cities': Object
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
    .list
      position absolute
      top 1.5rem
      left 0
      right 0
      bottom 0
      overflow hidden
      .border-topbottom
        &:before
          border-color #ccc
        &:after
          border-color #ccc
      .border-bottom
        &:before
          border-color #ccc
      .title
        color #666
        background: #eee;
        padding-left .2rem
        line-height .44rem
        font-size .26rem
      .button-list
        overflow hidden
        padding .1rem .6rem .1rem .1rem
        .button-wrapper
          float left
          width 33.33%
          .button
            margin .1rem
            padding .1rem 0
            border .02rem solid #ccc
            text-align center
            border-radius .06rem
      .item-list
         .item
           line-height .54rem
           color #666
           padding-left  .2rem
</style>
