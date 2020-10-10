<template>
  <div class="dialogWrapper" v-show="showDialog">
    <div class="mask"></div>
    <div class="dialog">
      <i class="iconfont icon-icon_guanbi" @click="closeDialog"></i>
      <div class="dialogInner" ref="dialog">
        <div class="swiper">
          <div class="chooseDate">
            <span class="text">选择日期</span>
          </div>
          <div class="chooseBox">
            <div
              class="date"
              :class="{ active: index === activeDateIndex }"
              v-for="(item, index) in dateList"
              :key="index"
              @click="changeActiveDateIndex(index)"
            >
              {{ item }}
            </div>
          </div>
          <template v-if="timeList.length > 0">
            <div class="choosePlace">选择场次</div>
            <div class="chooseBox">
              <div
                class="timeBox date"
                :class="{ active: item.id === activeTimeId }"
                v-for="item in timeList"
                :key="item.id"
                @click="changeActiveTimeId(item.id)"
              >
                {{ item.session_time }}
              </div>
            </div>
          </template>

          <div class="choosePrice">选择价格</div>
          <div class="choosePriceWrapper">
            <ul class="container">
              <li
                :class="{ active: item.ticket_id === activeTicketId }"
                v-for="item in ticketList"
                :key="item.ticket_id"
                @click="changeActiveTicketId(item)"
              >
                <span class="suit" v-if="item.ispackage === 1">套票</span>
                {{ item.price }}元
                <span class="desc" v-show="item.ticekt_name"
                  >（{{ item.ticekt_name }}）</span
                >
                <span class="tip" v-if="item.is_stock === 2">缺货登记</span>
              </li>
            </ul>
          </div>
          <div class="lack" v-show="showLack">
            <div class="lackTitle">缺货登记</div>
            <input class="input" type="text" placeholder="asd" v-model="name" />
            <input
              class="input"
              type="text"
              placeholder="15101101010"
              v-model="phone"
            />
            <p class="toast">
              温馨提示：留下联系方式，如有票源，将依据登记顺序进行部分客户短信通知。如一直缺货，将不再另行通知。
            </p>
          </div>
          <template v-if="activeTicketId && !showLack">
            <div class="choosePlace">选择张数</div>
            <div class="box">
              <span class="price">{{ ticketPrice * num }}元</span>
              <div class="changeNum">
                <span class="dec" @click="changeNum('dec')">-</span>
                <span class="num">{{ num }}</span>
                <span class="plus" @click="changeNum('plus')">+</span>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div class="button">
        <button @click="goConfirm">{{ buttonText }}</button>
      </div>
    </div>
  </div>
  
</template>

<script>
import BScroll from "better-scroll";
import debounce from "lodash/debounce";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "Dailog",
  props:{
    showDialog:{type:Boolean},
    schedular_id:{type:Number}
  },
  data() {
    return {
      activeTicketId: 0,
      ticketPrice: 0,
      num: 1,
      activeDateIndex: 0,
      showLack: false,
      name: "",
      phone: "",
      activeTimeId:this.timeList?this.timeList[0].id:this.schedular_id
    };
  },
  computed: {
    ...mapState({
      showInfo: (state) => state.show.showInfo,
      ticketList: (state) => state.show.ticketList,
      
    }),
    ...mapGetters(["dateList", "timeList"]),
    activeItem() {
      return this.dateList[this.activeDateIndex];
    },
    // activeTimeId(){
    //   return this.timeList[0]?this.timeList[0].id:this.schedular_id
    // },
    buttonText() {
      return this.showLack === true ? "提交" : "立即购买";
    },
  },
  async mounted() {
    await this.getTicketList(this.schedular_id);
    // this.$nextTick(() => {
    //   console.log('---dialog',this.$refs.dialog)
    //     new BScroll(this.$refs.dialog, { click: true });
    //   });
  },
  methods: {
    ...mapActions(["getShowInfo", "getTicketList"]),
    changeActiveTicketId(item) {
      this.showLack = false;
      this.activeTicketId = item.ticket_id;
      this.ticketPrice = item.price;
      if (item.is_stock === 2) {
        this.showLack = true;
      }
    },
    changeNum: debounce(function (type) {
      if (type === "dec") {
        this.num--;
        if (this.num <= 1) {
          this.num = 1;
        }
      } else {
        this.num++;
      }
    }, 200),

    goConfirm() {
      if (this.activeTicketId && !this.showLack) {
        const location = {
          path: "/orderconfirm",
          query: {
            sku_list: this.activeTicketId,
          },
        };
        this.$router.push(location);
      }
    },
    changeActiveDateIndex(DateIndex) {
      this.activeDateIndex = DateIndex;
      this.$store.commit("CHANGE_ACTIVE_DATE_INDEX",DateIndex)
      
    },
    
    closeDialog(){
      this.$emit("closeDialog",false)
    },
    changeActiveTimeId(timeId){
      this.activeTimeId = timeId
      this.getTicketList(this.activeTimeId)
    }
  },
  watch: {
    showDialog() {
      this.$nextTick(() => {
        new BScroll(this.$refs.dialog, { 
          click: true ,
        });
      });
    },
    //点击日期改变ticketList
    activeTimeId() {
      this.getTicketList(this.activeTimeId);
    },
    //初始化选中第一个时间
    activeDateIndex(){
      this.activeTimeId = this.timeList[0]?this.timeList[0].id:this.schedular_id
    },
    timeList(){
      this.activeTimeId=this.timeList[0].id
    }
  },
  
};
</script>

