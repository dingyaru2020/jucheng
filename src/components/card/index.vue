<template>
    <div>
        <div class="cardTitle">
            <!-- cate_card: Array(4)
                city_title: ""
                once_card: Array(6)
                store_card: Array(1)
                store_title: "全国通用，购卡充值送100元" -->
            <span v-if=onceCard?true:false>{{onceCard.store_card[0].name}}</span>
            <!-- <span>{{onceCard.store_title}}</span> -->
            <span >{{onceCard.store_title}}</span>

        </div>
        <div class="cardBody"></div>
    </div>
</template>

<script>
export default {
    name:"Card",
    props:{
        onceCard:{
            type:Object,
            default:{}
        },
    },
    mounted(){
        console.log(111,this.onceCard)
        // console.log(111,this.onceCard.cate_card)
    }
    
}
</script>

<style>

</style>