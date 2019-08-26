<template>
    <div class="icons">
      <swiper :options="swiperOption">
          <swiper-slide v-for="(page, index) of pages" :key="index">
              <div>
                <div v-for="iconItem in page" class="icon" :key="iconItem.id">
                  <div class="icon-img-wrapper">
                    <img class="icon-img-content" :src="iconItem.imgUrl">
                  </div>
                  <p class="icon-desc" >{{ iconItem.desc }}</p>
                </div>
              </div>
          </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcon',
  props: {
    'iconsList': Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
    .icons
      overflow hidden
      height 0
      padding-bottom 50%
      .icon
        position relative
        float left
        width 25%
        height 0
        padding-bottom 25%
        .icon-img-wrapper
          position absolute
          top 0
          left 0
          right 0
          bottom .30rem
          box-sizing border-box
          padding .2rem
          .icon-img-content
            display block
            width 1.1rem
            height 1.1rem
            margin 0 auto
        .icon-desc
          position: absolute;
          bottom 0
          left 0
          right 0
          height .54rem
          line-height .54rem
          text-align center
          font-size .32rem
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
</style>
