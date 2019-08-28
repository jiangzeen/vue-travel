<template>
    <ul class="list">
      <li class="item" v-for="(city, name) of cities" :key="name">{{ name }}</li>
    </ul>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    'cities': Object
  }
}
</script>

<style lang="stylus" scoped>
    .list
      display flex
      flex-direction column
      justify-content center
      position absolute
      right 0
      top 4.0rem
      width .4rem
      color: #00bcd4;
      .item
        line-height .35rem
        text-align center
</style>
