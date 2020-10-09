<template>
  <div>
    <!-- 顶部搜索栏 -->
    <div class="top">
      <div class="left">
        <img src="../../assets/homeImg/定位.png" alt="" />
        <span class="country">全国</span>
      </div>
      <div class="search">
        <img src="../../assets/homeImg/下载.png" alt="" />
        <span>搜索热门演出</span>
      </div>
      <div class="right">
        <img src="../../assets/homeImg/日历.png" alt="" />
      </div>
    </div>
    <!-- 内容区 -->
    <div class="home">
      <!-- 头部轮播 -->
      <div class="swiper">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item
            class="swpie-item"
            v-for="(item, index) in list.slide_list"
            :key="index"
          >
            <img :src="item.image_url" alt="" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 导航 -->
      <div class="navContent">
        <div class="navItem" v-for="item in list.classify_list" :key="item.id">
          <img :src="item.pic" alt="" />
          <div>{{ item.name }}</div>
        </div>
      </div>
      <!-- 广告轮播 -->
      <div class="adSwiper">
        <div class="adTop">
          <div class="adLeft">
            <img src="../../assets/homeImg/会员.png" alt="" />
            <span>会员专享折扣</span>
          </div>
          <div class="adRight">
            99元/年
            <span>></span>
          </div>
        </div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item
            class="swpie-item"
            v-for="(item, index) in discountList"
            :key="index"
          >
            <div class="imgWrap">
              <img :src="item.pic" alt="" />
            </div>
            <div class="descWrap">
              <div class="desc">
                {{ item.schedular_name }}
              </div>
              <div class="discountWrap">
                <div>
                  <span class="discountNum">{{ item.min_discount }}</span>
                  <span class="discount">折起</span>
                </div>

                <button>立即抢购</button>
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 热门演出 -->
      <div class="hotShow">
        <div class="hot">
          <div class="hotLeft">热门演出</div>
          <div class="hotRight">
            <span class="all">全部</span>
            <span class="other">></span>
          </div>
        </div>
        <div class="showNav wrapper" ref="wrapper">
          <ul class="mycontent" ref="mycontent">
            <li
              class="navList"
              v-for="(item, index) in hotShowList"
              :key="index"
            >
              <img :src="item.pic" alt="" />
              <div>
                {{ item.show_name }}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 巡回演出 -->
      <div class="show">
        <div class="hot">
          <div class="hotLeft">巡回演出</div>
          <div class="hotRight">
            <span class="all">全部</span>
            <span class="other">></span>
          </div>
        </div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item
            class="swpie-item showSwipe"
            v-for="(item, index) in showSwiperList"
            :key="index"
          >
            <img :src="item.mobile_col_img" alt="" />
            <div class="showDescWrap">
              <div class="showTime">
                {{ item.start_time }}
              </div>
              <div class="showTitle">
                {{ item.name }}
              </div>
              <div class="showPrice">
                <span> ￥{{ item.min_price }} </span>
                起
              </div>
              <div class="showCountry">
                <span class="num">
                  {{ item.citys.length }}
                </span>
                <span class="other">
                  城巡演
                </span>
                <span
                  class="country"
                  v-for="(city, index) in item.citys"
                  :key="index"
                >
                  {{ city.name }}
                </span>
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 为你推荐 -->
      <div class="recommend">为你推荐</div>
      <Recommend
        :recommendList="recommendList"
        @getRecommendList="getRecommendList"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import BScroll from "better-scroll";
import moment from "moment";
export default {
  name: "Home",
  data() {
    return {
      recommendList: []
    };
  },
  computed: {
    ...mapState({
      list(state) {
        return state.home.list;
      },
      discountList(state) {
        return state.home.discountList;
      },
      showSwiperList(state) {
        return state.home.showSwiperList;
      },
      hotShowList(state) {
        return state.home.hotShowList;
      }
    })
  },
  mounted() {
    this.getList();
    this.getDiscountList();
    this.getShowSwiperList();
    this.getHotShowList();
    this.getRecommendList();
  },
  methods: {
    ...mapActions([
      "getList",
      "getDiscountList",
      "getShowSwiperList",
      "getHotShowList"
    ]),
    initScroll() {
      this.$nextTick(() => {
        const width = 6 * 218 - 36;
        this.$refs.mycontent.style.width = width + "px";
        if (!this.Scroller) {
          this.Scroller = new BScroll(this.$refs.wrapper, {
            startX: 0,
            click: true,
            scrollX: true,
            eventPassthrough: "vertical",
            scrollbar: true
          });
        } else {
          this.scroll.refresh();
        }
      });
    },
    async getRecommendList() {
      const result = await this.$axios.get(
        `https://api.juooo.com/Show/Search/getShowList?city_id=0&category=&keywords=&venue_id=&start_time=&page=1&referer_type=index&time=1601691033139&version=6.1.1&referer=2&sign=63f665caf603ac4cdbff744329244166`
      );
      let recList = result.data.list;
      let adList = result.data.recommend_ad_list;
      adList.forEach((item, index) => {
        recList.splice(4 * (index + 1) + index, 0, item);
      });
      this.recommendList = [...this.recommendList, ...recList];
    }
  }
};
</script>

