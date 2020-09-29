<template>
  <div id="wrapper">
    home
    {{num}}
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  name: 'Home',
  computed:{
    ...mapState({
      num:state=>state.home.num
    })
  }
}
</script>

<style lang="less" scoped>
  #wrapper{
    color: red;
  }
</style>
