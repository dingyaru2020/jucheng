<template>
  <div class="wrapper case">
      <div
        class="recommendWrap"
        v-for="(item, index) in recommendList"
        :key="index"
      >
        <!-- 推荐列表 -->
        <div v-if="!item.ad_type">
          <div class="recommendImg">
            <img :src="item.pic" alt="" />

            <div class="country">
              {{ item.city_name }}
            </div>
          </div>
          <div class="recommendContent">
            <div class="recommendTitle">
              <img class="sign" src="../../assets/homeImg/主办.png" alt="" />
              <span class="detail">{{ item.name }}</span>
            </div>
            <div class="time">
              2020-01-02-2020-03-03
            </div>
            <div class="price" v-if="item.min_price > 0">
              <span class="money">￥{{ item.min_price }}</span>
              <span>起</span>
            </div>
            <div v-else class="pending">待定</div>
            <div class="mark">
              <span v-for="(desc, index) in item.support_desc" :key="index">
                {{ desc }}
              </span>
            </div>
          </div>
        </div>

        <!-- 广告列表 -->
        <!-- 1 -->
        <div
          class="adImg"
          v-else-if="item.ad_type === 1 && item.ad_name === '橙PLUS卡'"
        >
          <img src="../../assets/homeImg/plus卡.png" alt="" />
        </div>

        <!-- 2 -->
        <div
          class="adImg"
          v-else-if="item.ad_type === 1 && item.ad_name === 'V+会员'"
        >
          <img src="../../assets/homeImg/vip.png" alt="" />
        </div>

        <!-- 3 -->
        <div
          class="adContent"
          v-else-if="item.ad_type === 4 && item.ad_name === '热搜词'"
        >
          <div class="search">
            <span>热门搜索</span>
            <img src="../../assets/homeImg/搜索.png" alt="" class="searchImg" />
            <img src="../../assets/homeImg/bj.png" alt="" class="bjImg" />
          </div>
          <div class="all">
            大家都在看
          </div>
          <div class="adList">
            <div>魔女宅急便</div>
            <div>张泽音乐会</div>
            <div>第一次约会</div>
            <div>儿童剧</div>
          </div>
        </div>

        <!-- 4 -->
        <div
          class="showContent songs"
          v-else-if="item.ad_type === 2 && item.ad_name === '演唱会'"
        >
          <div class="showImg">
            <img src="../../assets/homeImg/演唱会1.jpg" alt="" class="img1" />
            <img src="../../assets/homeImg/演唱会2.jpg" alt="" />
            <img src="../../assets/homeImg/演唱会2.jpg" alt="" class="img3" />
            <img src="../../assets/homeImg/演唱会2.jpg" alt="" />
          </div>
          <div class="showTitle songsTitle">
            <img src="../../assets/homeImg/演唱会5.png" alt="" />
            <span class="desc songsDesc">演唱会</span>
            <span class="more moreSongs">></span>
          </div>
        </div>

        <!-- 5 -->
        <div
          class="showContent music"
          v-else-if="item.ad_type === 2 && item.ad_name === '音乐剧'"
        >
          <div class="showImg">
            <img src="../../assets/homeImg/音乐剧1.jpg" alt="" class="img1" />
            <img src="../../assets/homeImg/音乐剧2.png" alt="" />
            <img src="../../assets/homeImg/音乐剧3.jpg" alt="" class="img3" />
            <img src="../../assets/homeImg/音乐剧3.jpg" alt="" />
          </div>
          <div class="showTitle musicTitle">
            <img src="../../assets/homeImg/音乐剧4.png" alt="" />
            <span class="desc musicDesc">音乐剧</span>
            <span class="more moreMusic">></span>
          </div>
        </div>

        <!-- 6 -->
        <div
          class="showContent concert"
          v-else-if="item.ad_type === 2 && item.ad_name === '音乐会'"
        >
          <div class="showImg">
            <img src="../../assets/homeImg/音乐会1.jpg" alt="" class="img1" />
            <img src="../../assets/homeImg/音乐会1.jpg" alt="" />
            <img src="../../assets/homeImg/音乐会1.jpg" alt="" class="img3" />
            <img src="../../assets/homeImg/音乐会2.jpg" alt="" />
          </div>
          <div class="showTitle concertTitle">
            <img src="../../assets/homeImg/音乐会3.png" alt="" />
            <span class="desc concertDesc">音乐会</span>
            <span class="more moreConcert">></span>
          </div>
        </div>

        <!-- 7 -->
        <div
          class="showContent baby"
          v-else-if="item.ad_type === 2 && item.ad_name === '舞台剧'"
        >
          <div class="showImg">
            <img src="../../assets/homeImg/亲子1.jpg" alt="" class="img1" />
            <img src="../../assets/homeImg/亲子2.jpg" alt="" />
            <img src="../../assets/homeImg/亲子2.jpg" alt="" class="img3" />
            <img src="../../assets/homeImg/亲子3.jpg" alt="" />
          </div>
          <div class="showTitle babyTitle">
            <img src="../../assets/homeImg/亲子4.png" alt="" />
            <span class="desc babyDesc">儿童亲子</span>
            <span class="more moreBaby">></span>
          </div>
        </div>

        <!-- 8 -->
        <div
          class="showContent exhibition"
          v-else-if="item.ad_type === 2 && item.ad_name === '舞台剧'"
        >
          <div class="showImg">
            <img src="../../assets/homeImg/展览1.jpg" alt="" class="img1" />
            <img src="../../assets/homeImg/展览2.jpg" alt="" />
            <img src="../../assets/homeImg/展览3.jpg" alt="" class="img3" />
            <img src="../../assets/homeImg/展览4.png" alt="" />
          </div>
          <div class="showTitle exhibitionTitle">
            <img src="../../assets/homeImg/展览5.png" alt="" />
            <span class="desc exhibitionDesc">展览</span>
            <span class="more moreExhibition">></span>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  name: "Recommend",
  props: {
    recommendList: Array
  },
};
</script>