<style lang="less" scoped>
.top {
  margin: 14px 20px 30px 20px;
  display: flex;
  justify-content: space-around;
}
.left img {
  width: 40px;
  height: 40px;
  vertical-align: -8px;
}
.country {
  font-size: 30px;
  font-weight: bold;
  margin-left: 5px;
}
.search {
  width: 478px;
  height: 60px;
  border: 1px solid #eeeeee;
  border-radius: 60px;
  background-color: #f5f5f5;
}
.search img {
  width: 40px;
  height: 40px;
  margin: 10px 8px 0 20px;
}
.search span {
  font-size: 26px;
  color: #b3b3b3;
  vertical-align: 9px;
}
.right img {
  width: 40px;
  height: 40px;
  margin-top: 10px;
}
.home {
  margin: 0 30px 0 30px;
}
.swiper {
  width: 100%;
  height: 280px;
  margin-bottom: 10px;
}
.swiper .my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  border: 1px solid #f2f2f2;
}
.swiper .swpie-item {
  height: 280px;
}
.swiper .swpie-item img {
  width: 100%;
  height: 100%;
}
.navContent {
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.navItem {
  width: 138px;
  flex: 1;
  text-align: center;
  margin-top: 20px;
}
.navItem img {
  width: 80px;
  height: 80px;
}
.navItem div {
  font-size: 26px;
  color: #666666;
  width: 138px;
  margin-top: 6px;
}
.adSwiper {
  padding: 0 30px 30px 30px;
  border: 5px solid #f7e5d3;
  border-radius: 5px;
  margin-top: 55px;
  background-color: #fffcf5;
}
.adTop {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  line-height: 80px;
  border-bottom: 6px solid #fdf3e8;
  margin-bottom: 20px;
}
.adLeft img {
  width: 40px;
  height: 36px;
}
.adLeft span {
  font-size: 24px;
  color: #744013;
  text-align: center;
  display: block;
  float: right;
  margin-left: 10px;
}
.adRight {
  font-size: 24px;
  color: #744013;
}
.adRight span {
  color: #d5c3b1;
  margin-left: 6px;
  font-weight: bolder;
}
.descWrap {
  width: 490px;
}
.descWrap .desc {
  font-size: 28px;
  height: 82px;
  margin-bottom: 24px;
}
.discountNum {
  font-size: 32px;
  color: #ff7853;
  margin-right: 15px;
}
.discount {
  color: #999999;
  font-size: 24px;
}
.discountWrap button {
  width: 152px;
  height: 48px;
  border: 2px solid #ff7853;
  font-size: 24px;
  color: #ff7853;
  background-color: #fffcf5;
  border-radius: 50px;
}
.discountWrap {
  display: flex;
  justify-content: space-between;
}
.imgWrap {
  width: 110px;
  height: 150px;
  margin-right: 30px;
}
.imgWrap img {
  width: 100%;
  height: 100%;
}
.adSwiper .my-swipe .swpie-item {
  display: flex;
}
.hotShow {
  margin-top: 50px;
  margin-bottom: 80px;
}
.hot {
  display: flex;
  justify-content: space-between;
}
.hot .hotLeft {
  font-size: 36px;
  font-weight: bolder;
}
.hot .hotRight {
  font-size: 26px;
}
.other {
  color: #b0b0b0;
  margin-left: 10px;
  font-weight: bolder;
}
.showNav {
  margin-top: 30px;
  // display: flex;
  // flex-wrap: wrap;
  width: 100%;
  overflow: auto;
  // white-space:nowrap
}
.mycontent {
  display: flex;
}
.showNav .navList {
  width: 200px;
  margin-right: 18px;
}
.showNav .navList img {
  width: 200px;
  height: 272px;
  border-radius: 10px;
}
.showNav .navList div {
  width: 200px;
  font-size: 28px;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.show {
  margin-bottom: 80px;
}
.show .my-swipe {
  width: 694px;
  height: 332px;
  background-color: #f5f5f5;
  margin-top: 30px;
  border-radius: 10px;
}
.show .my-swipe .swpie-item {
  display: flex;
}
.show .my-swipe .swpie-item img {
  width: 200px;
  height: 272px;
  margin: 20px;
  border-radius: 10px;
  margin-right: 30px;
}
.showDescWrap {
  width: 408px;
  height: 244px;
}
.showDescWrap .showTime {
  font-size: 24px;
  color: #666666;
  margin-top: 30px;
}
.showDescWrap .showTitle {
  font-size: 28px;
  margin-top: 20px;
}
.showDescWrap .showPrice {
  font-size: 24px;
  color: #666666;
  border-bottom: 1px solid #e9e9e9;
  padding: 20px 0 20px 0;
  margin-bottom: 10px;
}
.showDescWrap .showPrice span {
  color: #ff5d2d;
  font-size: 32px;
  margin-right: 10px;
}
.showDescWrap .showCountry .num {
  font-size: 24px;
  color: #ff5d2d;
}
.showDescWrap .showCountry .other {
  color: #999999;
  font-size: 24px;
}
.showDescWrap .showCountry .country {
  color: #9f9f9f;
  font-size: 24px;
  margin-left: 15px;
}
.showCountry {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #9f9f9f;
  font-size: 24px;
}
.recommend {
  font-size: 36px;
  font-weight: bolder;
  margin-bottom: 20px;
}
</style>
