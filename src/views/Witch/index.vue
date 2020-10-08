<template>
    <div class="witch">
        
        <!-- <div class="witchTitle" :style="backgroundImage:url({{mobile_col_img}})"> -->
        <div class="witchTitle" >
            <TopBar />
            <div class="bg">
                <img :src="witch.mobile_col_img" alt="">
            </div>
            <div class="titleContent">
                <img :src="witch.mobile_col_img" alt="">
                <div class="witchSwiper">
                    <h3 class="name">{{witch.name}}</h3>
                    <div class="city">{{witch.city_num}}个城市 | {{witch.sch_num}}场演出</div>
                    <div class="endtime">{{witch.end_time}}</div>
                </div>
            </div>
            
        </div>
        
        <div class="witchContent">
            <div v-for="item in witch.list" :key="item.id">
                <div class="conswiper">
                    <div class="data">日期</div>
                    <div class="conDetails">
                        <h4>{{item.sch_name}}</h4>
                        <span>{{item.city_name}} | {{item.venue_name}}</span>
                        <p>{{item.min_price}} <span>起</span></p>
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
</template>

<script>
import moment from 'moment';
export default {
    name:"Witch",
    data () {
        return {
            id :"3",
            version : "6.1.1",
            referer : 2,
            witch:{},
            startTime:0,
            endTime:0
// city_id: 4
// city_name: "上海"
// end_time: 1591097400
// is_end: 1
// min_price: 100
// sch_id: 114634
// sch_name: " 聚橙制作 | 宫崎骏经典·暖心成长音乐剧《魔女宅急便》-上海站"
// show_id: 42814
// start_time: 1590751800
// venue_id: 184
// venue_name: "人民大舞台"
// city_num: 8
// end_time: 1607254200
// id: 3
// list: (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// mobile_col_img: "https://image.juooo.com/group1/M00/00/02/rBAAI19XUwCAMM2fAACX3iQYe5s860.jpg"
// name: "聚橙制作 | 宫崎骏经典·暖心成长音乐剧《魔女宅急便》"
// sch_num: 24
// show_num: 2
        }
    },
    async mounted () {
        this.option={
            id:this.id,
            version:this.version,
            redirect: this.referer
        }
        const res = await this.$API.default.theater.getInfo(this.id,this.version,this.referer)
        this.witch=res.data
        this.startTime = moment(res.data.start_time).format('MM');
        this.endTime = moment(res.data.end_time).format('YYYY-MM-DDTHH:mm');
        console.log(res.data.start_time,res.data.end_time)
        console.log(this.startTime,this.endTime)
    }
}
</script>

<style lang="less" scoped>
    .witch{
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
            .titleContent{
                position: relative;
                display: flex;
                padding: 30px;
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
        
        .witchContent{
            padding:30px;

            .data,.conDetails{
                background:white;
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