<template>
  <div id="showListWrapper">
    <TopBar title="演出" :icon="true" :fanhui="true" />
    <div class="listContainer">
      <div class="tabs">
        <div class="tabList" ref="tabList">
          <ul>
            <li v-for="item in categoryList" :key="item.id"
            :class="{'active':item.id===activeId}"
            @click="changeActiveId(item.id)"
            >{{item.name}}</li>
          </ul>
        </div>
        <span class="city" @click="showDrawer = true">
          <span class="line">|</span>
          全国
          <i class="iconfont icon-map"></i>
        </span>
      </div>
    </div>
    <div class="cityDrawer" v-show="showDrawer">
      <div class="leftMask"></div>
      <div class="rightCity">
        <div class="cityList">
          <div class="title">城市</div>
          <div ref="cityUl" class="cityUl">
            <ul>
              <li v-for="item in cityList" :key="item.id"
              :class="{'active':item.id===activeCityId}"
              @click="activeCityId=item.id">{{item.name}}</li>
            </ul>
          </div>
        </div>
        <div class="footer">
          <!-- <div class="mask" @click="showDrawer=false"></div> -->
          <button class="cancel" @click="showDrawer = false">取消</button>
          <button class="confirm">确定</button>
        </div>
      </div>
    </div>
    <div class="showListCon" ref="showList">
      <div class="showList">
        <div class="cardWrapper" v-for="showInfo in showList" :key="showInfo.show_id">
          <ShowCard :showInfo="showInfo" v-if="showList.length>0"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import ShowCard from "@/components/ShowCard"
import BScroll from "better-scroll";
export default {
  name: "ShowList",
  data() {
    return {
      active: 0,
      showDrawer: false,
      activeId:35,
      activeCityId:0
    };
  },
  computed: {
    ...mapState({
      showList:state=>state.show.showList,
      // cityList:state=>state.show.cityList
    }),
    ...mapGetters(['categoryList',"cityList"]),
  },
  async mounted() {
    await this.getCategoryList();
    await this.getShowList(this.activeId)
    await this.getCityList()
    this.initScroll()
  },
  methods: {
    ...mapActions(["getCategoryList","getShowList","getCityList"]),
    initScroll() {
      this.$nextTick(() => {
        new BScroll(this.$refs.tabList, { click: true, scrollX: true });
        const city=new BScroll(this.$refs.cityUl, { click: true });
        new BScroll(this.$refs.showList, { click: true});
      });
    },
    changeActiveId(id){
      this.activeId = id 
    }
  },
  components:{
    ShowCard
  },
  watch:{
    activeId(){
      this.getShowList(this.activeId)
    },
    showDrawer(){
      this.$nextTick(() => {
        new BScroll(this.$refs.cityUl, { click: true });
      })
    }
  }
  
};
</script>

<style lang="less">
#showListWrapper {
  width: 100%;
  height: 100%;
  position: relative;
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
      display: flex;
      font-size: 30px;
      .tabList {
        flex: 1;
        overflow: hidden;
        white-space: nowrap;
        ul {
          display: inline-block;
          flex-shrink: 0;
          li {
            display: inline-block;
            height: 86px;
            margin-right: 40px;
            &.active {
              color: #ff6743;
              border-bottom: 4px solid #ff6743;
            }
          }
        }
      }
      .city {
        width: 152px;
        text-align: center;
        color: #666;
        // border-left: 2px solid #666;
        .line {
          margin-right: 20px;
        }
        i {
          font-size: 30px;
        }
      }
    }
  }
  .cityDrawer {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 89px;
    z-index: 9;
    display: flex;
    .leftMask {
      width: 162px;
      background: rgba(98, 98, 98, 0.7);
      // backdrop-filter: blur(5px);
    }
    .rightCity {
      height: 100%;
      box-sizing: border-box;
      flex: 1;
      display: flex;
      flex-direction: column;
      background: #fff;
      border-top: 2px solid #ebebeb;
      
      .cityList {
        box-sizing: border-box;
        height: 1154px;
        padding: 30px 30px 0;
        overflow: hidden;
        .title {
        height: 40px;
        margin-bottom: 20px;
        font-size: 30px;
        font-weight: bold;
        color: #666;
      }
        .cityUl {
          box-sizing: border-box;
          height:1022px ;
          overflow: hidden;
          // padding-bottom: 90px;
          ul {
            display: inline-block;
            li {
              width: 164px;
              height: 64px;
              display: inline-block;
              margin: 0 12px 12px 0;
              background: #f5f5f5;
              color: #232323;
              font-size: 24px;
              line-height: $height;
              text-align: center;
              &.active {
                background: #fff1e9;
                color: #ff6743;
              }
            }
          }
        }
      }
      .footer {
        width: 100%;
        height: 90px;
        background-color: #fefefe;
        .cancel,
        .confirm {
          width: 50%;
          height: 90px;
          line-height: $height;
          text-align: center;
          font-size: 28px;
          background: #fff;
          border: none;
          border-top: 2px solid #ebebeb;
        }
        .cancel {
          box-sizing: border-box;
        }
        .confirm {
          background: #ff6743;
          color: #fff;
        }
      }
    }
  }
  .showListCon{
    background: #FAFAFA;
    box-sizing: border-box;
    padding: 35px 0 22px 20px;
    height: 1154px;
    overflow: hidden;
    .showList{
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>
