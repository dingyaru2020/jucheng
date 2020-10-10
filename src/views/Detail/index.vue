<template>
    <div class="detail" ref="detail">
        <div class="detailb">
            <div class="detailHeder">
                <div class="font">
                    <span class="iconfont icon-fanhui" @click="goback"></span>
                </div>
                <div class="detailTitle">
                    <div class="detilehead">
                        <img :src="theatreList.theatre_pic" alt="">
                        <div class="detailTheater">
                            <p>{{theatreList.theatre_name}}</p>
                            <span>{{theatreList.sch_num}}场在售演出</span>
                        </div>
                    </div>
                    <p class="address">{{theatreList.city_name}} | {{theatreList.theatre_address}}</p>
                </div>
            </div>
            <div class="detailBody">
                <div class="title">热门演出</div>
                <div class="detailContent">
                    <div v-for="item in showList.list" :key="item.show_id">
                        <div class="detailSubject" @click="go(item.schedular_id)">
                            <!-- {{item}} -->
                            <img :src="item.pic" alt="">
                            <div class="subject">
                                <span class="time"> {{item.start_show_time}} - {{item.end_show_time}}</span>
                                <p class="show">{{item.name}}</p>
                                <p class="city">{{item.city_name}} | {{item.venue_name}}</p>
                                <div class="discount">
                                    <span class="d" v-for="(desc,index) in item.support_desc" :key="index">{{desc}}</span>
                                </div>
                                <p class="price">{{"￥"+ item.max_price}}<span>起</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default {
    name:"Detail",
    data () {
        return {
            version:"6.1.1",
            referer:2,
            theatreList:{},
            showList:{},
            sid:0,
            venue_id:""
        }
    },
    async mounted () {
        this.sid = this.$route.params.sid
        // page=1&venue_id=1078,1079,1795&time=1602038108501&version=6.1.1&referer=2&sign=eea8d1c956abcf5a517ed73f47c0984f
        const res = await this.$API.theater.getTheatreInfo(this.sid,this.version,this.referer)
        const showList = await this.$API.theater.getShowList()
        this.theatreList = res.data
        // console.log(this.theatreList)
        this.showList = showList.data
        this.$nextTick(()=>{
            new BetterScroll(this.$refs.detail,{
                click:true,
                bounce:false

            })
        })
    },
    methods: {
        go(schedular_id){
            // console.log(schedular_id)
            this.$router.push({path:"/showinfo",query:{schedular_id}})
        } ,
        goback(){
            this.$router.go(-1)
        }
    }

}
</script>

<style lang="less" scoped>
.detail{
    height: 100%;
    .detailHeder{
        // position: relative;
        background: url("../../static/img/theater_detail_bg.png");
            height: 4.26667rem;
        background-size: 100%;
        .font{
            .iconfont{
                width: 100px;
                height: 100%;
                line-height: 88px;
                padding: 0.29333rem 0.53333rem 0.29333rem 0.26667rem;
                font-size: 0.48rem;
                position: absolute;
                color: white;
                left: 0;
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);
                top: 50%;
            }
        }
        .detailTitle{
                // position: absolute;
                // bottom: 0.4rem;
                // left: 0.4rem;
                padding: 150px 0 0px 0.4rem;

            .detilehead{
                display: flex;
                img{
                    height: 1.2rem;
                    width: 1.2rem;
                    border-radius: 50%;
                    display: inline-block;
                    background: #f5f5f5;
                    overflow: hidden;
                }
                .detailTheater{
                    margin-left: 28px;
                    p{
                        color: white;
                        font-size: 0.48rem;
                        font-weight: bold;
                    }
                    span{
                        color: white;
                        font-size: 0.34667rem;
                    }
                }
            }
            .address{
                margin-top: 0.4rem;
                color: white;
                font-size: 0.32rem;
                word-break: break-all;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-right: 1.52rem;
                // margin-bottom: 30px;
            }
        }    
    }
            
    .detailBody{
        .title{
            color: #232323;
            font-size: 0.48rem;
            font-weight: bold;
            margin-top: 0.56rem;
            margin-left: 0.34667rem;
        }
        .detailContent{
            margin: 36px 30px 0 30px;
                img{
                    width: 2.8rem;
                    height: 300px;
                    border-radius: 0.10667rem;
                    overflow: hidden;
                }
            .detailSubject{
                display: flex;
                width: 100%;
                height: 4.61333rem;
                .subject{
                    flex: 1 ;
                    color: #232323;
                    margin-left: 0.4rem;
                    .time{
                        display: inline-block;
                        height: 0.42667rem;
                        line-height: 0.42667rem;
                        font-size: 0.42667rem;
                    }
                    .show{
                        font-size: 0.42667rem;
                        color: #232323;
                        line-height: 0.61333rem;
                        height: 1.22667rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        word-break: break-all;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                    .city{
                        font-size: 0.32rem;
                        color: #666;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                        height: 0.37333rem;
                        line-height: 0.37333rem;
                    }
                    .discount{
                        .d{
                            display: inline-block;
                            margin-right: 0.13333rem;
                            border-radius: 0.22667rem;
                            padding: 0.02667rem 0.13333rem;
                            color: #ff6743;
                            font-size: 0.29333rem;
                            background-color: #fff1ef;
                        }
                    }
                    .price{
                        display: inline-block;
                        font-size: 0.42667rem;
                        color: #ff6743;
                        height: 0.42667rem;
                        line-height: 0.42667rem;
                        span{
                            display: inline-block;
                            font-size: 0.29333rem;
                            height: 0.29333rem;
                            line-height: 0.29333rem;
                            color: #999999;
                            margin-top: 0.02667rem;
                            margin-left: 0.12rem;
                        }
                    }
                }
            }
        }
    }
}
</style>