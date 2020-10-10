<template>
    <div class="vip">
        <TopBar :title="title" :fanhui="fanhui" :icon="icon" class="topBar"></TopBar>
        <!-- <Discount></Discount> -->
        <div class="vipbs" ref="vipbs">
            <div class="vipb">
                <Discount ref="discount" />
                <div class="vipBody" ref="vipBody">
                    <div class="vipTitle">
                        <div class="zhe">专享折扣</div>
                        <span class="iconfont icon-iconfontjiantou3"></span>
                    </div>
                    <div class="vipitem" >
                        <div v-for="(item,index) in vipList" :key="index" class="item" >
                            <div class="vipContent" @click="go(item.schedular_id)">
                                <div>
                                    <img :src="item.pic" alt="">
                                    <div class="vipName">{{item.schedular_name}}</div>
                                    <p>{{item.min_discount}} <span>折起</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="carditem">
                        <div class="cardName">双倍积分</div>
                        <img src="../../static/img/vip_plus_double_points.3e1951f.png" alt="">
                    </div>
                    <div class="carditem">
                        <div class="cardName">全场包邮</div>
                        <img src="../../static/img/vip_plus_free_shipping.95caaaa.png" alt="">
                    </div>
                </div>
                <!-- <div class="vip-plus__more">
                    更多VIP+尊享权益，敬请期待
                </div> -->
            </div>
        </div>
        
        <div class="kaitong" v-show="isShow">
					<button class="btn">
						立即开通
						<span class="price">99</span>
						<span class="year">/年</span>
					</button>
					<!-- <div class="quanyi"><a href="">权益解读</a></div> -->
		</div>
        
    </div>
</template>

<script>
import Discount from "../../components/Discount"
import BetterScroll from 'better-scroll'

export default {
    data () {
        return {
            title:"VIP+会员",   //头部文字
            fanhui:true,    //返回按钮
            icon:true,
            page: 1,
            limit: 10,
            version: "6.1.1",
            referer: 2,
            vipList:[],
            isShow:false
        }
    },
    async mounted () {
        // console.log(this.$API.theater)
       const res = await this.$API.theater.getDiscountList(this.page,this.limit,this.version,this.referer)
       this.vipList = res.data.list
       this.$nextTick(()=>{
            this.BS = new BetterScroll(this.$refs.vipbs,{
                click:true,
                bounce:false,
                probeType:2
            })
            console.log(this.BS)
            this.BS.on('scroll', (position) => {
                // console.log(+position.y, +position.y <-430)
                if( +position.y <-430){
                    this.isShow=true 
                }else{
                    this.isShow = false
                }
            })
            this.BS.refresh()
        })
        
    },
    methods: {
        go(schedular_id){
            // console.log(schedular_id)
            this.$router.push({path:"showinfo",query:{schedular_id}})
        } ,
        change(){
            console.log(111)
        }
    },
    components: {
        Discount:Discount
    }
}
</script>

<style lang="less" scoped>
    .vip{
        width: 100%;
        height: 100%;
        .topBar{
            background: #fff;
            position: relative;
            z-index: 11;
        }
        .vipbs{
            width: 100%;
            height: 100%;
            background: #f5f5f5;
        }
        .vipBody{
            height: 100%;
            padding-left: 24px;
            background: #fff;
            position: relative;
            // padding-top: 88px;
            // padding-bottom: 280px;
            .vipTitle{
                padding-bottom: 0.46667rem;
                height: 0.72rem;
                line-height: 0.72rem;
                color: #232323;
                font-size: 0.50667rem;
                display: flex;
                -webkit-box-pack: justify;
                justify-content: space-between;
                -webkit-box-align: center;
                align-items: center;
                font-weight: bold;
                .zhe{
                    color: #232323;
                    font-size: 0.50667rem;
                    font-weight: bold;
                }
                span{
                    display: inline-block;
                    font-weight: normal;
                    font-size: 30px;
                    // transform: scale(0.5);
                    transform-origin: 100% 50%;
                    color: #666666;
                    // margin-top: -0.05333rem;
                    margin-right: 40px;
                }
            }
            .vipitem{
                display: flex;
                flex-wrap: wrap;
                .item{
                    margin: 0 10px;
                }
                img{
                    width: 2.85333rem;
                    height: 3.89333rem;
                    pointer-events: none;
                }
                
                .vipContent{
                    position: relative;
                    width: 2.85333rem;
                    height: 6.58667rem;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    justify-content: space-around;
                    .vipName{
                        width: 2.58667rem;
                        height: 1.06667rem;
                        font-size: 0.4rem;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
                        font-weight: bold;
                        color: #232323;
                        line-height: 0.6rem;
                        padding: 0.26667rem 0.13333rem 0px 0.13333rem;

                    }
                    p{
                        font-size: 0.48rem;
                        color: #ff6743;
                        vertical-align: bottom;
                        padding: 0.13333rem 0.13333rem 0px 0.13333rem;
                        width: 2.58667rem;
                        span{
                            color: #999999;
                            font-size: 0.29333rem;
                        }
                    }
                }
            }

        }
        .card{
            padding-bottom:200px;
            .carditem{
                width: 100%;
                background-color: white;
                padding: 0.58667rem 0.4rem;
                box-sizing: border-box;
                overflow: hidden;
                margin-top: 0.32rem;
                .cardName{
                    padding-bottom: 0.46667rem;
                    height: 0.72rem;
                    line-height: 0.72rem;
                    color: #232323;
                    font-size: 0.50667rem;
                    align-items: center;
                    font-weight: bold;
                }
                img{
                    border: none;
                    border-color: transparent;
                    vertical-align: middle;
                    width: 100%;
                    height: 100%;
                }
            }
            
        }
        // .vip-plus__more{
        //         color: #999999;
        //         font-size: 0.32rem;
        //         height: 1.33333rem;
        //         line-height: 1.33333rem;
        //         margin-bottom: 1.30667rem;
        //         text-align: center;
        //     }
        .kaitong{
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            // display: grid;
            .btn{
                width: 100%;
                margin-top: 0.61333rem;
                font-size: 0.45333rem;
                height: 1.2rem;
                // border-radius: 26.66667rem;
                background: linear-gradient(90deg,#FECE9D,#D79A62);
                color: #85470E;
                display: inline-block;
                line-height: 1;
                white-space: nowrap;
                text-align: center;
                outline: 0;
                border: none;
                padding: 0 0.4rem;
                cursor: pointer;
                .price{
                    font-weight: bold;
                }
                .year{
                    font-size: 0.29333rem;
                }
            }
        }
        
    }
</style>