<style lang="less">
.wrapper {
  display: flex;
//   display: -webkit-flex;
  justify-content: space-between;
  // flex-direction: row;
  flex-wrap: wrap;
}
.recommendWrap {
  width: 339px;
  border: 1px solid #e3e3e4;
  margin-bottom: 10px;
  display: flex;
}
.recommendWrap .adImg {
  width: 339px;
  height: 463px;
}
.recommendWrap .adImg img {
  width: 100%;
  height: 100%;
}
.recommendWrap .adContent {
  width: 339px;
  height: 524px;
  background-color: #fffcf5;
  padding-left: 30px;
  box-sizing: border-box;
  border: 1px solid #e6c7a5;
  border-radius: 10px;
}
.recommendWrap .adContent .search span {
  font-size: 34px;
  color: #896039;
  font-weight: bolder;
  margin-right: 10px;
}
.recommendWrap .adContent .search .searchImg {
  width: 32px;
  height: 32px;
}
.recommendWrap .adContent .search .bjImg {
  width: 50px;
  height: 50px;
  margin-left: 70px;
  margin-top: 10px;
}
.recommendWrap .adContent .all {
  font-size: 24px;
  color: #896039;
  margin-top: 10px;
}
.recommendWrap .adContent .adList div {
  width: 275px;
  height: 62px;
  background-color: #ffe8cf;
  font-size: 26px;
  color: #896039;
  text-align: center;
  line-height: 62px;
  border-radius: 50px;
  margin-top: 30px;
}
.recommendWrap .showContent {
  width: 339px;
  height: 524px;
  padding: 20px;
  box-sizing: border-box;
  background-size: 339px 524px;
}
.recommendWrap .showContent .showImg img {
  width: 144px;
  height: 200px;
  border-radius: 10px;
}
.recommendWrap .showContent .showImg .img1 {
  margin-right: 10px;
}
.recommendWrap .showContent .showImg .img3 {
  margin-right: 10px;
}
.recommendWrap .showContent .showTitle img {
  width: 36px;
  height: 36px;
  vertical-align: -3px;
  margin-right: 8px;
}
.recommendWrap .showContent .showTitle .desc {
  font-size: 30px;
}
.recommendWrap .showContent .showTitle .more {
  font-size: 12px;
  border-radius: 50%;
  display: inline-block;
  width: 22px;
  height: 22px;
  text-align: center;
  margin-left: 10px;
  line-height: 22px;
  vertical-align: 5px;
}
.recommendWrap .songs {
  background-image: url("../../assets/homeImg/演唱会背景.png");
}
.recommendWrap .showContent .showTitle .songsDesc {
  color: #dc2727;
}
.recommendWrap .showContent .showTitle .moreSongs {
  background-color: #dc2727;
  color: #f4bebe;
}

.recommendWrap .music {
  background-image: url("../../assets/homeImg/音乐剧背景.png");
}
.recommendWrap .showContent .showTitle .musicDesc {
  color: #ffc02a;
}
.recommendWrap .showContent .showTitle .moreMusic {
  background-color: #ffc02a;
  color: #ffe8b2;
}

.recommendWrap .concert {
  background-image: url("../../assets/homeImg/音乐会背景.png");
}
.recommendWrap .showContent .showTitle .concertDesc {
  color: #3f93b7;
}
.recommendWrap .showContent .showTitle .moreConcert {
  background-color: #3f93b7;
  color: #c5dee9;
}

.recommendWrap .baby {
  background-image: url("../../assets/homeImg/亲子背景.png");
}
.recommendWrap .showContent .showTitle .babyDesc {
  color: #80be41;
}
.recommendWrap .showContent .showTitle .moreBaby {
  background-color: #80be41;
  color: #d9ebc6;
}

.recommendWrap .exhibition {
  background-image: url("../../assets/homeImg/展览背景.png");
}
.recommendWrap .showContent .showTitle .exhibitionDesc {
  color: #35b2c5;
}
.recommendWrap .showContent .showTitle .moreExhibition {
  background-color: #35b2c5;
  color: #c2e8ed;
}

.recommendWrap .recommendImg {
  width: 339px;
  height: 463px;
  position: relative;
}
.recommendWrap .recommendImg img {
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0 0;
}
.recommendWrap .recommendImg .country {
  height: 36px;
  font-size: 24px;
  background-color: #4b4f55;
  text-align: center;
  color: white;
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0 10px;
}
.recommendWrap .recommendContent {
  margin: 10px 20px 30px 20px;
}
.recommendWrap .recommendContent .pending {
  font-size: 32px;
  color: #ff6743;
  margin-top: 5px;
}
.recommendWrap .recommendContent .recommendTitle {
  width: 295.06px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 30px;
}
.recommendWrap .recommendContent .recommendTitle .sign {
  width: 67px;
  height: 34px;
  vertical-align: -6px;
  margin-right: 10px;
}
.recommendWrap .recommendContent .recommendTitle .detail {
  font-size: 28px;
}
.recommendWrap .recommendContent .time {
  color: #666666;
  font-size: 26px;
  margin-top: 15px;
}
.recommendWrap .recommendContent .price span {
  color: #999999;
  font-size: 24px;
}
.recommendWrap .recommendContent .price .money {
  color: #ff6743;
  font-size: 32px;
  margin-right: 5px;
}
.recommendWrap .recommendContent .mark span {
  font-size: 24px;
  color: #ff6743;
  margin-right: 20px;
}
</style>
