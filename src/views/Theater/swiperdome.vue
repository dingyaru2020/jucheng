 <template>
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>


<script>
export default {
    swiperOption: {
        pagination: {
            el: '.swiper-pagination'
        },
        // Some Swiper option/callback...
    },
}
</script>

<style>

</style>