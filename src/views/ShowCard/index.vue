<template>
  <div class="showCard" ref="showList">
      <div class="swiperWrapper">
          <div class="showLoading" v-show="showLoading">
        <img src="../../static/images/loading.svg" alt="">
        </div>
        <div class="error" v-show="showError">加载出错了请重试……</div>
      <Recommend :recommendList="showList" v-show="!showLoading"/>
      </div>
      
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: 'ShowCard',
  data(){
      return {
          id:this.$route.params.id.slice(1)*1,
          showLoading:false,
          showError:false
      }
  },
  computed:{
      ...mapState({
          showList:state=>state.show.showList
      })
  },
  methods:{
      ...mapActions(["getShowList"])
  },
  watch:{
    $route(to ,from){
        this.id = to.params.id.slice(1)*1
    },
    id:async function(){
        this.showLoading = true
        this.showError = false
      try {
        await this.getShowList(this.id)
        this.showLoading = false
      } catch (error) {
          this.showLoading = false
          this.showError = true
      }
    }
  },
  async mounted(){
      this.showLoading = true
      this.showError = false
      try {
        await this.getShowList(this.id)
        this.showLoading = false
      } catch (error) {
          this.showLoading = false
          this.showError = true
      }
      

      this.$nextTick(()=>{
           new BScroll(this.$refs.showList, { click: true});
      })
  }
}
</script>

<style lang="less" scoped>
    .showCard{
        width: 100%;
        height: 100%;
        .showLoading,.error{
            width: 100%;
            height: 86%;
            background: #fff;
            // text-align: center;
            position: fixed;
            bottom: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 40px;
        }
        
    }
</style>
