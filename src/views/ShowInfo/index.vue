<template>
  <div class="showInfoWrapper">
    <div class="body" ref="swiper">
      <div class="cardWrapper">
        <div class="headerWrapper">
          <TopBar :fanhui=true title="演出详情" :icon=false class="topBar" />
          <div class="postDetail">
            <img src="../../static/images/show/showPost.jpg" alt="" />
            <div class="right">
              <h3 class="title">2020当我们谈论爱情和v也是差不多还是不刺眼</h3>
              <h3 class="price">￥399-1299</h3>
            </div>
          </div>
          <div class="bg">
            <img src="../../static/images/show/showPost.jpg" />
            <div class="mask"></div>
          </div>
        </div>
        <div class="cardFooter">
          <h3 class="date">
            2020.02.29-12.31
            <span class="iconfont"></span>
          </h3>
          <div class="place">
            <div class="placeCenter">
              <span>广州</span> |
              <span>广州宝文化中心</span>
            </div>
            <div class="address">广东省广州市黄埔区开创大道2666号</div>
            <span class="iconfont"></span>
          </div>
          <div class="vip">
            <div class="vipCard">橙PLUS卡</div>
            <div class="cardInfo">开通送￥100 最高省129.9元</div>
            <div class="buyCard">
              立即开卡
              <span class="iconfont"></span>
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
              <span class="iconfont"></span>
            </div>
            <div class="corss">
              <div class="left">
                <span class="title">入场</span>
                <span class="symbol">:</span>
              </div>
              <div class="center">
                <span>儿童一律凭票入场</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="detailWrapper">
          <div class="detailInner">
              <div class="introduction"></div>
              <button class="showAll">展示全部</button>
              <div class="mask"></div>
          </div>
      </div>
    </div>
    <div class="footer">
      <div class="service">
        <span class="iconfont"></span>
        <span class="text">客服</span>
      </div>
      <button>立即购买</button>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
// import 'swiper/css/swiper.css'
export default {
  name: "ShowInfo",
  mounted(){
      this.$nextTick(()=>{
          console.log("----showinfo")
        new Swiper(this.$refs.swiper,{
            direction:"vertical"
        })  
      })
      
  }
};
</script>

<style lang="less" scoped>
.showInfoWrapper {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;

  .body {
    .cardWrapper {
      //   background: none;
      .headerWrapper {
        position: relative;
        .topBar {
          /deep/ .navBar {
            border-bottom: none;
            color: #fff;
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
        }
        .place {
          margin: 30px 0;
          .placeCenter {
            font-size: 30px;
            margin-bottom: 15px;
          }
          .address {
            font-size: 24px;
            color: #666;
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
        }
        .left {
          color: #999;
          font-size: 28px;
          .title{
            display: inline-block;
            width: 90px;
            text-align-last: justify;
          }
            .symbol{
                font-size: 32px;
            }
        }
        .center {
            margin-left: 30px;
            font-size: 24px;
            color:#222;
            .discount{
                margin-left: 16px;
                color: #ff6743;
            }
        }
      }
    }
    .detailWrapper{
        height: 1268px;
        position: relative;
        width: 100%;
        box-sizing: border-box;
        padding: 0 30px;
        // .detailInner{
        //     height: 100%;
        //     // overflow: hidden;
        //     .introduction{
        //         height: 100%;
        //         zoom: 1;
        //     }
        //     .showAll{
        //         width: 100%;
        //         height: 70px;
        //         position: absolute;
        //         bottom: 0;
        //         line-height: $height;
        //         text-align: center;
        //         color: #ff6743;
        //         font-size: 28px;
        //         border: none;
        //     }
        //     .mask{
        //         position: absolute;
        //         width: 100%;
        //         height: 50px;
        //         z-index: 1;
        //         left: 0;
        //         right: 0;
        //         top: 0;
        //         bottom: 0;
        //         background: rgba(f,f,f, 0.4);
        //         backdrop-filter: blur(5px);
        //     }
        // }
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
    .service {
      width: 102px;
      height: 66px;
      display: flex;
      flex-flow: column;
      justify-content: center;

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
