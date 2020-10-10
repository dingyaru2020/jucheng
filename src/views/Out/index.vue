<template>
  <div class="wrapper">
    <div class="title">
      <i class="iconfont icon-youjiantou" @click="goback"></i>
      <span>设置</span>
    </div>

    <div class="content">
      <div class="userInfo">
        <div class="userPic">
          <img :src="$route.query.photo" alt="" />
        </div>
        <div class="user">
          <div class="userName">{{$route.query.name}}</div>
          <div class="userId">
            <span>
              用户ID:
            </span>
            <span class="id">
              {{$route.query.id}}
            </span>
          </div>
        </div>
        <span class="more">></span>
      </div>
      <div class="number">
        <span class="safe">账号安全</span>
        <span class="more">></span>
      </div>
    </div>

    <div class="explain">
      <div class="other">
        <span class="left">用户协议</span>
        <span class="more">></span>
      </div>

      <div>
        <span class="left">关于聚橙</span>
        <span class="more">></span>
      </div>
    </div>

    <div class="out" @click="logOut">
      退出登录
    </div>
  </div>
</template>

<script>
export default {
  name: "Out",
  methods: {
    goback() {
      this.$router.push("/person");
    },
    async logOut(){
        const token = localStorage.getItem("token")
        const result = await this.$axios1({
        method: "post",
        url:
          "https://api.juooo.com/passport/logout/index?version=6.1.1&referer=2",
        data: {
          token
        }
      });
      if(result.code === '200'){
          localStorage.removeItem('userInfo')
          localStorage.removeItem('token')
          this.$router.push('/person')
      }
    }
  },
 
};
</script>

<style lang="less" scoped>
.wrapper {
  height: 100vh;
  background-color: #f5f5f5;
}
.title {
  width: 100%;
  height: 88px;
  line-height: 88px;
  padding: 0 20px;
  background-color: white;
}
.title i {
  font-size: 40px;
}
.title span {
  margin-left: 250px;
  font-size: 36px;
}
.content {
  padding: 0 20px;
  background-color: white;
  margin-top: 5px;
  margin-bottom: 20px;
}
.content .userInfo {
  display: flex;
  padding-top: 20px;
  border-bottom: 1px solid #f5f5f5;
  padding-bottom: 40px;
}
.content .userInfo .userPic {
  width: 110px;
  height: 110px;
}
.content .userInfo .userPic img {
  width: 100%;
  height: 100%;
}
.user {
  margin-right: 360px;
}
.user .userName {
  font-size: 32px;
  margin: 20px 0 20px 20px;
}
.user .userId {
  font-size: 24px;
  color: #999;
  margin-left: 20px;
}
.more {
  margin-top: 40px;
  color: #aeaeae;
  font-size: 36px;
}
.number {
  height: 120px;
  line-height: 120px;
}
.safe {
  margin-right: 540px;
  font-size: 32px;
}
.explain div {
  height: 120px;
  background-color: white;
  line-height: 120px;
  padding: 0 20px;
  font-size: 32px;
}
.explain div .left {
  margin-right: 540px;
}
.out {
  width: 690px;
  height: 94px;
  background-color: #fff;
  border-radius: 50px;
  margin-left: 30px;
  line-height: 94px;
  text-align: center;
  margin-top: 80px;
  font-size: 32px;
  color: #ff6742;
}
</style>
