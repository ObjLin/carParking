<template>
  <div class="parking_box">
	  <div v-show="xianshi" @click="xianshi = false;" class="mode" id="mode"></div>
	<!-- <actionsheet v-model="show1" :menus="menus1" @on-click-menu="click"></actionsheet> -->
  	<div class="headerbox">
  		{{this.show1}}	
		<div class="hederboxone" id="hederboxone" v-show="xianshi">
			<p class="hederboxone_p" @click="fuzhi(item)" v-for="(item,index) in ceshi" :key="index">{{item}}</p>
		</div>
		<span class="headerbox_span iconfont" @click="kongzhi()">&#xe62e;</span>
  	</div>
	<div v-if="this.datalist.length">
		<div class="parking_comtentbox" v-for="(item,index) in datalist" :key="index">
			<p class="parking_comtentbox_p"><span>{{item.Intime}}</span></p>
			<div class="box_contentxq">
				<div class="box_contentxq_div"><p class="box_contentxq_p">{{item.Carrecord_carnum}}</p></div>
				<div class="box_contentxq_comtent">
					<p class="box_contentxq_comtent_pone">{{item.Carrecord_type}}</p>
					<p class="box_contentxq_comtent_ptwo">￥{{item.Price}}</p> <!--  parseInt(new Data(item.Intime)-new Data(item.Outtime))/6000 -->
					<p class="box_contentxq_comtent_pthere"><span class="spanimg"><img src="@/assets/images/icon/timeone.png"/></span><span>{{parseInt((parseInt(new Date(item.Outtime)-new Date(item.Intime))/60000)/60)}}</span>小时<span>{{parseInt((parseInt(new Date(item.Outtime)-new Date(item.Intime))/60000)%60)}}</span>分钟</p>
				</div>
				<div class="box_contentxq_div_divp" @click="goPage(item)"><p class="box_contentxq_p"><span>查看详情</span><span>&gt;</span></p></div>
			</div>
		</div>
	</div>
  
  </div>
</template>

<script>
import api from '../../commons/api/api'
import {Selector, ViewBox, Card, XButton, Group, Cell, Radio,Spinner,Actionsheet } from 'vux'

export default {
    components: {
	//   Spinner
		Selector,
		Group,
		Actionsheet
    },
    data() {
        return {
			datalist:[],
			datalisttime:[],
			carJl:'',
			show1:'停车记录',
			// jiantou:'&#xe62e;',
			xianshi:false,
			parkhao:'',
			ceshi:[],
        }
    },
    methods: {
		 click (key) {
			console.log(key)
			},
		//数据复制测试
		fuzhi(data){
			// console.log(data,"数据");
			this.show1 = data;
			this.showList(data);
			this.xianshi = false;
		},
		//控制盒子显示隐藏
		kongzhi(){
			this.xianshi = !this.xianshi;
		},
		// 列表数据
		showList(data) {
			// console.log(this.carJl,"nihaoone");PageIndex:1,'川AG6662'
            api.CallService('parking', 'ParkingServer', 'GetCarRecordListInfoToWX', {PageIndex:1, HPHM: data }, res => {
				this.datalist = res.data.SearchData;
				console.log(this.datalist,res);
			})
        },
        // 跳转确认页面
		goPage: function (name) {
			this.$router.push({
				name:'parkingxiangqing',
				params:name
			});
        }
    },
    mounted() {
		this.ceshi=this.$store.getters.user.carNumbers;
		this.showList(this.ceshi[0]); //这里就是让传递过来的参数第一个显示的车牌号
		// console.log(this.ceshi[0]);
	},
	watch:{
	}
}
</script>

<style lang="less" scoped>
*{
	margin: 0rem;
	padding: 0rem;
}
 	.parking_box{
		 position: relative;
		.mode{
			background: #000;
			height: 100%;
			width: 100%;
			position: absolute;
			opacity: 0.4;
			top: 0px;
			left: 0px;
		}
 		background: #ebebeb;
 		.headerbox{
 			height: 4.761rem;
 			line-height: 4.761rem;
 			color: #fff;
 			background: #00caa0;
 			text-align: center;
			font-size: 1.428rem;
			width: 100%;
			border: 0px;
			position: relative;
			.headerbox_span{
				display: block;
				height: 100%;
				width: 2.38rem;
				// background: red;
				position:absolute;
				top: 0;
				right: 5%;
			}
			.hederboxone{
				width:100%;
				min-height: 4.761rem;
				background: #fff;
				color:rgba(102,102,102,1);
				position: absolute;
				height: auto;
				bottom:auto;
				.hederboxone_p{
					height: 4.761rem;
					border-bottom: 1px #D8D8D8 solid;
					line-height: 50px;
					text-align: center
				}
				.hederboxone_p:hover{
					color: #000;
					// background: red;
				}
	
			}
 		}
 		.parking_comtentbox{
 			box-sizing: border-box;
 			padding: 0 1.142rem;
 			.parking_comtentbox_p{
 				width:13.095rem;
 				margin: 1.523rem auto;
				height:1.904rem;
				background:rgba(206,206,206,1);
				border-radius:0.38rem;
				line-height: 1.904rem;
				text-align: center;
				span{
					font-size:1.142rem;
					font-family:PingFang-SC-Medium;
					color:rgba(255,255,255,1);
					text-align: center;
					margin-right:0.238rem;
				}
				span:nth-of-type(3){
					margin-right: 0rem;
				}
 			}
 			.box_contentxq{
 				height:20.476rem;
				background:rgba(255,255,255,1);
				border-radius:0.38rem;
				border: 0.047rem #D8D8D8 solid;
				.box_contentxq_div{
					box-sizing:border-box;
					padding:0 1.619rem;
					.box_contentxq_p{
						height: 4.285rem;
						line-height: 4.285rem;
						width: 100%;
						font-size:1.714rem;
						font-family:PingFang-SC-Bold;
						color:rgba(51,51,51,1);
						border-bottom: 1px solid #EBEBEB;
					}
				}
				.box_contentxq_comtent{
					height: 11.809rem;
					border-bottom: 0.047rem solid #EBEBEB;
					box-sizing: border-box;
					padding-top: 0.952rem;
					.box_contentxq_comtent_pone{
						font-size:1.333rem;
						font-family:PingFang-SC-Medium;
						color:rgba(153,153,153,1);
						text-align: center;
					}
					.box_contentxq_comtent_ptwo{
						font-size:3.809rem;
						font-family:PingFang-SC-Bold;
						color:rgba(51,51,51,1);
						text-align: center;
					}
					.box_contentxq_comtent_pthere{
						font-size:1.238rem;
						font-family:PingFang-SC-Medium;
						color:rgba(102,102,102,1);
						text-align: center;
						.spanimg{
							/*background: red;*/
							box-sizing: border-box;
							margin-top:0.238rem;
							img{
							height: 1.142rem;
							width: 1.142rem;
							margin-right: 0.761rem;
							vertical-align:initial;
							/*background: red;*/
							/*margin-top: 0.476rem;*/
							}
						}
						
					}
				}
				.box_contentxq_div_divp{
					box-sizing:border-box;
					padding:0 1.619rem;
					.box_contentxq_p{
						display: flex;
						justify-content: space-between;
						height: 4.285rem;
						line-height: 4.285rem;
						span{
							font-size:1.523rem;
							font-family:PingFang-SC-Medium;
							color:#333333;
						}
				}
				}
				
 			}
 		}
 	}
</style>
