<template>
  <div class="login">
    <div class="back" @click="toPerson">
      <i class="iconfont icon-youjiantou"></i>
    </div>
    <div class="title">
      <img src="../../assets/homeImg/login.png" alt="" />
    </div>
    <div class="useInfo">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          placeholder="请输入手机号/邮箱"
          class="user"
        />
        <img
          src="../../assets/homeImg/叉.png"
          alt=""
          class="close nameClose"
          v-if="username ? true : false"
          @click="username = ''"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          placeholder="请输入密码"
          placeholder-class="placeholder"
          class="user"
        />
        <img
          src="../../assets/homeImg/叉.png"
          alt=""
          class="close passwordClose"
          v-if="password ? true : false"
          @click="password = ''"
        />
        <img
          src="../../assets/homeImg/关闭.png"
          alt=""
          class="closeImg"
          v-if="true"
        />
        <img
          src="../../assets/homeImg/打开.png"
          alt=""
          class="closeImg"
          v-else
        />
      </van-form>
    </div>
    <div
      class="submit"
      :class="{ active: username && password ? true : false }"
      @click="login"
    >
      登 录
    </div>
    <div class="forget">
      <div class="left">
        忘记密码
      </div>
      <div class="right">
        验证码登录/注册
      </div>
    </div>
    <div class="other">
      <div class="line1"></div>
      <div class="otherLogin">其他登录方式</div>
      <div class="line2"></div>
    </div>
    <div class="loginImg">
      <div class="bottom">
        <img src="../../assets/homeImg/QQ.png" alt="" />
      </div>
      <div class="bottom">
        <img src="../../assets/homeImg/weibo.f5b598c.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  mounted() {},
  methods: {
    onSubmit(values) {},
    toPerson() {
      this.$router.push({ path: "/person" });
    },
    async login() {
      const result = await this.$axios1({
        method: "post",
        url:
          "https://api.juooo.com/passport/login/index?version=6.1.1&referer=2",
        data: {
          log_type: 2,
          reg_from: 2,
          user_name: this.username,
          password: this.password
        }
      });
      if (result.code === "200") {
        localStorage.setItem("token", result.data.token);
        const res = await this.$axios1.get(
          "https://api.juooo.com/user/account/basicInfo?version=6.1.1&referer=2"
        );
        let userInfo = JSON.stringify(res.data);
        localStorage.setItem("userInfo", userInfo);
        this.$router.push({ path: "/person" });
        this.username = "";
        this.password = "";
      }
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  padding: 10px 30px 20px 30px;
}
.back i {
  font-size: 36px;
  font-weight: bold;
}
.title {
  text-align: center;
  margin-top: 80px;
  margin-bottom: 80px;
}
.title img {
  width: 320px;
  height: 103px;
}
.user {
  padding-bottom: 30px;
  font-size: 32px;
  margin-bottom: 50px;
  border-bottom: 1px solid #999;
  width: 620px;
  margin-left: 30px;
  position: relative;
}
.close {
  width: 26px;
  height: 26px;
}
.nameClose {
  position: absolute;
  top: 355px;
  right: 70px;
}
.passwordClose {
  position: absolute;
  top: 482px;
  right: 130px;
}
.submit {
  width: 622px;
  height: 100px;
  background: linear-gradient(50deg, #ff9a34, #ff4d4a);
  opacity: 0.4;
  text-align: center;
  line-height: 100px;
  color: azure;
  font-size: 36px;
  border-radius: 50px;
  margin-top: 90px;
  margin-bottom: 40px;
  margin-left: 30px;
}
.forget {
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
}
.forget .left {
  font-size: 30px;
  color: #666;
}
.forget .right {
  font-size: 30px;
  color: #666;
}
.other {
  display: flex;
  margin-top: 300px;
  padding-left: 110px;
}
.other .line1 {
  height: 1px;
  width: 140px;
  background-color: #999999;
  margin-top: 16px;
  margin-right: 20px;
}
.other .line2 {
  height: 1px;
  width: 140px;
  background-color: #999999;
  margin-top: 16px;
  margin-left: 20px;
}
.other .otherLogin {
  font-size: 24px;
  color: #999999;
}
.loginImg {
  width: 470px;
  display: flex;
  justify-content: space-around;
  margin-left: 100px;
  margin-top: 60px;
}
.loginImg .bottom {
  width: 70px;
  height: 70px;
  margin-top: 20px 50px;
}
.loginImg .bottom img {
  width: 100%;
  height: 100%;
}
.closeImg {
  width: 36px;
  height: 36px;
  position: absolute;
  top: 480px;
  right: 70px;
}
.active {
  opacity: 1;
}
</style>
