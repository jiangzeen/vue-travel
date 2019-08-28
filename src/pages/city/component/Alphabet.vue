<template>
    <ul class="list">
      <li @click="handleAlphabetClick"
          @touchstart.prevent="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
          :ref="letter"
          class="item" v-for="letter of letters"
          :key="letter"
      >{{ letter }}</li>
    </ul>
</template>

<script>
// import BScroll from 'better-scroll'
export default {
  name: 'Alphabet',
  props: {
    'cities': Object
  },
  data () {
    return {
      'touchStatus': false,
      'timer': null
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let letter in this.cities) {
        letters.push(letter)
      }
      return letters
    }
  },
  methods: {
    handleAlphabetClick: function (e) {
      this.$emit('changeLetter', e.target.innerText)
    },
    handleTouchStart: function () {
      this.touchstart = true
    },
    handleTouchMove: function (e) {
      if (this.touchstart) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY
          const index = Math.floor((touchY - 200) / 17)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('changeLetter', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd: function () {
      this.touchstart = false
    }
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
      top 3.0rem
      width .4rem
      color: #00bcd4;
      .item
        line-height .35rem
        text-align center
</style>
