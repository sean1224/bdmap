<template>
  <baidu-map class='map'
    center='上海'>
    <bm-navigation
      anchor="BMAP_ANCHOR_BOTTOM_LEFT"
      :offset='{width:10,height:120}'
      type='BMAP_NAVIGATION_CONTROL_SMALL'>
    </bm-navigation>
    <bm-geolocation
      anchor="BMAP_ANCHOR_BOTTOM_LEFT"
      :offset='{width:10,height:70}'
      :showAddressBar="true"
      :autoLocation="true">
    </bm-geolocation>
    <main-menu></main-menu>
    <main-search @changeKeyword='changeKeyword'></main-search>
    <main-toolbar></main-toolbar>
    <bm-local-search keyword="虹桥" :auto-viewport="true" location="上海"></bm-local-search>
  </baidu-map>
</template>
<script>
const MainMenu = resolve => { require(['./components/mainMenu'], resolve) }
const MainSearch = resolve => { require(['./components/mainSearch'], resolve) }
const MainToolbar = resolve => { require(['./components/mainToolbar'], resolve) }
export default {
  name: 'Main',
  components: {MainMenu, MainSearch, MainToolbar},
  methods: {
    changeKeyword: value => console.log(value)
  }
}
</script>

<style lang='scss' scoped>
.map{
  position: absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
}
</style>
