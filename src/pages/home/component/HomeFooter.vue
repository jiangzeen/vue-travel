<template>
    <div>
      <div class="foot-ready"></div>
      <div class="foot-tip">
        <span class="iconfont icon">&#xe602;</span>
        <span class="tip-important">票面价</span>是指通过景区指定窗口售卖的纸质门票上标注的价格
      </div>
      <div class="foot-chose">
        <ul>
          <li class="item">
            <span class="iconfont item-chose-icon">&#xe62e;</span><a href="#" class="item-chose">机票</a>
          </li>
          <li class="item">
            <span class="iconfont item-chose-icon">&#xe687;</span><a href="#" class="item-chose">酒店</a>
          </li>
          <li class="item">
            <span class="iconfont item-chose-icon">&#xe618;</span><a href="#" class="item-chose">公寓</a>
          </li>
        </ul>
        <div class="font-more">
          <span>|</span>
          <span class="more">
            <span class="iconfont">&#xe629;</span> 更多</span>
        </div>
        <div style="clear: both;"></div>
        <ul class="item-tool-wrapper">
          <li class="item-tool"><a href="#">登录</a></li>
          <li class="item-tool"><a href="#">我的订单</a></li>
          <li class="item-tool"><a href="#">最近浏览</a></li>
          <li class="item-tool"><a href="#">关于我们</a></li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HomeFooter'
}
</script>

<style lang="stylus" scoped>
    .foot-ready
      height .15rem
      width 100%
      background: #F5F5F5
    .foot-tip
      color #616161
      height .6rem
      width 100%
      line-height .6rem
      font-size: .2rem
      margin-left .25rem
      .icon
        font-size .2rem
      .tip-important
        color #616161
        font-weight bold
    .foot-chose
      width 100%;
      height 2rem
      background: #F5F5F5;
      padding-top .3rem
      padding-left .8rem
      .item
        float left
        margin-left .3rem
        .item-chose-icon
          font-size .45rem
        .item-chose
          color #9e9e9e
          text-decoration #333333
      .font-more
        padding-top .1rem
        margin-left .5rem
        float left
        color #9e9e9e
        .more
          margin-left .3rem
          font-size .3rem
    .item-tool
      padding-left .3rem
      padding-top .5rem
      float: left;
</style>
