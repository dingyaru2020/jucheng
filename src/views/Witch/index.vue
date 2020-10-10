<template>
    <div class="witch"  ref="witchTitle">
        <div class="www">
            <div class="witchTitle">

                <div class="bg">
                    <img :src="witch.mobile_col_img" alt="">
                </div>
                <!-- 魔女头部 -->
                <div class="titleContent">
                    <div class="navBar">
                        <div class="iconfont icon-fanhui" @click="goback"></div>
                        <div class="treater">魔女</div>
                        <div class="iconfont icon-home" @click="$router.push({path:'/'})"></div>
                    </div>
                    <!-- 魔女头部图片。。。。。。。。。。。。。。 -->
                <div class="witchimg">
                    <img :src="witch.mobile_col_img" alt="">
                    <div class="witchSwiper">
                        <h3 class="name">{{witch.name}}</h3>
                        <div class="city">{{witch.city_num}}个城市 | {{witch.sch_num}}场演出</div>
                        <div class="endtime">{{witch.end_time}}</div>
                    </div>
                </div>
                </div>
                
            </div>
            <!-- 演出计划 -->
            <div class="witchContent">
                <div v-for="item in witchList" :key="item.id">
                    <div class="conswiper" @click="go(item.sch_id)" >
                        <!-- <div class="data">{{item.start_time | myDate(item.end_time)}}</div> -->
                        <div class="data" :class="[item.is_end?'data databg1':'databg']">
                            <!-- <template>{{item.start_time | myDate(item.end_time)}}</template> -->
                            <div v-html="test(item.start_time,item.end_time)" class="vt"></div>
                            <!-- <div>
                                <strong></strong>
                                <span>today</span>
                            </div> -->
               
                        </div>
                        <div class="conDetails" :class="item.is_end ? 'conDetailsbg1' :'conDetailsbg'">
                            <h4>{{item.sch_name}}</h4>
                            <span>{{item.city_name}} | {{item.venue_name}}</span>
                            <p>{{item.min_price}} <span>起</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import BetterScroll from 'better-scroll'

export default {
    name:"Witch",
    data () {
        return {
            id :"3",
            version : "6.1.1",
            referer : 2,
            witch:{},
            witchList:[],
            startMonth:0,
            startDate:0,
            endMonth:0,
            endDate:0,
            today:0
        }
    },
    methods:{
        test(start_time,end_time){
               // console.log(start_time,end_time);
            const startTime = new Date(start_time*1000);
            const endTime = new Date(end_time*1000);
            // this.startMonth = startTime.getMonth()+1
            // this.startDate = startTime.getDate()
            // this.endMonth = endTime.getMonth()+1
            // this.endDate = endTime.getDate()
            // console.log("start",startTime.getMonth()+1,startTime.getDate());
            // console.log("end",endTime.getMonth()+1,endTime.getDate());
            const data = (startTime.getDate() === endTime.getDate()) ? endTime.getDate() :startTime.getDate() + "-" + endTime.getDate()
            return "<strong>"+(startTime.getMonth()+1)===endTime.getMonth()+1  ? startTime.getMonth()+1 : startTime.getMonth()+1 +"</strong>/"+ "<span style='font-size: 0.4rem;'>" + data+ "</span>" +"<strong>"+ (startTime.getMonth()+1)===endTime.getMonth()+1  ? '' : endTime.getMonth()+1 +"</strong>/"+ "<span style='font-size: 0.4rem;'>" + data+ "</span>" 
            // return "<strong>"+(startTime.getMonth()+1===endTime.getMonth()+1)  ? (startTime.getMonth()+ 1+ "/"+"</strong> "+"<span style='font-size: 0.4rem;'>" + data + "</span>" ) : (startTime.getMonth()+ 1+"/"+ "</strong> "+ "<span style='font-size: 0.4rem;'>" + startTime.getDate()+ "</span>"+"<strong>"+ endTime.getMonth()+ 1+ "</strong> "+ "<span style='font-size: 0.4rem;'>" + endTime.getDate()+ "</span>")
            // return (startTime.getMonth()+1===endTime.getMonth()+1)  ? (startTime.getMonth()+ 1+ "/"+"</strong> "+"<span style='font-size: 0.4rem;'>" + data + "</span>" ) : ((startTime.getMonth()+ 1)+" / "+ "</strong> "+ "<span style='font-size: 0.4rem;'>" + startTime.getDate()+ "<br/>-<br/>" + "</span>"+"<strong>" +(endTime.getMonth()+1)+ "</strong> "+ "<span style='font-size: 0.4rem;'>" + endTime.getDate()+ "</span>")
            
        },
        // go(){
        //     sch_id
        // }
        go(schedular_id){
            // console.log(schedular_id)
            this.$router.push({path:"showinfo",query:{schedular_id}})
        },
        goback(){
            this.$router.go(-1)
        },
    },
    filters:{
        myDate(start_time,end_time){
            const startTime = new Date(start_time*1000);
            const endTime = new Date(end_time*1000);
            console.log("start",startTime.getMonth()+1,startTime.getDate());
            console.log("end",endTime.getMonth()+1,endTime.getDate());
            const data = (startTime.getDate()+1 === endTime.getDate()+1) ? endTime.getDate()+1 :startTime.getDate() + "-" + endTime.getDate()
            return "<strong>"+(startTime.getMonth()+1)+"</strong>/"+ data
            // return 123;
        }
    },
    async mounted () {
        this.option={
            id:this.id,
            version:this.version,
            redirect: this.referer
        }
        console.log(this.$API)
        const res = await this.$API.theater.getInfo(this.id,this.version,this.referer)
        this.witch=res.data
        this.witchList=res.data.list
        this.witchList.reverse()
        this.startTime = moment(res.data.start_time).format('MM');
        this.endTime = moment(res.data.end_time).format('YYYY-MM-DDTHH:mm');
        // console.log(res.data.start_time,res.data.end_time)
        // console.log(this.startTime,this.endTime)
        // 滑屏
        this.$nextTick(()=>{
            //将滑屏的包裹器传入到BScroll内部就可以产生滑屏
            this.leftScroll = new BetterScroll(this.$refs.witchTitle,{
                click:true,
                bounce:false
            });
        })
    }
}
</script>

