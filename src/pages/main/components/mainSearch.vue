<template>
  <div>
    <div id='containBlur' v-show="isSearch">
    </div>
    <div id="container">
      <div class="search">
        <input
        type="text"
        placeholder="搜地点、查公交、找路线"
        v-model='keyword'
        @focus="inputFocus"
        @blur="inputBlur"/>
      </div>
      <div v-show='isSearch' class='content'>
        <div class='content-item'>
          <div class="item-left"></div>
          <div class="item-center">
            <div class="name"></div>
            <div class="loca"></div>
          </div>
          <div class="item-right"></div>
        </div>
      </div>
      <!-- <bm-local-search :keyword="keyword" :auto-viewport="true" :location="location"></bm-local-search> -->
    </div>
  </div>
</template>
<script>
import { setTimeout, clearTimeout } from 'timers'
export default {
  name: 'mainSearch',
  data () {
    return {
      keyword: '',
      isSearch: false,
      location: '',
      timer: null // 定时变量
    }
  },
  watch: {
    keyword: function (newValue, oldValue) {
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null
      }
      this.timer = setTimeout(this.$emit('changeKeyword', this.keyword), 1000)
    }
  },
  methods: {
    inputFocus: function () {
      this.isSearch = true
    },
    inputBlur: function () {
      this.isSearch = false
    }
  },
  destroyed () {
    clearTimeout(this.timer)
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/common.scss';
#containBlur{
  position: fixed;
  left:0;
  top:0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index:2;
}
#container{
  position: fixed;
  left:50%;
  top:20px;
  transform: translateX(-50%);
  width:$searchWidth;
  height:$searchHeight;
  background-color: #fff;
  border-radius:$searchBorderRadius;
  // box-shadow: -2px 2px 3px 1px #eee;
  box-sizing: border-box;
  z-index:3;
  .search{
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    input{
      line-height: $searchHeight;
      width: 100%;
      padding-left: 10px;
      font-size: .3rem;
      color: #333;
      border:solid 1px $borderColor;
    }
  }
  .content{
    background-color: #fff;
    border-radius:3px;
    margin-top: 3px;
    min-height: 50px;
    border:solid 1px $borderColor;
  }
}
</style>
