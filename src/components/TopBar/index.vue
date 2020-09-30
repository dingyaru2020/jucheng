<template>
    <div class="theater-head">
        <div class="navBar">
            <!-- <span class="iconfont icon-fanhui"></span> -->
            <!-- <i class="iconfont icon-fanhui"></i> -->
            <div class="iconfont icon-fanhui" v-show="fanhui"></div>
            <div class="treater">{{title}}</div>
            <div class="iconfont icon-19" v-if="icon"></div>
        </div>
    </div>
</template>

<script>

export default {
    name:"TopBar",
    props:{
        title:String,
        fanhui:Boolean,
        icon:Boolean
    },

}
</script>

<style lang="less">
    .theater-head {
        .navBar {
            display: flex;
            justify-content: space-between;
            width: 750px;
            height: 88px;
            font-size:36px;
            align-items:center;
            padding: 0 10px;
            line-height: 88px;
            border-bottom: 1px solid #ebebeb;
            .iconfont{
                font-size: 36px;
                width: 100px;
                height: 100%;
                line-height: 88px

            }
            .treater{
                margin: 0 auto;
                text-align: center;
                
            }
        }
    };
    
</style>>
