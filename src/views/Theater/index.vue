<template>
    <div class="theater-head">
        <TopBar :title="title" ></TopBar>
        <div class="theater-body">
            <div class="wrapper">
                <!-- 剧院信息 -->
                <div class="content" v-for="Titme in theatre_list" :key="Titme.id">
                    <!-- 剧院头部信息 -->
                    <!-- <a href="">
                        <div class="theaterTitle">
                            <img :src="Titme.pic" alt="">
                            <div class="Ttitle">
                                <span class="TitmeName">{{Titme.name}}</span>
                                <span class="TitmeCount">{{Titme.count}}场在售演出</span>
                            </div>
                            <div class="Tmore">
                                <i class="iconfont icon-19"></i>
                            </div>
                        </div>
                    </a> -->
                    <div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TopBar from "../../components/TopBar"
export default {
    name:"Theater",
    data () {
        return {
            
            title:"剧院",   
            fanhui:true,
            iocn:true,
            page:1,
            version:"6.1.1",
            referer:2,
            theatre_list:[]
        }
    },
    async mounted () {
        const res =await this.$axios.get(`https://api.juooo.com/theatre/index/getTheatreList?page=${this.page}&version=${this.version}&referer${this.referer}`,)  
        this.theatre_list = res.data.theatre_list
    },
   
    components: {
        TopBar
    }
  
}
</script>

<style lang="less" scoped>
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
                            width: 500px;
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
                        margin-right: 20px;
                        i{
                            font-size: 36px;
                            color: #666666;
                        }
                    }
                }
            }
        }
    }
    
</style>>
