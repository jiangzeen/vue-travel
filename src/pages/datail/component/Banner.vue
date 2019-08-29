<template>
    <div class="banner" @click="gallaryClick">
      <img src="http://img1.qunarzz.com/sight/p0/1411/47/7e32693809c75ff910b2a38e54a931cf.water.jpg_600x330_d5256139.jpg">
      <div class="banner-info">
        <div class="banner-info-number">
          <span class="iconfont">&#xe6df;</span>39
        </div>
        <div class="banner-info-title">通天岩(AAAA景区)</div>
      </div>
      <common-gallary :imgs="imgs" v-show="showGallary" @close="closeGallary">
      </common-gallary>
    </div>
</template>

<script>
import CommonGallary from '../../../common/Gallary'
export default {
  name: 'Banner',
  data () {
    return {
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1411/47/7e32693809c75ff910b2a38e54a931cf.water.jpg_r_800x800_cba02521.jpg',
        'http://img1.qunarzz.com/sight/p0/1411/b8/cb99def9dd1303f362e351050da3bc3a.water.jpg_r_800x800_bc7d3f99.jpg',
        'http://img1.qunarzz.com/sight/p0/1411/2d/cecc0ca5fb26156009b1aeccbc6eccfa.water.jpg_r_800x800_61d73eba.jpg',
        'http://img1.qunarzz.com/sight/p0/1411/14/6fb181e61902a2d92f1b96f463bd8879.water.jpg_r_800x800_04aedf3e.jpg',
        'http://img1.qunarzz.com/sight/p0/1411/1a/bac4d3016b797dbe51a29c09de8ad84d.water.jpg_r_800x800_1511a601.jpg'
      ],
      showGallary: false
    }
  },
  components: {CommonGallary},
  methods: {
    gallaryClick: function () {
      this.showGallary = true
    },
    closeGallary: function () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
      position relative
      overflow hidden
      height 0
      padding-bottom 60%
      .banner-info
        width 100%
        position absolute
        display flex
        left 0
        bottom 0
        line-height .6rem
        color #fff
        flex-direction column
        background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8));
        .banner-info-number
          padding 0 .08rem
          margin-left .2rem
          margin-bottom .1rem
          text-align center
          border-radius .35rem
          height .4rem
          width .9rem
          line-height .4rem
          background: rgba(0, 0, 0, .8)
        .banner-info-title
          font-size .38rem
          margin-left .2rem
</style>
