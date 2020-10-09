<template>
  <div id="app">
    <!-- <keep-alive> -->
    <router-view></router-view>
    <!-- </keep-alive> -->
    <van-tabbar
      route
      v-model="active"
      active-color="#232323"
      inactive-color="#000"
      class="tabbarWrapper"
      v-show="this.$route.meta.show"
    >
      <van-tabbar-item replace to="/" name="home">
        <div
          class="homeImgActive"
          v-if="active === 'home' ? true : false"
        ></div>
        <div v-else>
          <div class="homeImg"></div>
          <div class="bottomNav">首页</div>
        </div>
      </van-tabbar-item>
      <van-tabbar-item replace to="/theater" name="theater">
        <div
          class="theaterImgActive"
          v-if="active === 'theater' ? true : false"
        ></div>
        <div class="theaterImg" v-else></div>
        <div class="bottomNav">
          剧院
        </div>
      </van-tabbar-item>
      <van-tabbar-item replace to="/ticket" name="ticket">
        <div
          class="ticketImgActive"
          v-if="active === 'ticket' ? true : false"
        ></div>
        <div class="ticketImg" v-else></div>
        <div class="bottomNav">
          票夹
        </div>
      </van-tabbar-item>
      <van-tabbar-item replace to="/person" name="person">
        <div
          class="personImgActive"
          v-if="active === 'person' ? true : false"
        ></div>
        <div class="personImg" v-else></div>
        <div class="bottomNav">
          我的
        </div>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    // const { pathname } = window.location;
    // const active = pathname === "/" ? "home" : pathname.slice(1);
    return {
      // active
      active: "home"
    };
  },
  mounted() {
    const { pathname } = window.location;
    this.active = pathname === "/" ? "home" : pathname.slice(1);
    // console.log(this.$route,'.......');
  },
  methods: {
    // onChange(index) {
    //   console.log(index)
    // }
  }
};
</script>

<style>
#app {
  color: #232323;
  width: 100%;
  height: 100%;
  position: relative;
}
.tabbarWrapper {
  height: 92px;
  border-top: 1px solid #fefefe;
  font-size: 24px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
}
.tabbarWrapper .bcImgOne {
  width: 60px;
  height: 60px;
  background-image: url("./assets/homeImg/首页.png");
  background-size: 60px 60px;
}
.tabbarWrapper .homeImgActive {
  width: 84px;
  height: 84px;
  background-image: url("./assets/homeImg/首页橙子.png");
  background-size: 84px 84px;
}
.tabbarWrapper .homeImg {
  width: 60px;
  height: 60px;
  background-image: url("./assets/homeImg/首页.png");
  background-size: 60px 60px;
}
.tabbarWrapper .bottomNav {
  margin: 8px 0 20px 5px;
}
.tabbarWrapper .theaterImg {
  width: 60px;
  height: 60px;
  background-image: url("./assets/homeImg/剧院.png");
  background-size: 60px 60px;
}
.tabbarWrapper .theaterImgActive {
  width: 60px;
  height: 60px;
  background-image: url("./assets/homeImg/剧院active.png");
  background-size: 60px 60px;
}
.tabbarWrapper .ticketImg {
  width: 60px;
  height: 60px;
  background-image: url("./assets/homeImg/票夹.png");
  background-size: 60px 60px;
}
.tabbarWrapper .ticketImgActive {
  width: 60px;
  height: 60px;
  background-image: url("./assets/homeImg/票夹active.png");
  background-size: 60px 60px;
}
.tabbarWrapper .personImg {
  width: 60px;
  height: 60px;
  background-image: url("./assets/homeImg/我的.png");
  background-size: 60px 60px;
}
.tabbarWrapper .personImgActive {
  width: 60px;
  height: 60px;
  background-image: url("./assets/homeImg/我的active.png");
  background-size: 60px 60px;
}
</style>
