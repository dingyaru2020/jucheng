<template>
    <div class="theater" v-show="showtheater">
        <TopBar :title="title" ></TopBar>
        <!-- <router-view><router-view> -->
        <div class="theater-body" ref="theater_body">
            <div class="wrapper">
                <!-- 剧院信息 -->
                <div class="content" v-for="Titme in theatre_list" :key="Titme.id">
                    <!-- 剧院头部信息 -->
                    <!-- <router-link to="theater/detail"  v-if="Titme.count!==0"> -->
                    <div  v-if="Titme.count!==0">
                        <div class="theaterTitle" @click="display()">
                                <img :src="Titme.pic" alt="">
                                <div class="Ttitle">
                                    <span class="TitmeName">{{Titme.name}}</span>
                                    <span class="TitmeCount">{{Titme.count}}场在售演出</span>
                                </div>
                                <div class="Tmore">
                                    <i class="iconfont icon-19"></i>
                                </div> 
                        </div>
                    <!-- </router-link> -->
                    </div>
                    <div >
                        <template>
                            <swiper  ref="mySwiper" :options="swiperOptions">
                                <swiper-slide v-for="showlist in Titme.showList" :key="showlist.id">
                                    <div class="Scheduling">
                                        <p>{{showlist.show_time}}</p>
                                        <span></span>
                                    </div>
                                    <img :src="showlist.pic" alt="">
                                </swiper-slide>
                            </swiper>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TopBar from "../../components/TopBar"
    // import BScroll from '@better-scroll/core'
import BetterScroll from 'better-scroll'

export default {
    name:"Theater",
    data () {
        return {
            title:"剧院",    //topbar标题
            page:1,        //页码
            version:"6.1.1",
            referer:2,
            theatre_list:[],    //剧院列表
            swiperOptions: {    //swiper配置信息
                pagination: '.swiper-pagination',
                // slidesPerView :'auto',
                slidesPerView :'2.8',  //一排显示多少张图片
                paginationClickable: true,
                // spaceBetween: 8,   //两张图片直接间隔
                freeMode: true
            },
            showtheater:true
        }
    },

    async mounted () {
        const res =await this.$axios.get(`https://api.juooo.com/theatre/index/getTheatreList?page=${this.page}&version=${this.version}&referer${this.referer}`,)  
        this.theatre_list = res.data.theatre_list
        // this.swiper.slideTo(0, 1000, false)
        this.$nextTick(()=>{
            new BetterScroll(this.$refs.theater_body)
        })

    },
    methods: {
        display(){
            console.log(11111)
            this.$router.push({path:"/detail"})
        },
    },
    computed: {
       
   },
    components: {
        TopBar
    }
  
}
</script>

<style lang="less" scoped>
.theater{
    height: 100%;
    width: 100%;
}
    .theater-body {
        background: #fafafa;
        height: 100%;
        .wrapper{
            padding: 26px 24px 0 24px;
            //  剧院信息 
            .content{
                padding: 20px;
                background: white;
                // 剧院头部信息
                .theaterTitle{
                    display: flex;
                    padding: 0 20px;
                    img{
                        width: 100px;
                        height: 100px;
                        border-radius: 6px;
                    }
                    .Ttitle{
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        margin-left: 20px;
                        .TitmeName{
                            // width: 500px;
                            font-size: 34px;
                            font-weight: bold;
                            color: black;
                            white-space: nowrap;
                            overflow: hidden;    
                            text-overflow:ellipsis; 
                            margin: 15px 0;
                        }
                        .TitmeCount{
                            color: #666666;
                            font-size: 24px;
                        }
                    }
                    .Tmore{
                        width: 30px;
                        // margin-right: 40px;
                        i{
                            font-size: 36px;
                            color: #666666;
                        }
                    }
                }
                .swiper-container {
                    width: 600px;
                    margin-top: 26px;
                    .Scheduling{
                        font-size: 28px;
                        border-bottom: 4px solid #ebebeb;
                        margin-bottom: 36px;
                        padding-bottom: 26px;
                        color: #b3b3b3;
                        text-align: center;
                        position: relative;
                        span{
                            display: block;
                            position: absolute;
                            width: 14px;
                            height: 14px;
                            border-radius: 50%;
                            background: #b3b3b3;
                            left: 46%;
                            right: 10px;
                            top: 49px ;
                        }
                    }
                    img{
                        width: 200px;
                        height: 293px;
                        margin: 10px 10px 0 0;
                    }
                }  
            }
        }
    }
    
</style>>
