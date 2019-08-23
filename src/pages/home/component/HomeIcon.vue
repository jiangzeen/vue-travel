<template>
    <div class="icons">
      <swiper>
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
  data () {
    return {
      iconsList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        },
        {
          id: '002',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
          desc: '南武当'
        },
        {
          id: '003',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/f85ce21492e4f7896498dc70dc43f8b3.png',
          desc: '石崆寨'
        },
        {
          id: '004',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
          desc: '共和国摇篮'
        },
        {
          id: '005',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
          desc: '漂流'
        },
        {
          id: '006',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/8c/47630407f70e8302.png',
          desc: '横店影视城'
        },
        {
          id: '007',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/3ef092d0a89ffddb7f781cda30c8ae49.png',
          desc: '暑期大促'
        },
        {
          id: '008',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          desc: '一日游'
        },
        {
          id: '009',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
          desc: '清凉避暑'
        },
        {
          id: '010',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/f5/c4c9d9830404e602.png',
          desc: '室内娱乐'
        }
      ]
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
