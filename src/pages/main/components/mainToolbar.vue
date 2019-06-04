<template>
    <div class='container'>
      <div class='toolbarItem borderBottom'>
        <i class='iconfont iconlukuang'></i>
        <div>路况</div>
      </div>
      <div class="toolbarItem borderBottom">
        <i class='iconfont icontuceng'></i>
        <div>图层</div>
      </div>
      <div class="toolbarItem">
        <i class='iconfont icontianjiashangbao'></i>
        <div>上报</div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'mainToolbar'
}
</script>
<style lang="scss" scoped>
.container{
  display: flex;
  flex-direction: column;
  position: fixed;
  top:100px;
  right:10px;
  background-color: #fff;
  border-radius: 3px;
  text-align: center;
  padding: 5px;
  .toolbarItem{
    padding: 5px 2px;
    cursor:pointer;
    i{
      font-size:.3rem;
    }
    div{
      font-size:.15rem;
      padding:2px;
    }
  }
  .borderBottom{
    border-bottom:solid 1px rgb(105, 105, 105);
  }
}
</style>
