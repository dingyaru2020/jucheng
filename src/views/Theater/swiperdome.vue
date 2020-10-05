<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide><img src="./1.png" alt=""></swiper-slide>
    <swiper-slide><img src="./1.png" alt=""></swiper-slide>
    <swiper-slide><img src="./1.png" alt=""></swiper-slide>
    <swiper-slide><img src="./1.png" alt=""></swiper-slide>
    <swiper-slide><img src="./1.png" alt=""></swiper-slide>
    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOptions: {
        //   pagination: {
        //     el: '.swiper-pagination'
        //   },
            pagination: '.swiper-pagination',
            slidesPerView: 2.5,
            paginationClickable: true,
            spaceBetween: 10,
            freeMode: true
        }
      }
    },
    computed: {
      swiper() {
        console.log(1111,this.$refs.mySwiper.$swiper)
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      console.log(this.swiper.slideTo,999)
      this.swiper.slideTo(0, 1000, false)
    }
  } 
</script>
<style lang="less" scoped>
.swiper-container {
    width: 600px;
    height: 300px;
    img{
      width: 210px;
    }
}  
</style> 