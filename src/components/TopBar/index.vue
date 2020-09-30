<template>
    <div class="theater-head">
        <div class="head_nav">
            <h3>{{title}}</h3>
        </div>
    </div>
</template>

<script>

  

export default {
    name:"TopBar",
    props:[title],
    data () {
        return {
        
        }
    },
    mounted () {
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
