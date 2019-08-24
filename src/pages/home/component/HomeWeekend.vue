<template>
    <div>
        <div class="weekend-title">周末去哪儿</div>
        <ul>
           <li class="weekend-item" v-for="weekItem in weekendItemList" :key="weekItem.id">
             <img class="weekend-item-img" :src="weekItem.imgUrl">
             <div class="weekend-info">
               <p class="weekend-info-title"><a href="#">{{ weekItem.title }}</a></p>
               <p class="weekend-info-desc">{{ weekItem.desc }} </p>
             </div>
           </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      weekendItemList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1606/7d/451ad0850c83cb.jpg_r_640x214_31d053e9.jpg',
          title: '经典漂流地',
          desc: '这个夏天周边失身游，现在就GO'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1811/24/30f714149293b6.jpg_r_640x214_bfa37f12.jpg',
          title: '狮子峰等你',
          desc: '有黄山之险，悬崖峭壁，这里有满山的翠竹，青藤'
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1606/44/19689f8a01f5b2.jpg_r_640x214_7959e855.jpg',
          title: '九江打卡',
          desc: '有2200多年历史的江南文化名城'
        },
        {
          id: '004',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/bd/688c12889af7ad.jpg_r_640x214_cc490c32.jpg',
          title: 'happy乐园',
          desc: '在这里玩转乐园，疯玩起来，无忧无虑一整天'
        },
        {
          id: '005',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/74/a665dfecf12ae.jpg_r_640x214_5d22909a.jpg',
          title: '南昌必游TOP10',
          desc: '看山看水，看看历史对南昌的浸润'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
      .weekend-title
        background: #F5F5F5;
        height .9rem
        line-height .9rem
        color black
        padding-left .4rem
      .weekend-item
        width 100%
        height 4.4rem
        .weekend-item-img
          width 100%
          height 3rem
        .weekend-info
          height 1rem
          padding-top .3rem
          padding-left .4rem
          margin-bottom  .2rem
          .weekend-info-title
             color #212121
             font-size .30rem
          .weekend-info-desc
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
            margin-top .2rem
            color #616161
</style>
