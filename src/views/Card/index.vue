<template>
    <div>
        <TopBar class="topBar" :title="title" :fanhui="fanhui" :icon="icon"></TopBar>
        <!-- 头部轮播 -->
        <div class="swiper">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="banner in HotBanner" :key="banner.mb_image">
                    <img :src="banner.mb_image" alt="">
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- VIP+ -->
        <div class="vip">
            <div class="vipTitle">
                <h6>vip+ </h6>
                <span>开通VIP+，演出随心看</span>
            </div>
            <!-- <div class="vipSwiper"  v-for="list in equity_list" :key="list.benefits_name"> -->
            <div class="vipSwiper" >
                <div class="vips" v-for="list in equity_list" :key="list.benefits_name">
                    <!-- <img :src="list.benefits_icon" alt=""> -->
                    <div class="v">
                        <!-- <i :class="'right-cell__icon--'+list.benefits_icon" class="right-cell"></i> -->
                        <div :class="'right-cell right-cell__icon--'+list.benefits_icon " id=""></div>
                        <span>{{list.benefits_name}}</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- <Card :onceCard="once_card" ></Card> -->
       
    </div>
</template>

<script>
// import { nextTick } from 'vue/types/umd'
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
import Card from "../../components/card"
export default {
    data () {
        return {
            title:"购买新卡",   //头部文字
            fanhui:true,    //返回按钮
            icon:true,
            version:"6.1.1",
            referer:2,
            once_card:{},
            HotBanner:[],
            equity_list:[]

        }
    },
  

    async mounted () {
        this.options={
            version:this.version,
            referer:this.referer
        }   
        const res = await this.$API.default.theater.getCardGroupList(this.version,this.referer)
        this.once_card = res.data
        const berner = await this.$API.default.theater.getHotBanner(this.version,this.referer)
        this.HotBanner = berner.data
        const vipRule = await this.$API.default.theater.getVipRule(this.version,this.referer)
        this.equity_list =vipRule.data.vip_rule_data.equity_list
        console.log(this.once_card)
    },

    components: {
        Card
    }
}
</script>

<style lang="less" scoped>
// html{overflow: hidden;}
.topBar{
    background: white;
}
.swiper{
    width: 750px;
    height: 560px;
    background-image: url("../../static/img/bgBenner.png");
    background-size: 100%;
    background-repeat: no-repeat;
    margin-top: -88px;
    position: relative;
    z-index: -1;
    .my-swipe{
        width: 686px;
        margin: 32px;
        height: 480px;
        position: absolute;
        top: 88px;
        .van-swipe-item{
            color: #fff;
            font-size: 0.266667rem;
            line-height: 2rem;
            text-align: center;
            img{
                width: 100%;
                // height: 100%;
            }
        }
    }
}
.vip{
    display: flex;
    flex-direction: column;
    .vipTitle{
        display: flex;
        width: 100%;
        height: 54px;
        line-height: 54px;
        h6{
            padding:0 20px;
            font-size: 38px;
            font-weight: bold;
            color: #232323;
        }
        span{
            color: #666666;
            font-size: 28px;
        }
        
    }
    .vipSwiper{
        display: flex;
        width: 100%;
        // overflow-x:scroll;
                margin-top: 35px;

        .vips{
            margin-left: 32px;
            .v{
                width: 130px;
                .right-cell{
                    display: block;
                    height: 94px;
                    width: 94px;
                    background:red;
                    border-radius: 50%;
                    background-image: url(../../static/img/vip_plus_right.61e731b.png);
                    background-size: 442px 332px;
                    background-position: -10px -20px;

                }
                .right-cell__icon--prior-buy{ background-position: -0.12rem -3.06667rem;}
                .right-cell__icon--price{background-position: -3.05333rem -3.06667rem;}    
                .right-cell__icon--discount{ background-position: -4.52rem -1.6rem;}   
                .right-cell__icon--coupon {background-position: -4.52rem -0.12rem;  }
                .right-cell__icon--free-shipping { background-position: -1.58667rem -1.6rem; }
                .right-cell__icon--double-points { background-position: -3.05333rem -1.6rem;  } 
                .right-cell__icon--ticket { background-position: -1.58667rem -3.06667rem;  } 
                .right-cell__icon--activity { background-position: -0.12rem -1.6rem; }
                .right-cell__icon--periodical { background-position: -1.58667rem -0.12rem; }
                .right-cell__icon--birthday { background-position: -3.05333rem -0.12rem; }
                .right-cell__icon--more { background-position: -0.12rem -0.12rem;}
                // .right-cell__icon--price{background-position: -3.05333rem -3.06667rem;}    
                span{
                    font-size: 28px;
                }
            }
        }
    }
}

</style>