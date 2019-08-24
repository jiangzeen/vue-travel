<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="swiperItem of swiperList" :key="swiperItem.id">
        <img class="swiper-img" :src="swiperItem.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1610/f3/f39d9de1e92deb02.jpg_750x200_8cbc3f9b.jpg'
        },
        {
          id: '002',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/95274cec39fa73e3cccf35e24ec01c3b.jpg_750x200_1b6ffcfa.jpg'
        },
        {
          id: '003',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/d3b0e3206e4c6e6ee93cdbf4b8f7b0cb.jpg_750x200_07d5c245.jpg'
        },
        {
          id: '004',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg'
        },
        {
          id: '005',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/fffc0c06ddfe6fa9bad3cd813b591873.jpg_750x200_528c2db7.jpg'
        },
        {
          id: '006',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg'
        },
        {
          id: '007',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1609/1b/371522f509580f02.jpg_750x200_8d978cde.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff;
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 28%
    .swiper-img
      width 100%

</style>
