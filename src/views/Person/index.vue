<template>
  <div class="personWrapper">
    <div class="bacImg" @click="toBack">
      <i class="iconfont icon-shezhi"></i>
    </div>

    <div class="contentWrapper">
      <div class="top">
        <div class="userInfo" @click="toLogin">
          <img
            :src="userInfo.photo"
            alt=""
            class="userImg"
            v-if="isLogin === 1"
          />
          <img
            src="../../assets/homeImg/logo-user.8413cbf.png"
            alt=""
            class="userImg"
            v-else
          />
          <div class="signUp">
            <div class="upOrIn" v-if="isLogin !== 1">登录/注册</div>
            <div class="upOrIn" v-else>{{ userInfo.nick_name }}</div>
            <span class="left" v-if="isLogin !== 1">请点击登录</span>
            <span class="left" v-else>ID:</span>
            <i class="iconfont icon-zuoyoujiantou21" v-if="isLogin !== 1"></i>
            <span class="left" v-else>{{ userInfo.uid }}</span>
          </div>
        </div>

        <div class="vDesc" :class="{ vipActive: isLogin === 1 }">普通会员</div>

        <div class="descNav">
          <div class="navItem">
            <div class="num" :class="{ active: isLogin === 1 }">
              {{ userInfo.money }}
            </div>
            <div class="item">账户余额</div>
          </div>
          <div class="navItem">
            <div class="num" :class="{ active: isLogin === 1 }">
              {{ userInfo.scores }}
            </div>
            <div class="item">积分</div>
          </div>
          <div class="navItem">
            <div class="num" :class="{ active: isLogin === 1 }">
              {{ userInfo.coupon }}
            </div>
            <div class="item">优惠券</div>
          </div>
          <div class="navRight">
            <div class="itemTop">立即开通</div>
            <div class="itemBottom">橙PLUS卡</div>
          </div>
        </div>
      </div>

      <img src="../../assets/homeImg/vip+会员.png" alt="" class="card" />

      <div class="myNav">
        <div class="myNavItem">
          <img src="../../assets/homeImg/订单.png" alt="" class="allImg" />
          <div>我的订单</div>
        </div>
        <div class="myNavItem">
          <img src="../../assets/homeImg/我的票夹.png" alt="" class="allImg" />
          <div>我的票夹</div>
        </div>
        <div class="myNavItem">
          <img src="../../assets/homeImg/我的卡包.png" alt="" class="allImg" />
          <div>我的卡包</div>
        </div>
        <!-- 布局占位用 -->
        <div class="myNavItem"></div>
      </div>

      <div class="myNav">
        <div class="myNavItem">
          <img src="../../assets/homeImg/购票人.png" alt="" class="allImg" />
          <div>实名购票人</div>
        </div>
        <div class="myNavItem">
          <img src="../../assets/homeImg/收货地址.png" alt="" class="allImg" />
          <div>收货地址</div>
        </div>
        <div class="myNavItem">
          <img src="../../assets/homeImg/意见.png" alt="" class="allImg" />
          <div>意见反馈</div>
        </div>
        <div class="myNavItem">
          <img src="../../assets/homeImg/客服.png" alt="" class="allImg" />
          <div class="help">客服帮助</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {mapState} from 'vuex'
export default {
  name: "Person",
  data() {
    return {
      active: 0,
      userInfo: {
        nick_name: "",
        photo: "",
        uid: "",
        money: 0,
        scores: 0,
        coupon: 0
      },
      isLogin: 0
    };
  },
  methods: {
    toLogin() {
      if(this.isLogin === 1){
        return
      }
      this.$router.push({ path: "/login" });
    },
       toBack(){
      if(localStorage.getItem("userInfo")){
        this.$router.push({
          path:'/out',
          query:{
            name:this.userInfo.nick_name,
            id:this.userInfo.uid,
            photo:this.userInfo.photo
          }
        })
      }else{
        this.$router.push('/login')
      }
    }
  },
  mounted() {
    if (localStorage.getItem("userInfo")) {
      let user = JSON.parse(localStorage.getItem("userInfo"));
      const {
        basic_info: { nick_name, photo, uid }
      } = user;
      this.userInfo = { nick_name, photo, uid };
      this.isLogin = user.is_login;
      this.userInfo.money = user.basic_info.user_money;
      this.userInfo.scores = user.basic_info.scores;
      this.userInfo.coupon = user.coupon_info.total;
    }
  },
  
};
</script>

