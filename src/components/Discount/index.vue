<template>
    <div class="discount">
        <!-- 十大权益组件 -->
		<div class="tenDiscount">
			<div class="discountbg"></div>
			<div class="discountHeader">
				<div class="discountBody">
					<div class="discountTerm">
						<div v-for="(item,index) in equity_list" :key="index">
							<div class="item">
								<div :class="'right-cell right-cell__icon--'+item.benefits_icon " ></div>
								<span>{{item.benefits_name}}</span>
							</div>
							<!-- <div :class=" benefits_icon"></div> -->
                        	
						</div>
					</div>
				</div>
				<div class="kaitong">
					<button class="btn">
						立即开通
						<span class="price">{{price}}</span>
						<span class="year">/年</span>
					</button>
					<div class="quanyi"><a href="">权益解读</a></div>
				</div>
			</div>
		</div>
		<div>

		</div>
    </div>
</template>

<script>
 export default {
   data () {
     return {
		equity_list:[],
		price:0
     }
   },
   async mounted () {
        // console.log(this.$API.default.theater)
       const res =await this.$API.default.theater.getVipRule("6.1.1",2)
	//    console.log(res.data)
	   this.equity_list = res.data.vip_rule_data.equity_list
	   this.price = res.data.vip_rule_data.open_data.price
	   this.equity_list.push(
		//    ...this.equity_list,
		   {
			   	benefits_desc: "敬请期待",
				benefits_icon: "more",
				benefits_name: "敬请期待",
				benefits_rule: "",
		   },
		   {
			   	benefits_desc: "",
				benefits_icon: "none",
				benefits_name: "",
				benefits_rule: "",
		   }
	   )
    
   },
   components: {

   }
 }
</script>

<style lang="less" scoped>
.discount{
	.tenDiscount{
		background: url("../../static/img/vip_plus_desc_bg.de74236.png");
		background-repeat: no-repeat;
		background-color: #fcfcfc;
		background-size: 100%;
		padding-bottom: 0.58667rem;
		.discountbg{
			background: url("../../static/img/vip_plus_desc_title.d71030d.png");
			color: #f4dcc4;
			background-repeat: no-repeat;
			background-size: 8.85333rem 1.46667rem;
			background-position: center bottom;
			width: 100%;
			height: 1.46667rem;
			padding-top: 0.42667rem;

		}
		.discountHeader{
			margin: 0.08rem 0.4rem 0px 0.4rem;
			background-color: #fffcf5;
			box-shadow: 0px 0.10667rem 0.33333rem 0.06667rem rgba(217,198,163,0.3);
			border-radius: 0.13333rem;
			display: flex;
			-webkit-box-orient: vertical;
			-webkit-box-direction: normal;
			flex-direction: column;
			padding: 0px 0.4rem 0px 0.4rem;
			.discountBody{
				.discountTerm{
						display: flex;
						justify-content: space-between;
						flex-wrap: wrap;
						// text-align: center;
					.item{
						justify-content: space-between;
						padding-top: 0.66667rem; 
						margin: 0 10px;
						text-align: center;
						
						span{
							color: #514843;
							margin-top: 0.24rem;
							font-size: 0.37333rem;
							align-items: center;
						}
						.right-cell{
							width: 1.25333rem;
							height: 1.25333rem;
							display: block;
							pointer-events: none;
							background-size: 5.89333rem 4.42667rem;
							background-image: url("../../static/img/vip_plus_right.61e731b.png");
							align-items: center;
						}
						.right-cell__icon--prior-buy{background-position: -0.12rem -3.06667rem;}
						.right-cell__icon--price {background-position: -3.05333rem -3.06667rem;}
						.right-cell__icon--discount {background-position: -4.52rem -1.6rem;}
						.right-cell__icon--coupon {background-position: -4.52rem -0.12rem;}
						.right-cell__icon--free-shipping {background-position: -1.58667rem -1.6rem;}
						.right-cell__icon--double-points {background-position: -3.05333rem -1.6rem;}
						.right-cell__icon--free-ticket {background-position: -1.58667rem -3.06667rem;}
						.right-cell__icon--activity {background-position: -0.12rem -1.6rem;}
						.right-cell__icon--periodical {background-position: -1.58667rem -0.12rem;}
						.right-cell__icon--birthday { background-position: -3.05333rem -0.12rem;}
						.right-cell__icon--more {background-position: -0.12rem -0.12rem;}
						.right-cell__icon--none { background-image: none; }
					}
				}
			}
			.kaitong{
				.btn{
					width: 630px;
					margin-top: 0.61333rem;
					font-size: 0.45333rem;
					height: 1.2rem;
					border-radius: 26.66667rem;
					background: linear-gradient(90deg,#FECE9D,#D79A62);
					color: #85470E;
					display: inline-block;
					line-height: 1;
					white-space: nowrap;
					text-align: center;
					outline: 0;
					border: none;
					padding: 0 0.4rem;
					cursor: pointer;
					.price{
					    font-weight: bold;
					}
					.year{
						font-size: 0.29333rem;
					}
				}
				.quanyi{
				    text-decoration: underline;
					text-align: center;
					padding: 0.4rem 0px;
					color: #999999;
					font-size: 0.29333rem;
				}
			}
		}
	}
}
</style>