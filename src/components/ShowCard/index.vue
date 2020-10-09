<template>
  <div class="showCard" @click="goDetail">
      <img v-lazy="showInfo.pic">
      <div class="desc">
          <div class="title">{{showInfo.name}}</div>
          <div class="date" v-if="showInfo.show_time_data">{{showInfo.show_time_data[0]}}-{{showInfo.show_time_top}}</div>
          <div class="price">
              <span class="num">￥{{showInfo.min_price}}</span>起
          </div>
      </div>
      <span class="city">{{showInfo.city_name}}</span>
  </div>
</template>

<script>
export default {
  name: 'ShowCard',
  props:{
        showInfo:{
            type:Object,
            default:{
                show_time_data:[]
            }
        }
  },
//   computed:{},
  methods:{
      goDetail(){
          this.$router.push({
              path:"showinfo",
              query:{schedular_id:this.showInfo.schedular_id}
          })
      }
  }
}
</script>

<style lang="less" scoped>
    .showCard{
        width: 343px;
        height: 687px;
        border-radius: 10px;
        overflow: hidden;
        background: #fff;
        position: relative;
        margin: 0 22px 15px 0;
        img{
            width: 100%;
            height: 463px;
        }
        .desc{
            height: 224px;
            padding: 15px;
            .title{
                font-size: 28px;
                color: #232323;
                overflow: hidden;
                font-size:26rpx;
                line-height: 40px;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            .date{
                margin: 20px 0;
                color: #666;
                font-size: 26px;
            }
            .price{
                font-size: 22px;
                color: #999;
                .num{
                    color: #ff6743;
                    font-size: 32px;
                    margin-right: 6px;
                }
            }
        }
        .city{
            height: 36px;
            position: absolute;
            top: 20px;
            right: 14px;
            font-size: 24px;
            line-height: $height;
            color: #fff;
            padding: 0 10px;
            background: linear-gradient(-45deg, rgba(38,38,38,0.8), rgba(70,68,65,0.8));;
        }
    }
</style>