<style lang="less" scoped>
.personWrapper {
  position: relative;
  height: 100vh;
  background-color: #ededed;
}
.personWrapper .bacImg {
  width: 750px;
  height: 419px;
  background-image: url("../../assets/homeImg/背景.png");
  background-size: 750px 419px;
  position: relative;
}
.personWrapper .bacImg i {
  position: absolute;
  top: 30px;
  right: 30px;
  color: #f5f5f5;
  font-size: 42px;
}
.contentWrapper {
  // background-color: red;
  width: 690px;
  border-radius: 10px;
  position: absolute;
  margin: auto;
  top: 115px;
  bottom: 0;
  left: 0;
  right: 0;
  
}
.contentWrapper .top {
  border-radius: 10px;
  background-color: white;
  width: 690px;
  position: relative;
  padding-bottom: 15px;
  height: 290px;
}
.contentWrapper .top .userInfo .userImg {
  width: 116px;
  height: 116px;
  border: 1px solid #eeeeee;
  position: absolute;
  top: -25px;
  left: 30px;
  border-radius: 50%;
}
.top .signUp {
  margin-left: 170px;
  margin-top: 20px;
  font-size: 24px;
  color: #999999;
  float: left;
}
.top .signUp .upOrIn {
  font-size: 30px;
  font-weight: bolder;
  color: black;
  margin-bottom: 12px;
  margin-top: 10px
}
.top .signUp i {
  font-size: 26px;
  font-weight: bold;
}
.top .signUp .right {
  margin-left: 5px;
}
.contentWrapper .top .vDesc {
  color: #b3b3b3;
  background-color: #f5f5f5;
  width: 162px;
  height: 52px;
  font-size: 28px;
  text-align: center;
  line-height: 52px;
  border-radius: 30px 0 0 30px;
  float: right;
  font-weight: bolder;
  margin-top: 100px;
  margin-bottom: 5px;
  padding-top: 4px;
  padding-bottom: 3px;
  box-sizing: border-box
}
.contentWrapper .top .vDesc.vipActive {
  background: linear-gradient(-45deg, #f5dea9, #f8d583);
  color: black
}
.contentWrapper .top .descNav {
  display: flex;
  justify-content: space-around;
  width: 690px;
  padding: 20px 0 20px 0;
  box-sizing: border-box;
}
.contentWrapper .top .descNav .navItem {
  position: relative;
}
.contentWrapper .top .descNav .navItem::after {
  content: "";
  background-color: #ebebeb;
  width: 1px;
  height: 60px;
  position: absolute;
  top: 30px;
  left: 170px;
}
.contentWrapper .top .descNav .navItem .item {
  font-size: 24px;
  color: #666666;
  width: 172.5px;
  text-align: center;
  margin-top: 30px
}
.contentWrapper .top .descNav .navItem .num {
  font-size: 40px;
  color: #232323;
  text-align: center;
  margin-bottom: 15px;
}
.contentWrapper .top .descNav .navItem .num.active {
  color: #ff6743;
}
.contentWrapper .top .descNav .navRight {
  font-size: 26px;
  color: #232323;
  text-align: center;
  width: 172.5px;
  padding-top: 10px;
}
.contentWrapper .top .descNav .navRight .itemBottom {
  font-size: 24px;
  color: #666666;
  margin-top: 15px;
}
.contentWrapper .card {
  height: 180px;
  text-align: center;
  margin-left: -27px;
}
.myNav {
  width: 690px;
  display: flex;
  margin-bottom: 40px;
  border-radius: 10px;
  margin-top: -15px;
}
.myNav .myNavItem {
  width: 172.5px;
  text-align: center;
  color: #666666;
  background-color: #fff;
  // box-sizing: border-box;
  padding: 40px 0;
}
.myNav .myNavItem div {
  font-size: 24px;
  margin-top: -10px;
}
.help {
  color: #ff6743;
}
.allImg {
  width: 66px;
  height: 66px;
}


</style>
