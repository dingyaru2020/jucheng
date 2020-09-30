<template>
  <div id="showListWrapper">
    <div class="header">
      <span></span>
      <span class="title">演出</span>
      <span></span>
    </div>

    <van-tabs v-model="active" animated height="91px">
      <van-tab v-for="index in 9" :title="'选项 ' + index" :key="index">
        内容 {{ index }}
      </van-tab>
    </van-tabs>




    <!-- <div class="listContainer">
      <div class="tabs">
        <ul class="tabList">
          <li>全部</li>
          <li>演唱会</li>
          <li>演唱会</li>
          <li>演唱会</li>
          <li>演唱会</li>
          <li>演唱会</li>
          <li>演唱会</li>
        </ul>
        <span class="city" @clcik="showDrawer=true">全国<i></i></span>
      </div>
      <van-popup
        v-model="showDrawer"
        position="right"
        :style="{ width: '70%',height:'100% '}"
      >
        <template v-slot="{row,$index}">
            
        </template>   
      </van-popup>
    </div> -->
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
export default {
  name: "ShowList",
  data() {
    return {
      active: 0,
      showDrawer:true
    };
  },
  mounted(){
    this.getCategoryList()
  },
  methods:{
    ...mapActions(["getCategoryList"])
  }
};
</script>

<style lang="less">
.van-tab {
  font-size: 80px !important;
}
#showListWrapper {
  width: 100%;
  .header {
    display: flex;
    box-sizing: border-box;
    padding: 0 30px;
    height: 88px;
    line-height: $height;
    justify-content: space-between;
    border-bottom: 2px solid #ebebeb;
    .title {
      font-size: 36px;
      text-align: center;
    }
  }
  .listContainer {
    box-sizing: border-box;
    padding: 0 30px;
    .tabs {
      height: 91px;
      line-height: $height;
      padding: 20px 0;
      display: flex;

      font-size: 30px;
      .tabList {
        flex: 1;
      }
      .city {
        width: 152px;
      }
    }
  }
}
</style>