<style lang="less" scoped>
    .witch{
        height: 100%;
        width: 100%;
        background: #f5f5f5;
        .witchTitle{
            height: 459px;
            overflow: hidden;
                // margin-bottom: 20px;
            position: relative;
            .bg{
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                // z-index: -1;
                filter:blur(40px);
                overflow: hidden;
                img{
                    width: 100%;
                    height: 550px;
                }
            }
            .navBar{
                display: flex;
                justify-content: space-between;
                width: 740px;
                height: 88px;
                font-size:36px;
                align-items:center;
                padding: 0 10px;
                line-height: 88px;
                font-weight: 500;
                .iconfont{
                    width: 100px;
                    height: 100%;
                    line-height: 88px;
                    color: #fff;
                    font-weight: 600;
                    font-size:36px;

                }
                .treater{
                    margin: 0 auto;
                    text-align: center;
                    color: #fff;
                    font-size: 36px;
                }
            }
            .titleContent{
                position: relative;
                display: flex;
                padding: 0 30px 30px 30px;
                flex-direction: column;
                .witchimg{
                    display: flex;
                    margin-top: 20px;
                    img{
                    width: 220px;
                    height: 300px;
                }
                .witchSwiper{
                    flex: 1;
                    font-size: 30px;
                    padding-top: 20px;
                    margin-left: 30px;
                    color: #fefefe;
                    h3{
                        line-height: 50px;
                        // color: #fefefe;
                        // color: red;
                        font-size: 32px;
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        font-weight: normal;
                    }
                    .city{
                        margin: 50px 0 60px 0;
                        font-size: 28px;
                    }
                    .endtime{
                        font-size: 32px;
                    }
                }
                }
            }
            
            
        }
        
        .witchContent{
            padding:30px;

            .databg,.conDetailsbg{
                background:white;
            }
            .databg1,.conDetailsbg1{
                background:#EBEBEB;
            }
            .conswiper{
                
                display: flex;
                margin-top: 20px;
                // padding-top: 40px;
                box-sizing: border-box;
                .data{
                    width: 220px;
                    margin-right: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .vt{
                        
                    .span{
                        font-size: 0.4rem;
                        margin-left: -0.08rem;
                        background: red;
                    }
                    }
                }
                .conDetails{
                    width: 460px;
                    padding: 30px;
                    box-sizing: border-box;
                    h4{
                        font-size: 32px;
                        color: #232323;
                        line-height: 44px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        font-weight: normal;
                    }
                    span{
                        font-size: 28px;
                        color: #666;
                        margin-top: 14px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    p{
                        color: #FF6743;
                        font-size: 0.42667rem;
                        margin-right: 0.13333rem;
                        font-weight: 500;
                        margin-top: 0.21333rem;
                        span{
                            color: #999;
                            font-size: 0.29333rem;
                        }
                    }
                }

            }
        }
    }
</style>