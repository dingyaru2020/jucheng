<template>
  <div class="orderWrapper">
    <TopBar :fanhui="true" title="确认订单" :icon="false" class="topBar" />
    <div class="orderSwiper" ref="swiper">
      <div class="swiper" >
        <div class="cardWrapper">
          <div class="cardBg"></div>
          <div class="card">
            <h3 class="title">
              【广州】2020真的爱你-致敬BEYOND·黄家驹演唱会
            </h3>
            <p class="time">
              <i class="iconfont icon-map"></i>
              <span>2020.12.19 周六 19：30</span>
            </p>
            <p class="place">
              <i class="iconfont icon-map"></i>
              <span>广州 | Mao Livehouse</span>
            </p>
            <p class="num">1张 |</p>
          </div>
        </div>
        <div class="delivery">
          <div class="inner">
            <span class="text">配送方式</span>
            <div class="icon">
              <span class="tip">现场取票</span>
              <i class="iconfont icon-iconfontjiantou3"></i>
            </div>
          </div>
          <div class="inner" id="name">
            <span class="text">姓名</span>
            <input placeholder="填写取票人姓名"/>
          </div>
          <div class="inner" id="phone">
            <span class="text">手机号</span>
            <input placeholderclass="ph" placeholder="填写取票人姓名"/>
          </div>
          <p class="toast">支付成功后，请于演出开演前1小时在演出现场取票</p>
        </div>
        <div class="container">
          <div class="delivery priceWrapper">
            <div class="inner priceCon">
              <span class="text">商品金额</span>
              <span class="price">￥180.00</span>
            </div>
            <div class="inner fee">
              <span class="text">运费</span>
              <span class="price">+￥18</span>
            </div>
            <div class="inner">
              <span class="text">活动优惠</span>
              <div class="icon">
                <span class="noDiscount">不使用优惠</span>
                <i class="iconfont icon-iconfontjiantou3"></i>
              </div>
            </div>
            <div class="inner remark">
                <span class="text">订单备注</span>
                <input placeholder="填写备注信息，用于客服发货"/>
            </div>
            <div class="inner total">
              <span class="text">合计</span>
              <span class="totalPrice">￥198.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <button class="shouldPay">
        <span class="text">应付：</span>
        <span class="totalPrice">￥180.00</span>
      </button>
      <button class="payNow">去付款</button>
    </div>
  </div>
</template>

<script>
import {mapActions,mapState} from "vuex"
import BScroll from "better-scroll";
export default {
  name: "OrderConfirm",
  data(){
    return {
      postData:{
        sku_list: this.$route.query.sku_list+'^1',
        card_no: '',
        is_around: '',
        client_type_id: 2,
        card_rule_id: '',
        ticket_seat_data: '',
        is_package_ticket: '',
        biz_extend_params: '',
        is_exchange_coupon_shop:'' ,
        sign: '784b56a40025d63e5ec78e7d97c3a16b'
      }
    }
  },
  computed:{
    ...mapState({
      confirmInfo:state=>state.show.confirmInfo,
    })
  },
  methods:{
    ...mapActions(['getConfirmInfo'])
  },
  async mounted(){
    await this.getConfirmInfo(this.postData)
    this.$nextTick(() => {
      new BScroll(this.$refs.swiper, { click: true });
    });
  }
};
</script>

<style lang="less" scoped>
.orderWrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  .topBar {
    // /deep/ .
    zoom: 1;
    height: 90px;
  }
  .orderSwiper {
    width: 100%;
    flex: 1;
    // background: cornflowerblue;
    overflow: hidden;
    .swiper {
      width: 100%;
      .cardWrapper {
        height: 487px;
        .cardBg {
          height: 387px;
          width: 100%;
          background: linear-gradient(-50deg, #ff4d4a 0%, #ff9a34 100%),
            linear-gradient(#ff6743, #ff6743);
        }
        .card {
          height: 430px;
          width: 94%;
          box-sizing: border-box;
          padding: 60px 60px;
          margin: -370px auto 0;
          background-image: url(../../static/images/show/bg.png);
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
          color: #232323;
          .title {
            line-height: 50px;
            font-size: 34px;
            font-weight: bold;
            margin-bottom: 20px;
          }
          .time,
          .place {
            font-size: 28px;
            margin-bottom: 20px;
          }
          .num {
            margin-top: 80px;
            font-size: 28px;
          }
        }
      }
      .delivery {
        margin-bottom: 20px;
        padding: 0 30px;
        background: #fff;
        .inner{
          height: 100px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          // height: 100%;
          line-height: $height;
          border-bottom: 2px solid #ebebeb;
          .text{
            width: 130px;
            font-size: 32px;
          }
          .icon{
            .tip{
              display: inline-block;
              box-sizing: border-box;
              height: 36px;
              line-height: $height;
              padding:0 10px 10px;
              border-radius: 3px;
              background: #ff6743;
              color: #fff;
              font-size: 24px;
            }
            i{
              margin-left: 18px;
            }
          }
          .ph{
            font-size: 22px;
          }
        }
        .toast{
          height: 100px;
          line-height: $height;
          font-size: 24px;
          color: #999;
        }
        input{
          flex: 1;
          margin-left: 20px;
          font-size: 28px;
        }
      }
      .container{
        background: #ebebeb;
        padding: 20px 0;
        .priceWrapper{
          .price{
            font-size: 32px;
          }
          .noDiscount{
            font-size: 32px;
          }
          .remark{
            input{
              margin-left: 50px;
            }
          }
          .total{
            .totalPrice{
              color: #ff6743;
            }
          }
        }
      }
    }
  }
  .footer {
    height: 100px;
    background: chartreuse;
    border: 2px solid #ebebeb;
    button {
      width: 50%;
      height: 100%;
      line-height: $height;
      text-align: center;
      font-size: 34px;
      font-weight: bold;
      border: none;
    }
    .shouldPay {
      background: #fff;
      .text {
        color: #232323;
      }
      .totalPrice {
        color: #ff6743;
      }
    }
    .payNow {
      color: #fff;
      background-image: linear-gradient(-50deg, #ff4d4a 0%, #ff9a34 100%),
        linear-gradient(#ebebeb, #ebebeb);
    }
  }
}
</style>
