<template>
    <div>
      <div class="recommend-title">
        <div class="recommend-title-top"></div>
        <img class="recommend-title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png">
        猜你喜欢
      </div>
      <ul>
        <li class="item" v-for="recommendItem in recommendList" :key="recommendItem.id">
          <img class="item-img-content" :src="recommendItem.imgUrl">
          <div class="item-info">
            <router-link
              to="/detail/001"
              tag="p"
              class="item-info-title">{{ recommendItem.title }}
            </router-link>
            <p class="item-info-desc">
              <span class="iconfont score" v-for="(grades, index) in recommendItem.grade" v-html="grades" :key="index"></span>
              <span class="item-info-desc comment">{{ recommendItem.commentNum }}条评论</span>
            </p>
            <p class="item-info-price">
              <span class="">￥</span>
              <span class="price">{{ recommendItem.price }}</span>
              <span class="address">{{ recommendItem.address }}</span>
            </p>
          </div>
        </li>
      </ul>
      <div class="more-item"><a href="#">查看所有产品</a></div>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    'recommendList': Array
  }
}
</script>

<style lang="stylus" scoped>
    .recommend-title
        font-size .32rem
        .recommend-title-top
          height .4rem
          width 100%
          background: #F5F5F5;
          margin-bottom .2rem
        .recommend-title-img
          height .42rem
          line-height .42rem
          padding-left .4rem
    .item
        display flex
        width 100%
        height 2rem
        margin-top .2rem
        margin-left .36rem
        padding-bottom .2rem
        border-bottom 1px solid #e0e0e0
        .item-img-content
          height 1.8rem
          width 1.9rem
          padding .1rem
        .item-info
          flex 1
          padding .4rem
          .item-info-title
            font-size .36rem
          .item-info-desc
            margin-top .2rem
          .score
            color #ffb436
            .comment
              padding-left .2rem
          .item-info-price
            margin-top .2rem
            line-height .5rem
            width 95%
            color #ff8300
            .price
              font-size .50rem
          .address
            float right
            color #616161
    .more-item
        width 100%
        height .8rem
        line-height .8rem
        font-size .30rem
        text-align center
</style>
