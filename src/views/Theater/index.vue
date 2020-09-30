<template>
    <div class="theater-head">
        <TopBar :title="剧院"></TopBar>
    </div>
</template>

<script>

  import TopBar from "../../components/TopBar"

export default {
    
    name:"Theater",
    data () {
        return {
            page:1,
            version:"6.1.1",
            referer:2,
            theatre_list:[]
        }
    },
    async mounted () {
        const res =await this.$axios.get(`https://api.juooo.com/theatre/index/getTheatreList?page=${this.page}&version=${this.version}&referer${this.referer}`,)  
        // console.log(res)
        this.theatre_list = res.data.theatre_list
    },
    computed: {
        title(){
            // return this.$router
        }
    },     // console.log(this.$route.query)
    components: {
        TopBar
    }
  
}
</script>

<style lang="less" scoped>
    .theater-head {
        .head_nav {
            width: 100%;
            height: 88px;
            background: #222

        }
    };
    
</style>>
