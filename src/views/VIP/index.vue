<template>
    <div class="vip">
        <TopBar :title="title" :fanhui="fanhui" :icon="icon" class="topBar"></TopBar>
        <!-- <Discount></Discount> -->
        <div class="vipbs" ref="vipbs">
            <div class="vipb">
                <Discount />
                <div class="vipBody" ref="vipBody">
                    <div class="vipTitle">
                        <div class="zhe">专享折扣</div>
                        <span></span>
                    </div>
                    <div class="vipitem" >
                        <div v-for="(item,index) in vipList" :key="index" class="item" >
                            <!-- <img :src="item.pic" alt="">
                            <div class="vipName">{{item.schedular_name}}</div>
                            <p>{{item.min_discount}}<span>折起</span></p> -->
                            <div class="vipContent">
                                <div>
                                    <img :src="item.pic" alt="">
                                    <div class="vipName">{{item.schedular_name}}</div>
                                    <p>{{item.min_discount}}<span>折起</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
            vipList:[]
        }
    },
    async mounted () {
        console.log(this.$API.theater)
       const res = await this.$API.theater.getDiscountList(this.page,this.limit,this.version,this.referer)
       this.vipList = res.data.list
       this.$nextTick(()=>{
            new BetterScroll(this.$refs.vipbs,{
                click:true
            })
        })
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
        }
        .vipBody{
            height: 100%;
            margin-left: 24px;
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
            }
            .vipitem{
                display: flex;
                // justify-content: space-around;
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
    }
</style>