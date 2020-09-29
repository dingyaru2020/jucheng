<template>
  <div>
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

</style>
