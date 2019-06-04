<template>
    <div class='container'>
        <i class='iconfont iconluxian'></i>
    </div>
</template>
<script>
export default {
  name: 'mainMenu'
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/common.scss';
.container{
    position: fixed;
    width:$menuWidth;
    height:$menuHeight;
    left:50%;
    bottom:30px;
    transform:translateX(-50%);
    text-align: center;
    i{
        color: #fff;
        background-color: $bgcolor;
        border-radius: 30px;
        font-size: 34px;
        padding: 9px;
        box-sizing: content-box;
    }
}
</style>
