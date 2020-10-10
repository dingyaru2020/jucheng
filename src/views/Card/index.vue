<template>
    <div class="card">
        <TopBar class="topBar" :title="title" :fanhui="fanhui" :icon="icon"></TopBar>
        <div class="careswiper" ref="card">
            <div>
                <!-- 头部轮播 -->
                <div class="swiper" @click="go" >
                    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                        <van-swipe-item v-for="banner in HotBanner" :key="banner.mb_image">
                            <img :src="banner.mb_image" alt="">
                        </van-swipe-item>
                    </van-swipe>
                </div>
                <!-- VIP+ -->
                <div class="vip">
                    <div class="vipTitle" >
                        <div class="vipbg">
                            <h6>vip+ </h6>
                            <span>开通VIP+，演出随心看</span>
                        </div>
                        <!-- <div ref="vipSwiper" class="vipsss">
                            <div  class="vipSwiper">
                                <div class="vips" v-for="list in equity_list" :key="list.benefits_name">
                                    <div class="v">
                                        <div :class="'right-cell right-cell__icon--'+list.benefits_icon " ></div>
                                        <span>{{list.benefits_name}}</span>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                        <template>
                            <swiper  ref="mySwiper" :options="swiperOptions">
                                <swiper-slide  class="vips" v-for="list in equity_list" :key="list.benefits_name">
                                    <div  class="v">
                                        <div :class="'right-cell right-cell__icon--'+list.benefits_icon " ></div>
                                        <span>{{list.benefits_name}}</span>
                                    </div>
                                </swiper-slide>
                            </swiper>
                        </template>
                    </div>
                    <!-- </div> -->
                    <!-- 卡的种类 -->
                    <div class="entry-block margin-top">
                        
                        <div class="entry-block__title">
                            {{store_card[0].card_type_name}}
                        <span class="entry-block__title__desc">{{store_title}}</span>
                        </div>
                        <div class="entry-card-list">
                            <div class="card-list__item">
                                <div class="orange-plus">
                                    <div class="card-cell">
                                    <div class="image card-cell__bg-img">
                                        <img :src="store_card[0].card_image" class="ju-image ju-image--fill">
                                    </div>
                                    <div class="card-cell__desc">
                                        <div class="card-cell__desc__top">
                                        {{store_card[0].name}}
                                        </div>
                                        <div class="card-cell__desc__middle">有效期： 长期有效</div>
                                        <div class="card-cell__desc__bottom">
                                            <div class="orange-plus__price">
                                                <span class="orange-plus__price__num">¥{{store_card[0].card_price}}</span>
                                                <span class="orange-plus__price__give">赠VIP+</span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="entry-block margin-top" >
                        <div class="entry-block__title">
                            <div class="entry-title">品类
                                <span class="entry-title__point"></span>
                                次卡
                            </div>
                        </div>
                        <div class="entry-card-list" v-for="list in cate_card" :key="list.id">
                            <div class="card-list__item">
                                <div class="orange-plus">
                                    <div class="card-cell">
                                        <div class="image card-cell__bg-img">
                                            <img :src="list.card_image" class="ju-image ju-image--fill">
                                        </div>
                                        <div class="card-cell__desc">
                                            <div class="card-cell__desc__top">
                                                {{list.name}}
                                            </div>
                                            <div class="card-cell__desc__middle">有效期： 长期有效</div>
                                            <div class="card-cell__desc__bottom">
                                                <div class="orange-plus__price">
                                                    <span class="orange-plus__price__num">¥{{list.card_price}}</span>
                                                    <span class="orange-plus__price__give">兑换券{{list.use_limit}}张</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="entry-block margin-top" >
                        <div class="entry-block__title">
                            <div class="entry-title">品类
                                <span class="entry-title__point"></span>
                                次卡
                            </div>
                        </div>
                        <div class="entry-card-list" v-for="list in once_card" :key="list.id">
                            <div class="card-list__item">
                                <div class="orange-plus">
                                    <div class="card-cell">
                                        <div class="image card-cell__bg-img">
                                            <img :src="list.card_image" class="ju-image ju-image--fill">
                                        </div>
                                        <div class="card-cell__desc">
                                            <div class="card-cell__desc__top">
                                                {{list.name}}
                                            </div>
                                            <div class="card-cell__desc__middle">有效期： 长期有效</div>
                                            <div class="card-cell__desc__bottom">
                                                <div class="orange-plus__price">
                                                    <span class="orange-plus__price__num">¥{{list.card_price}}</span>
                                                    <span class="orange-plus__price__give">兑换券{{list.use_limit}}张</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
