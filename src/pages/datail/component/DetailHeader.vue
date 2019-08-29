<template>
    <div>
      <router-link
        tag="div"
        to="/"
        v-show="showAbs"
        class="header-abs"
      >
        <span class="iconfont header-abs-back">&#xe624;</span>
      </router-link>
      <router-link
        v-show="!showAbs"
        tag="div"
        to="/"
        :style="opacityStyle"
        class="header-fixed">
        <span class="iconfont header-fixed-back">&#xe624;</span>
        景点详情
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {opacity}
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  // 接触绑定
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
    .header-abs
      position absolute
      left .2rem
      top .2rem
      width .8rem
      height .8rem
      border-radius .4rem
      background: rgba(0,0,0,.8);
      text-align center
      line-height .8rem
      .header-abs-back
        color #fff
    .header-fixed
      position fixed
      top 0
      left 0
      right 0
      height .8rem
      line-height .8rem
      background: #00bcd4
      text-align center
      color #fff
      .header-fixed-back
        position absolute
        left .2rem
</style>
