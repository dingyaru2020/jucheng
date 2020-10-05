<template>
    <TopBar :title="title" :fanhui="fanhui" :icon="icon"></TopBar>
</template>

<script>
export default {
    data () {
        return {
            title:"VIP+会员",   //头部文字
            fanhui:true,    //返回按钮
            icon:true 
            // /Card/index/getCardGroupList?version=6.1.1&referer=2
        }
    },
    async mounted () {
        // console.log(this.$API.default.theater)
       const res =await this.$API.default.theater.getCardGroupList("6.1.1",2)
       console.log(res,2222)
    }
}
</script>

<style>

</style>