<style lang="less" scoped>
.dialogWrapper {
    z-index: 99;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    flex-direction: column;
    .mask {
      background: rgba(98, 98, 98, 0.7);
      width: 100%;
      height: 25%;
    }
    i {
      font-size: 30px;
      position: fixed;
      top: 28%;
      right: 30px;
      z-index: 999;
    }
    .dialog {
      flex: 1;
      // height: 980px;
      padding-top: 50px;
      display: flex;
      flex-direction: column;
      background: #fff;
      font-size: 28px;
      color: #232323;
      box-sizing: border-box;
      .dialogInner {
        padding: 60px 30px 110px 30px;
        height: 840px;
        box-sizing: border-box;
        overflow: hidden;
        .swiper {
          min-height: 2380px;
          // padding-bottom: 110px;
          .chooseDate {
            .text {
              font-weight: bold;
            }
          }
          .chooseBox {
            display: flex;
            flex-wrap: wrap;
            flex-shrink: 0;
            margin: 30px 0;
            font-weight: bold;
            .date {
              height: 85px;
              padding: 0 38px;
              margin: 0 20px 20px 0;
              border-radius: 10px;
              background: #f5f5f5;
              color: #232323;
              font-size: 30px;
              line-height: $height;
              &.active {
                background: #fff1e9;
                color: #ff6743;
              }
            }
          }
          .choosePlace {
            // margin-top: 50px;
            font-weight: bold;
          }
          .timeBox {
            // padding: 0 72px ;
            zoom: 1;
          }
          .choosePrice {
            font-weight: bold;
          }
          .choosePriceWrapper {
            width: 690px;
            margin: 50px 0;
            overflow: hidden;
            ul {
              width: 100%;
              li {
                position: relative;
                height: 85px;
                padding: 0 38px;
                margin-bottom: 20px;
                border-radius: 10px;
                background: #f5f5f5;
                color: #232323;
                font-size: 30px;
                line-height: $height;
                white-space: nowrap;
                &.active {
                  background: #fff1e9;
                  color: #ff6743;
                }
                .desc {
                  font-size: 26px;
                }
                .tip {
                  display: block;
                  width: 180px;
                  height: 50px;
                  transform: scale(0.5);
                  transform-origin: left top;
                  text-align: center;
                  line-height: $height;
                  color: #fff;
                  background: #ccc;
                  font-size: 38px;
                  border-radius: 28px 0;
                  position: absolute;
                  top: 0;
                  left: 0;
                }
                .suit {
                  display: inline-block;
                  width: 140px;
                  height: 80px;
                  line-height: $height;
                  text-align: center;
                  transform: scale(0.5);
                  background: #ff9a34;
                  color: #fff;
                  font-size: 42px;
                  // margin: 0 16px;
                }
              }
            }
          }
          .lack {
            border-radius: 10px;
            border: 2px solid #ebebeb;
            padding: 40px;
            .lackTitle {
              font-size: 28px;
              font-weight: bold;
              margin-bottom: 50px;
            }
            input {
              background: #f5f5f5;
              font-size: 26px;
              padding: 0 40px;
              height: 90px;
              width: 87%;
              line-height: $height;
              margin-bottom: 50px;
            }
            .toast {
              font-size: 24px;
              color: #666;
              line-height: 30px;
            }
          }
          .box {
            display: flex;
            justify-content: space-between;
            margin: 20px 0;
            height: 85px;
            padding: 0 38px;
            margin-bottom: 20px;
            border-radius: 10px;
            background: #f5f5f5;
            color: #232323;
            font-size: 30px;
            line-height: $height;
            .dec,
            .plus {
              display: inline-block;
              width: 40px;
              height: $width;
              line-height: $height;
              text-align: center;
              font-size: 26px;
              border: 2px solid #ebebeb;
            }
            .num {
              margin: 0 20px;
            }
          }
        }
      }
      .button {
        height: 110px;
        box-sizing: border-box;
        border-top: 2px solid #ebebeb;
        background: #fff;
        padding: 15px 30px;
        button {
          margin: 0 auto;
          width: 99%;
          height: 80px;
          background-image: linear-gradient(-50deg, #ff4d4a 0%, #ff9a34 100%),
            linear-gradient(#fefefe, #fefefe);
          line-height: $height;
          border-radius: 50px;
          text-align: center;
          border: none;
          color: #fff;
          font-weight: bold;
          font-size: 34px;
        }
      }
    }
  }
</style>
