<template>
    <div class="wrapper">
      <div class="swiper" ref="swiper">
          <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>10</li>
              <li>11</li>
              <li>11</li>
              <li>11</li>
              <li>11</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
          </ul>
      </div>
      <div class="footer"></div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
export default {
  name: 'test',
  mounted(){
      console.log(this.$refs.swiper)
      const swiper = new Swiper(this.$refs.swiper,{
          direction:"vertical"
      })
      console.log(swiper)
  }
}
</script>

<style lang="less" scoped>
    .wrapper{
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        .swiper{
            zoom: 1;
            background: darkcyan;
            width: 100%;
            position: absolute;
            top: 20px;
        }
        .footer{
            position: fixed;
            bottom: 0;
            width: 100%;
            height: 100px;
            background: cornflowerblue;
        }
    }
</style>
