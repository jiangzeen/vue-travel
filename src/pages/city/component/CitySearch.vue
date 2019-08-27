<template>
    <div>
      <ul class="tab">
        <li class="tab-item left" v-for="(item,index) in itemList" :key="index"
            :class="{active:index === num}" @click="setNum(index)">{{ item }}</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'CitySearch',
  data () {
    return {
      itemList: ['境内', '境外·港澳台'],
      num: 0
    }
  },
  methods: {
    setNum: function (index) {
      this.num = index
    }
  }
}
</script>

<style lang="stylus" scoped>
    .tab
      padding-left 1.2rem
      float: left;
      width 100%
      height .6rem
      background: #00bcd4;
      .tab-item
        border 1px solid #fff
        text-align center
        float: left;
        width 2.6rem
        height .4rem
        line-height .4rem
        color #fff
      .active
        color #00bcd4;
        background: #fff;
</style>
