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
            <p class="item-info-title">{{ recommendItem.title }}</p>
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
  data () {
    return {
      recommendList: [
        {
          id: '001',
          title: '通天岩',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1411/91/02b4eb776c1acc0e8bb62b127b7316b1.water.jpg_200x200_e3a0acd4.jpg',
          price: '55',
          commentNum: '34',
          address: '章贡区',
          grade: ['&#xe610;', '&#xe610;', '&#xe610;', '&#xe610;', '&#xe640;']
        },
        {
          id: '002',
          title: '南武当旅游景区',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201212/21/da4b5b71cb6c853d93835fbb.png_200x200_35b9935a.png',
          price: '69',
          commentNum: '216',
          address: '龙南县',
          grade: ['&#xe610;', '&#xe610;', '&#xe610;', '&#xe610;', '&#xe610;']
        },
        {
          id: '003',
          title: '汉仙温泉',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1901/30/305b697559fe0b88a3.img.jpg_200x200_eb6a7c66.jpg',
          price: '168',
          commentNum: '34',
          address: '会昌县',
          grade: ['&#xe610;', '&#xe610;', '&#xe610;', '&#xe610;', '&#xe640;']
        },
        {
          id: '004',
          title: '罗汉岩',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201306/19/56d782a1b741ca25c8d65eac.jpg_200x200_ad6d567e.jpg',
          price: '40',
          commentNum: '550',
          address: '瑞金市',
          grade: ['&#xe610;', '&#xe610;', '&#xe610;', '&#xe610;', '&#xe640;']
        },
        {
          id: '005',
          title: '阳明湖',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1611/c5/c5872e796d500168a3.water.jpg_200x200_d6d790e1.jpg',
          price: '70',
          commentNum: '190',
          address: '上犹县',
          grade: ['&#xe610;', '&#xe610;', '&#xe610;', '&#xe610;', '&#xe640;']
        }
      ]
    }
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