import BetterScroll from 'better-scroll'
export default {
    data () {
        return {
            title:"购买新卡",   //头部文字
            fanhui:true,    //返回按钮
            icon:true,
            version:"6.1.1",
            referer:2,
            once_card:[],
            store_card:[{}],
            cate_card:[],
            store_title:"",
            HotBanner:[],
            equity_list:[],
            swiperOptions: {    //swiper配置信息
                pagination: '.swiper-pagination',
                // slidesPerView :'auto',
                slidesPerView :'5',  //一排显示多少张图片
                paginationClickable: true,
                // spaceBetween: 8,   //两张图片直接间隔
                freeMode: true
            },
        }
    },

    async mounted () {
        this.options={
            version:this.version,
            referer:this.referer
        }   
        const res = await this.$API.theater.getCardGroupList(this.version,this.referer)
        this.once_card = res.data.once_card
        const {once_card,store_card,cate_card,store_title} = res.data
        this.once_card = once_card
        this.store_card = store_card
        this.cate_card = cate_card
        this.store_title = store_title
        // console.log(
        //     this.once_card, this.store_card,this.cate_card,this.store_title 
        // )
        const berner = await this.$API.theater.getHotBanner(this.version,this.referer)
        this.HotBanner = berner.data
        const vipRule = await this.$API.theater.getVipRule(this.version,this.referer)
        this.equity_list =vipRule.data.vip_rule_data.equity_list
        // console.log(this.once_card)
        this.$nextTick(()=>{
            new BetterScroll(this.$refs.card,{
                click:true,
                bounce:false
            })
            // new BetterScroll(this.$refs.vipSwiper,{
            //     click:true,
            //     scrollX:true,
            //     bounce:false
            // })
        })
    },
    methods: {
        go(){
            console.log(12)
             this.$router.push({path:'/vip'})
        }  
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
    position: relative;
    z-index: 11;
}
.card{
    height: 100%;
    width: 100%;

}
.careswiper{
    height: 100%;
    width: 100%;
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
    margin-top: 30px;
    background: #f5f5f5;
    .vipTitle{
        background: #fff;
        width: 100%;
        line-height: 54px;
        .vipsss{width: 100%;}
        .vipbg{
            display: flex;
        }
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
        background: #fff;
        margin-top: 35px;

        .vips{
            margin-left: 32px;    
        }
    }
    .swiper-container{
        // margin-top: 35px;
        // margin-left:30px ;
        margin: 30px 0 35px 20px;
    }
    .swiper-wrapper{
        margin-top: 35px;
        .vips{
            .v{
                width: 130px;
                .right-cell{
                    display: block;
                    height: 94px;
                    width: 94px;
                    border-radius: 50%;
                    background-image: url(../../static/img/vip_plus_right.61e731b.png);
                    background-size: 442px 332px;
                    // background-position: -10px -20px;
                    margin: 0 8px;

                }
                .right-cell__icon--prior-buy{ background-position: -0.12rem -3.06667rem;}
                .right-cell__icon--price{background-position: -3.05333rem -3.06667rem;}    
                .right-cell__icon--discount{ background-position: -4.52rem -1.6rem;}   
                .right-cell__icon--coupon {background-position: -4.52rem -0.12rem;  }
                .right-cell__icon--free-shipping { background-position: -1.58667rem -1.6rem; }
                .right-cell__icon--double-points { background-position: -3.05333rem -1.6rem;  } 
                .right-cell__icon--free-ticket{ background-position: -1.58667rem -3.06667rem;}
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
.margin-top{
    margin-top:24px;
}
.entry-block{
    width: 100%;
    background-color: white;
    padding: 20px 20px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
}
.entry-block__title {
    padding-bottom:px35;
    height: 54px;
    line-height: 54px;
    color: #232323;
    font-size: 38px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-weight: bold;
}
.entry-block__title__desc{
    font-size: 28px;
    color: #666666;
    font-weight: normal;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin-left:20px;
}
.card-list {
    margin-top: -40px;
    margin-bottom: -51px;
}
.card-list__item {
    padding: 50px 0;
    border-bottom: 1px solid #f5f5f5;
}
.card-cell {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.image, .ju-tabbar {
    position: relative;
}
.card-cell__bg-img {
    width: 320px;
    height: 202px;
    border-radius: 20px;
    overflow: hidden;
}
.ju-image--fill {
    width: 100%;
    height: 100%;
}
.card-cell__desc {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 15px 0;
    margin-left: 30px;
}
.card-cell__desc__top{
    color: #232323;
    font-size: 34px;
    font-weight: bold;
}
.card-cell__desc__middle{
    color: #999999;
    font-size: 24px;
    height: 48px;
    line-height: 48px;
}
.card-cell__desc__bottom {
    height: 48px;
    line-height: 48px;
}
.orange-plus__price__num {
    color: #ff6743;
    font-size: 32px;
    font-weight: bold;
}
.orange-plus__price__give {
    display: inline-block;
    // width: 94px;
    height: 34px;
    background: rgba(255,129,0,0.1);
    border-radius: 6px;
    text-align: center;
    line-height: 34px;
    font-size:  24px;
    color: #d5a370;
    padding-top: 1px;
    padding: 0 10px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-left: 32px;
}
.entry-title__point{
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #232323;
    margin: 12px;

}
.entry-title{
        display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
</style>