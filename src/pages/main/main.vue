<template>
  <div id='map'></div>
</template>
<script>
import esriLoader from 'esri-loader'
const MainMenu = resolve => { require(['./components/mainMenu'], resolve) }
const MainSearch = resolve => { require(['./components/mainSearch'], resolve) }
const MainToolbar = resolve => { require(['./components/mainToolbar'], resolve) }
export default {
  name: 'Main',
  components: {MainMenu, MainSearch, MainToolbar},
  methods: {
    changeKeyword: value => console.log(value)
  },
  mounted () {
    const options = {
      url: 'https://js.arcgis.com/3.24/'
    }
    esriLoader.loadModules([
      'esri/map',
      'dojo/domReady!'
    ], options).then(([Map]) => {
      // eslint-disable-next-line
      let map = new Map('map', {
        basemap: 'streets',
        center: [121.256151, 31.328742],
        zoom: 15
      })
    }).catch(error => { console.log(error) })
  }
}
</script>

<style lang='scss' scoped>
@import url('https://js.arcgis.com/3.24/esri/css/esri.css');
.map{
  position: absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
}
</style>
