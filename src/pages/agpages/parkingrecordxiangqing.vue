<template>
  <div class="jiluxiangqing_box">
  	<div class="xqtop_box">
  		<p class="xqp_tow">{{this.Jlid.Carrecord_type}}</p>
  		<p class="xqp_one">{{this.Jlid.Price}}</p>
  		<p class="xqp_there"><span class="spanimg"><img src="@/assets/images/icon/timeone.png"/></span><span>{{parseInt((parseInt(new Date(this.Jlid.Outtime)-new Date(this.Jlid.Intime))/60000)/60)}}</span>小时<span>{{parseInt((parseInt(new Date(this.Jlid.Outtime)-new Date(this.Jlid.Intime))/60000)%60)}}</span>分钟</p>
  	</div>
  	<div class="xqtopcontent_box">
  		<p>
  			<span>车牌</span>
  			<span>{{this.Jlid.Carrecord_carnum}}</span>
  		</p>
  		<p>
  			<span>车辆类型</span>
  			<span>{{this.Jlid.Carrecord_type}}</span>
  		</p>
  		<p>
  			<span>停车场</span>
  			<span>{{this.Jlid.Parking_name}}</span>
  		</p>
  		<p>
  			<span>入场时间</span>
  			<span><i>{{this.Jlid.Intime}}</i></span>
  		</p>
  		<p>
  			<span>出场时间</span>
  			<span><i>{{this.Jlid.Outtime}}</i></span>
  		</p>
  		<p>
  			<span>支付方式</span>
  			<span>{{this.Jlid.PayType}}</span>
  		</p>
  	</div>
  </div>
</template>

<script>
//import { ViewBox, XHeader, XButton, Flexbox, FlexboxItem } from 'vux'
// import api from '../../commons/api/api'
export default {
    components: {    
    },
    data() {
        return {
			Jlid:{},
			datalist:[]
        }
	},
	props:{
	},
    methods: {
    },
    mounted() {
		// 获取传参 这个参数是一个对象
		this.Jlid = this.$route.params;
		// console.log(this.Jlid);
	}
}
</script> 

<style lang="less" scoped>
*{
	padding: 0rem;
	margin: 0rem;
}
 	.jiluxiangqing_box{
 		box-sizing: border-box;
 		padding: 0 2.38rem;
 		.xqtop_box{
 			height: 14.761rem;
 			box-sizing: border-box;
 			padding-top: 2.38rem;
 			border-bottom: 1px #ebebeb dashed ;
 			p{
 				margin-top: 1.428rem;
 			}
 			.xqp_one{
 				height: 2.904rem;
 				font-size:3.809rem;
				font-family:PingFang-SC-Bold;
				color:rgba(51,51,51,1);
				line-height:2.904rem;
				text-align:  center;
 			}
 			.xqp_tow{
 				height:1.238rem;
				font-size:1.333rem;
				font-family:PingFang-SC-Medium;
				color:rgba(153,153,153,1);
				line-height:1.238rem;
				text-align: center;
 			}
 			.xqp_there{
 				text-align: center;
 				height:1.238rem;
				font-size:1.333rem;
				font-family:PingFang-SC-Medium;
				color:rgba(51,51,51,1);
				line-height:1.238rem;
				.spanimg{
					img{
						margin-right:0.476rem;
						width: 1.142rem;
						height: 1.142rem;
					}
				}
 			}
 		}
 		.xqtopcontent_box{
 			.pguanlian{
 				height: 3.142rem;
 				.spanguanlian{
 					width: 19.047rem;
 					height: 3.142rem;
 					display: block;
 					i{
 						margin-right:0.476rem;
 						font-size: 0.571rem;
						font-family:PingFang-SC-Medium;
						color:rgba(51,51,51,1);
 					}
 				}
 			}
 			p{
 				display:flex;
 				justify-content: space-between;
 				margin-top: 1.904rem;
 				span{
 					i{
 						font-style: normal;
 					}
 				}
 				span:nth-of-type(1){
 					height:1.238rem;
 					line-height: 1.238rem;
					font-size:1.333rem;
					font-family:PingFang-SC-Medium;
					color:rgba(153,153,153,1);
					display: block;
 				}
 				span:nth-of-type(2){
 					height:1.238rem;
 					line-height: 1.238rem;
					font-size:1.333rem;
					font-family:PingFang-SC-Medium;
					color:rgba(51,51,51,1);
 				}
 				
 			}
 		}
 	}
</style>
