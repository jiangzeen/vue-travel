<template>
    <div>
        <div class="weekend-title">周末去哪儿</div>
        <ul>
           <li class="weekend-item" v-for="weekItem in weekendList" :key="weekItem.id">
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
  props: {
    'weekendList': Array
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
