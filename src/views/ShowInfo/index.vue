<template>
  <div class="showInfoWrapper">
    <div class="swiperWrapper" ref="swiper">
      <div class="body">
        <div class="cardWrapper">
          <div class="headerWrapper">
            <div class="topBar">
              <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
              <div class="treater">演出详情</div>
              <div class="right">
                <i class="iconfont icon-fenxiang icon share"></i>
                <i
                  class="icon iconfont icon-home"
                  @click="$router.push({ path: '/' })"
                ></i>
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
          <div class="support" v-if="showInfo.static_data.support.list.length>0">
            <div class="supportWrapper">
              <span class="supportItem" v-for="(item,index) in showInfo.static_data.support.list"
              :key="index">
              <i class="iconfont icon-home"></i>
              <span>{{item}}</span>
            </span>
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
    <Dialog :showDialog="showDialog" @closeDialog="closeDialog" :schedular_id="schedular_id"/>
    <div class="footer">
      <div class="service">
        <i class="iconfont icon-erji"></i>
        <span class="text">客服</span>
      </div>
      <button @click="showDialog = true">立即购买</button>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import debounce from "lodash/debounce";
import { mapState, mapActions, mapGetters } from "vuex";
import Dialog from "@/components/Dialog"
export default {
  name: "ShowInfo",
  data() {
    return {
      // id:"111062",
      schedular_id: this.$route.query.schedular_id * 1,
      showDialog: false,
      
    };
  },
  computed: {
    ...mapState({
      showInfo: (state) => state.show.showInfo,
      // ticketList: (state) => state.show.ticketList,
      // activeDateIndex:state=>state.show.activeDateIndex
    }),
    
  },
  async mounted() {
    await this.getShowInfo(this.schedular_id);
    this.$nextTick(() => {
      new BScroll(this.$refs.swiper, { click: true });
    });
  },
  methods: {
    ...mapActions(["getShowInfo"]),
    closeDialog(flag){
      this.showDialog = flag
    }
  },
  
  components:{
    Dialog
  }
};
</script>

<style lang="less" scoped>
.showInfoWrapper {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  .swiperWrapper {
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
        .support{
          padding: 20px 30px 0;
          .supportWrapper{
            border-bottom: 2px solid #ebebeb;
            padding-bottom: 26px;
            .supportItem{
              margin-right: 16px;
              font-size: 26px;
              color: #666;
              i{
                color: #ff6743;
                margin-right: 6px;
              }
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
            // height: 94px;
            line-height: 94px;
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
            width: 554px;
            line-height: 90px;
            margin-left: 30px;
            font-size: 24px;
            color: #222;
            text-overflow: ellipsis;
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
              /deep/ strong {
                font-size: 26px;
                font-weight: bold;
              }
              /deep/ p {
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
              /deep/ img{
                width: 680px;
                height: 900px;
              }
              /deep/ p, /deep/ div {
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
  
}
</style>
