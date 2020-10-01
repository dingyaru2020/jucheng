<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide><img src="./1.png" alt=""></swiper-slide>
    <swiper-slide><img src="./1.png" alt=""></swiper-slide>
    <swiper-slide><img src="./1.png" alt=""></swiper-slide>
    <swiper-slide><img src="./1.png" alt=""></swiper-slide>
    <swiper-slide><img src="./1.png" alt=""></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
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
            slidesPerView: 3,
            
            paginationClickable: true,
            spaceBetween: 30,
            freeMode: true
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(0, 1000, false)
    }
  } 
</script>
<style lang="less" scoped>
.swiper-wrapper{
    width: 200px;
    .swiper-slide swiper-slide-active{
        image{ width: 200px;}
    }
}
</style> 