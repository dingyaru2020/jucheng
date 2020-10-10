<template>
  <div>
    <div class="header">
      <span class="card">票夹</span>
      <span class="more">...</span>
    </div>

    <div class="content">
      <div class="imgWrapper">
        <img src="../../assets/homeImg/ticket.png" alt="">
      </div>
      <div class="ticket">
        暂无电子票
      </div>
      <div class="login" @click="toLogin" v-if="flag">
        登录
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ticket',
  data(){
    return{
      flag:localStorage.getItem('userInfo')?false:true
    }
  },
  methods:{
    toLogin(){
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.header{
  width: 100%;
  height: 88px;
  // text-align: center;
  line-height: 88px;
  font-size: 36px;
  border-bottom: 5px solid #F7F7F7;
  box-sizing: border-box
}
.header .more{
  font-size: 50px;
  font-weight: bolder;
  display: block;
  margin-bottom: 20px;
  margin-left: 680px;
  margin-bottom: 20px;
  height: 100%;
  line-height: 60px
}
.header .card{
  float: left;
  margin-left: 340px
}
.content .imgWrapper{
  height: 155px;
  text-align: center;
  margin-top: 280px
}
.content .imgWrapper img{
  width: 218px;
  height: 100%;
}
.content .ticket{
  font-size: 26px;
  text-align: center;
  color: #999;
  margin-top: 50px
}
.login{
  background: linear-gradient(-50deg,#FF4D4A,#FF9A34);
  width: 290px;
  height: 80px;
  border-radius: 50px;
  text-align: center;
  line-height: 80px;
  font-size: 30px;
  color: white;
  margin: 100px 0 0 225px
}
</style>
