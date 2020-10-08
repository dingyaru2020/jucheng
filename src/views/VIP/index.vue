~<template>
    <div class="vip">
        <TopBar :title="title" :fanhui="fanhui" :icon="icon"></TopBar>
        <!-- <Discount></Discount> -->
        <div class="vipbs" ref="vipbs">
            <div class="vipb">
                <Discount />
                <div class="vipBody" ref="vipBody">
                    <div class="vipTitle">
                        <div>专享折扣</div>
                        <span></span>
                    </div>
                    <div class="vipitem" ref="vipitem">
                        <div v-for="(item,index) in vipList" :key="index" >
                            <div class="">
                                <img :src="item.pic" alt="">
                                <div>{{item.schedular_name}}</div>
                                <p>{{item.min_discount}}<span>折起</span></p>
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
        // console.log(this.$API.default.theater)
       const res = await this.$API.default.theater.getDiscountList(this.page,this.limit,this.version,this.referer)
       this.vipList = res.data.list
       console.log(this.vipList)
    //    new BetterScroll(this.$refs.vipbs)
       this.$nextTick(()=>{
            new BetterScroll(this.$refs.vipbs)
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
        .vipbs{
            width: 100%;
            height: 100%;
        }
        .vipBody{
            height: 100%;
            // overflow-y: auto;
            // white-space: nowrap;
            // -webkit-overflow-scrolling: touch;
              white-space: nowrap;
  overflow-x: auto;
  display: flex;
            .vipitem{
                // display: flex;
                // -webkit-box-orient: vertical;
                // -webkit-box-direction: normal;
                // flex-direction: column;
                // overflow-x: auto;
                // white-space: nowrap;
                // -webkit-overflow-scrolling: ;
    //             white-space: nowrap;
    //             -webkit-overflow-scrolling: touch;

                img{
                    width: 2.85333rem;
                    height: 3.89333rem;
                    pointer-events: none;
                }
            }

        }
    }
</style>