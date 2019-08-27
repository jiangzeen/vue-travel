<template>
    <div>
      <city-header></city-header>
      <city-search></city-search>
      <city-list></city-list>
      <alphabet></alphabet>
    </div>
</template>

<script>
import CityHeader from './component/CityHeader'
import CitySearch from './component/CitySearch'
import CityList from './component/CityList'
import Alphabet from './component/Alphabet'
export default {
  name: 'City',
  components: {CitySearch, CityHeader, CityList, Alphabet}
}
</script>

<style lang="stylus" scoped>

</style>
