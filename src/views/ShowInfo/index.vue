<template>
  <div class="showInfoWrapper">
    <div class="swiperWrapper"  ref="swiper">
      <div class="body">
        <div class="cardWrapper">
          <div class="headerWrapper">
            <div class="topBar">
              <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
              <div class="treater">演出详情</div>
              <div class="right">
                <i class="icon iconfont icon-fenxiang share"></i>
                <i class="icon iconfont icon-home" @click="$router.push({path:'/'})"></i>
              </div>
            </div>
            <div class="postDetail">
              <img
                v-lazy="showInfo.share_data.share_pic"
                v-if="showInfo.share_data"
              />
              <div class="right">
                <h3 class="title">{{ showInfo.share_data.share_title }}</h3>
                <h3 class="price">￥{{ showInfo.static_data.price_range }}</h3>
              </div>
            </div>
            <div class="bg">
              <img v-lazy="showInfo.share_data.share_pic" />
              <div class="mask"></div>
            </div>
          </div>
          <div class="cardFooter">
            <h3 class="date">
              {{
                showInfo.static_data.custom_show_time ||
                showInfo.static_data.show_time_data.show_time_start_display
              }}
              <i class="iconfont icon-iconfontjiantou3"></i>
            </h3>
            <div class="place">
              <div class="placeCenter">
                <span>{{ showInfo.static_data.city.city_name }}</span> |
                <span>{{ showInfo.static_data.venue.venue_name }}</span>
              </div>
              <div class="address">
                {{ showInfo.static_data.venue.venue_address }}
              </div>
              <div class="map">
                <span class="iconfont icon-map"></span>
              </div>
            </div>
            <div class="vip">
              <div class="vipCard">橙PLUS卡</div>
              <div class="cardInfo">
                开通送￥100 最高省{{
                  showInfo.static_data.discount_max_price
                }}元
              </div>
              <div class="buyCard">
                立即开卡
                <i class="iconfont icon-iconfontjiantou3"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="vipMsgWrapper">
          <div class="vipMsg">
            <div class="vipWrapper">
              <div class="vip">
                <div class="left">
                  <span class="title">VIP+</span>
                  <span class="symbol">:</span>
                </div>
                <div class="center">
                  <span>V+会员享</span>
                  <span class="discount">国内免邮 + 双倍积分</span>
                </div>
                <i class="iconfont icon-iconfontjiantou3"></i>
              </div>
              <div class="corss">
                <div class="left">
                  <span class="title">入场</span>
                  <span class="symbol">:</span>
                </div>
                <div class="center">
                  <span>{{ showInfo.static_data.tips.desc }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="detailWrapper">
          <div class="detailInner">
            <div class="introduction">
              <div class="title">演出介绍</div>
              <div
                class="pic"
                v-html="showInfo.static_data.important_note"
                v-if="showInfo.static_data.important_note"
              ></div>
              <div
                class="desc"
                v-html="showInfo.static_data.show_desc.desc"
              ></div>
            </div>
            <button class="showAll">展示全部</button>
            <div class="mask"></div>
          </div>
        </div>
        <div class="toastWrapper">
          <div class="toast">
            <div class="title">
              <span>温馨提醒</span>
              <i class="iconfont icon-iconfontjiantou3"></i>
            </div>
            <ul>
              <li>配送说明</li>
              <li>订票说明</li>
              <li>确认订单</li>
              <li>购票提醒</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="service">
        <i class="iconfont icon-erji"></i>
        <span class="text">客服</span>
      </div>
      <button @click="showDialog = true">立即购买</button>
    </div>
    <div class="dialogWrapper" v-show="showDialog">
      <div class="mask"></div>
      <div class="dialog">
        <i class="iconfont icon-icon_guanbi"
          @click="showDialog=false"
        ></i>
        <div class="dialogInner" ref="dialog">
          <div class="swiper">
            <div class="chooseDate">
              <span class="text">选择日期</span>
            </div>
            <div class="chooseBox">
              <div class="date active" 
              v-for="item in showInfo.item_list" :key="item.id">{{item.project_time}}</div>
            </div>
            <div class="choosePlace">选择场次</div>
            <div class="chooseBox">
              <div class="timeBox date active">19:30</div>
            </div>
            <div class="choosePrice">选择价格</div>
            <div class="choosePriceWrapper">
              <ul class="container">
                <li :class="{'active':item.ticket_id===activeTicketId}"
                v-for="item in ticketList" :key="item.ticket_id"
                @click="changeActiveTicketId(item)">
                  {{item.price}}元
                  <span class="desc" v-show="item.ticekt_name">（{{item.ticekt_name}}）</span>
                </li>
              </ul>
            </div>
            <template v-if="activeTicketId">
              <div class="choosePlace">选择张数</div>
              <div class="box">
                <span class="price">{{ticketPrice*num}}元</span>
                <div class="changeNum">
                  <span class="dec" @click="changeNum('dec')">-</span>
                  <span class="num">{{num}}</span>
                  <span class="plus" @click="changeNum('plus')">+</span>
                </div>
              </div>
            </template>
          </div>
        </div>
        <div class="button">
          <button @click="goConfirm">立即购买</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import debounce from 'lodash/debounce'
import { mapState, mapActions } from "vuex";
export default {
  name: "ShowInfo",
  data() {
    return {
      // id:"111062",
      schedular_id: this.$route.query.schedular_id * 1,
      showDialog: false,
      activeTicketId:0,
      ticketPrice:0,
      num:1
    };
  },
  computed: {
    ...mapState({
      showInfo: (state) => state.show.showInfo,
      ticketList:state=>state.show.ticketList
    }),
  },
  async mounted() {
    await this.getShowInfo(this.schedular_id)
    await this.getTicketList(this.schedular_id)
    this.$nextTick(() => {
      new BScroll(this.$refs.swiper, { click: true });
    });
  },
  methods: {
    ...mapActions(["getShowInfo","getTicketList"]),
    changeActiveTicketId(item){
      this.activeTicketId = item.ticket_id
      this.ticketPrice = item.price
    },
    // changeNum(type){
    //   console.log("----",'changenum')
    //   if(type==="dec"){
    //     this.num--
    //     if(this.num<=1){
    //       this.num=1
    //     }
    //   }else{
    //     this.num++
    //   }
    // },
    changeNum:debounce(function(type){
      console.log("----",'changenum防抖')
      if(type==="dec"){
        this.num--
        if(this.num<=1){
          this.num=1
        }
      }else{
        this.num++
      }
    },200),
    
    goConfirm(){
      if(this.activeTicketId){
        this.$router.push({path:"/orderconfirm"})
      }
    }
  },
  watch: {
    showDialog() {
      this.$nextTick(() => {
        new BScroll(this.$refs.dialog, { click: true });
      });
    },
  },
}
</script>

<style lang="less" scoped>
.showInfoWrapper {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  .swiperWrapper{
    height: 100%;
    overflow: hidden;
    .body {
    .cardWrapper {
      //   background: none;
      .headerWrapper {
        position: relative;
        .topBar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #fff;
          height: 88px;
          font-size: 36px;
          font-weight: bold;
          padding: 0 30px 0 20px;
          line-height: $height;
          .treater {
            margin-left: 50px;
          }
          .icon {
            font-size: 42px;
          }
          .right {
            height: 88px;
            line-height: $height;
            .share {
              margin-right: 20px;
            }
          }
        }
        .postDetail {
          zoom: 1;
          padding: 30px;
          display: flex;
          img {
            width: 220px;
            height: 300px;
          }
          .right {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin: 15px 0 0 29px;
            font-size: 32px;
            color: #fff;
            .title {
              color: #fefefe;
              line-height: 40px;
            }
            .price {
              font-size: 38px;
              font-weight: bold;
            }
          }
        }
        .bg {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background: #000;
          z-index: -1;
          filter: blur(10px);
          img {
            width: 100%;
            height: 100%;
          }
          .mask {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 1;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: rgba(7, 17, 27, 0.4);
            // backdrop-filter: blur(5px);
          }
        }
      }
      .cardFooter {
        padding: 30px;
        color: #232323;
        .date {
          font-size: 36px;
          .iconfont {
            font-size: 26px;
          }
        }
        .place {
          position: relative;
          margin: 30px 0;
          .placeCenter {
            font-size: 30px;
            margin-bottom: 15px;
          }
          .address {
            width: 80%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: 24px;
            color: #666;
          }
          .iconfont {
            position: absolute;
            bottom: 0;
            right: 10px;
            width: 60px;
            height: $width;
            line-height: $height;
            text-align: center;
            background: #ededed;
            border-radius: 50%;
            color: #ff6743;
            font-size: 40px;
          }
        }
        .vip {
          width: 100%;
          height: 88px;
          line-height: $height;
          display: flex;
          align-items: center;
          justify-content: space-around;
          border-radius: 10px;
          color: #f5dea9;
          background-image: linear-gradient(-4deg, #1e1e1e, #464542);
          .vipCard {
            width: 112px;
            height: 35px;
            line-height: $height;
            text-align: center;
            color: #000;
            font-size: 22px;
            background-image: linear-gradient(0deg, #f5dea9, #f8d583);
          }
          .cardInfo {
            font-size: 28px;
            // flex:1
          }
          .buyCard {
            font-size: 22px;
          }
        }
      }
    }
    .vipMsgWrapper {
      background: #f5f5f5;
      padding: 30px 0;
      .vipMsg {
        background: #fff;
        padding: 0 35px;
        .vip,
        .corss {
          height: 94px;
          line-height: $height;
          display: flex;
          position: relative;
          i {
            position: absolute;
            right: 0;
            color: #222;
          }
        }
        .left {
          color: #999;
          font-size: 28px;
          .title {
            display: inline-block;
            width: 90px;
            text-align-last: justify;
          }
          .symbol {
            font-size: 32px;
          }
        }
        .center {
          margin-left: 30px;
          font-size: 24px;
          color: #222;
          .discount {
            margin-left: 16px;
            color: #ff6743;
          }
        }
      }
    }
    .detailWrapper {
      height: 1268px;

      width: 100%;
      box-sizing: border-box;
      padding: 0 30px;
      .detailInner {
        box-sizing: border-box;
        height: 100%;
        position: relative;
        overflow: hidden;
        .introduction {
          height: 100%;
          // overflow: hidden;
          padding: 40px 30px 0;
          .title {
            height: 25px;
            line-height: $height;
            font-size: 36px;
            font-weight: bold;
            margin-bottom: 15px;
          }
          .pic {
            // width: 690px;
            // height: 976px;
            // box-sizing: border-box;
            text-align: center;
            /deep/ strong{
              font-size: 26px;
              font-weight: bold;
            }
            /deep/ p{
              font-size: 26px;
              color: #232323;
              margin: 18px 0;
              line-height: $height;
            }
            /deep/ img {
              width: 680px;
              height: 900px;
            }
          }
          .desc {
            /deep/ p {
              font-size: 26px;
              color: #232323;
              margin: 18px 0;
              // display: block;
              // height: 30px;
              line-height: $height;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
        .showAll {
          width: 100%;
          height: 70px;
          box-sizing: border-box;
          position: absolute;
          bottom: 0px;
          line-height: $height;
          z-index: 9;
          text-align: center;
          color: #ff6743;
          background: #fff;
          font-size: 28px;
          border: none;
        }
        .mask {
          position: absolute;
          width: 100%;
          height: 60px;
          z-index: 1;

          bottom: 70px;
          background: rgba(f, f, f, 0.3);
          backdrop-filter: blur(3px);
        }
      }
    }
    .toastWrapper {
      // height: 500px;
      box-sizing: border-box;
      height: 324px;
      background: #ededed;
      padding: 24px 0;
      .toast {
        // width: 100%;
        height: 100%;
        padding: 50px;
        background: #fff;
        .title {
          display: flex;
          justify-content: space-between;
          font-size: 38px;
          margin-bottom: 40px;
        }
        ul {
          display: flex;
          justify-content: space-between;
          font-size: 26px;
          color: #999;
          li {
            position: relative;
            margin-left: 20px;
          }
          li::before {
            content: "";
            display: block;
            width: 8px;
            height: $width;
            background: #999;
            border-radius: 5px;
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto 0;
            left: -14px;
          }
        }
      }
    }
  }
  }
  
  .footer {
    height: 110px;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 9;
    display: flex;
    align-items: center;
    border-top: 1px solid #e6e6e6;
    background: #fff;
    .service {
      width: 102px;
      height: 66px;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      i {
        font-size: 42px;
      }
      .text {
        font-size: 20px;
      }
    }
    button {
      flex: 1;
      margin-right: 24px;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 34px;
      font-weight: bold;
      color: #fff;
      border-radius: 60px;
      border: none;
      background: linear-gradient(50deg, #ff9a34, #ff4d4a);
    }
  }
  .dialogWrapper {
    z-index: 99;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    flex-direction: column;
    .mask {
      background: rgba(98, 98, 98, 0.7);
      width: 100%;
      height: 25%;
    }
    i{
      font-size: 30px;
      position: fixed;
      top: 28%;
      right: 30px;
      z-index: 999;
    }
    .dialog {
      flex: 1;
      // height: 980px;
      padding-top: 50px;
      display: flex;
      flex-direction: column;
      background: #fff;
      font-size: 28px;
      color: #232323;
      box-sizing: border-box;
      .dialogInner {
        padding: 60px 30px 110px 30px;
        height: 840px;
        box-sizing: border-box;
        overflow: hidden;
        .swiper {
          min-height: 900px;
          padding-bottom: 110px;
          .chooseDate {
           
            .text {
              font-weight: bold;
            }
            
          }
          .chooseBox {
            display: flex;
            flex-wrap: wrap;
            flex-shrink: 0;
            margin: 30px 0;
            font-weight: bold;
            .date {
              height: 85px;
              padding: 0 38px;
              margin:0 20px 20px 0;
              border-radius: 10px;
              background: #f5f5f5;
              color: #232323;
              font-size: 30px;
              line-height: $height;
              &.active {
                background: #fff1e9;
                color: #ff6743;
              }
            }
          }
          .choosePlace {
            // margin-top: 50px;
            font-weight: bold;
          }
          .timeBox {
            // padding: 0 72px ;
            zoom: 1;
          }
          .choosePrice {
            font-weight: bold;
          }
          .choosePriceWrapper {
            width: 690px;
            margin: 50px 0;
            overflow: hidden;
            ul {
              width: 100%;
              li {
                // display: block;
                height: 85px;
                padding: 0 38px;
                margin-bottom: 20px;
                border-radius: 10px;
                background: #f5f5f5;
                color: #232323;
                font-size: 30px;
                line-height: $height;
                white-space: nowrap;
                &.active {
                  background: #fff1e9;
                  color: #ff6743;
                }
                .desc {
                  font-size: 26px;
                }
              }
            }
          }
          .box {
            display: flex;
            justify-content: space-between;
            margin: 20px 0;
            height: 85px;
            padding: 0 38px;
            margin-bottom: 20px;
            border-radius: 10px;
            background: #f5f5f5;
            color: #232323;
            font-size: 30px;
            line-height: $height;
            .dec,
            .plus {
              display: inline-block;
              width: 40px;
              height: $width;
              line-height: $height;
              text-align: center;
              font-size: 26px;
              border: 2px solid #ebebeb;
            }
            .num {
              margin: 0 20px;
            }
          }
        }
      }
      .button {
        height: 110px;
        box-sizing: border-box;
        border-top: 2px solid #ebebeb;
        background: #fff;
        padding: 15px 30px;
        button {
          margin: 0 auto;
          width: 99%;
          height: 80px;
          background-image: linear-gradient(-50deg, #ff4d4a 0%, #ff9a34 100%),
            linear-gradient(#fefefe, #fefefe);
          line-height: $height;
          border-radius: 50px;
          text-align: center;
          border: none;
          color: #fff;
          font-weight: bold;
          font-size: 34px;
        }
      }
    }
  }
}
</style>
