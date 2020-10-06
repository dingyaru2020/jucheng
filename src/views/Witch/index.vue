<template>
    <div>
        
        <div>
            <img :src="witch.mobile_col_img" alt="">
            <div>
                <div>{{witch.name}}</div>
                <span>{{witch.city_num}}个城市 | {{witch.sch_num}}场演出</span>
                <span>{{witch.end_time}}</span>
            </div>
        </div>
        <div>
            <div v-for="item in witch.list" :key="item.id">
                <div></div>
                <div>
                    <div>{{item.sch_name}}</div>
                    <span>{{item.city_name}} | {{item.venue_name}}</span>
                    <span>{{item.min_price}}起</span>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name:"Witch",
    data () {
        return {
            id :"3",
            version : "6.1.1",
            referer : 2,
            witch:{}
//             city_id: 4
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
    }
}
</script>

<style>

</style>