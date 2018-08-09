<template>
	<div class="body_scroll">
		<view-box ref="viewBox" class="body_scroll_wrapper pray_bg">
			<h1 class="page_title_all">包期车充值</h1>
			<div class="recharge_content">
					<group title="车辆：" class="recharge_select">
						<selector placeholder="请选择车牌号" ref="carList" @on-change="showInfo" v-model="parkhao" :options="carList"></selector>
					</group>
					<!-- <group title="小区" class="recharge_select">
						<selector placeholder="请选择小区" v-model="carInfo.villageID" :options="villageList"></selector>
					</group> -->
					<!-- {{parking}} -->
					<group title="停车场：" class="recharge_select">
						<selector placeholder="请选择停车场"  v-model="parking" :options="parkingList"></selector>
					</group>
					<group title="充值时间(月）：" class="recharge_select recharge_month">
						<div class="recharge_input_total">
							<p class="recharge_input">
								<x-button type="default" @click.native="reduceMonth()">-</x-button>
								<x-input type="text"  v-model="month"  :show-clear="false"></x-input>
								<x-button type="default" @click.native="addMonth()">+</x-button>
							</p>
							<p class="recharge_text" v-if="month>0">包期有效期
								<span>{{carBegin | momentformat('YYYY-MM-DD')}}</span>至<span>
									{{carEnd | momentformat('YYYY-MM-DD')}}
								</span>
							</p>
						</div>
					</group>
					<!-- {{this.$vux.alert.isVisible()}} -->
			</div>

			<!-- 底部充值金额样式 -->
			<div class="recharge_bottom_total">
				<p><span>{{payMoney}}</span>元</p>
				<p class="recharge_btn"><x-button type="primary" @click.native="goPay()">立即支付</x-button></p>
			</div>
		</view-box>
	</div>
</template>

<script>
import api from '../../commons/api/api'
import { Selector, Group, ViewBox, XButton, XInput,AlertPlugin } from 'vux'
// Vue.use(AlertPlugin)
export default {
	name: 'recharge',
	components: {
		Selector,
		Group,
		ViewBox,
		XButton,
		XInput
	},
	data: function () {
		return {
			errormsg:'请输入完整信息', //弹出框默认显示的内容，如果后台数据返回更新就显示后台数据
			parkhao:'',//v-model绑定的车牌号
			month: 0,//充值月份
			bagPrice: 0, // 包期金额
			payMoney: 0,//支付金额
			carList: [],//车辆列表
			parkingList: [],//停车场列表
			resone:[],//返回过来的数据复制到resone中
			carBegin: '2018/8/30',//开始时间
			carEnd: '',//结束时间
			parking:'',
			bagid:'',
			plateno:'',
			userid:'',
			username:'',
			accountid:'',
			couponnum:'',
			coponmoney:''
		}
	},
	watch: {
		month: function (val) {
			// 截止日期
			let beginDate = new Date(this.carBegin);
			let y = beginDate.getFullYear();
			let m = beginDate.getMonth() + val;
			let d = beginDate.getDate();
			y = y + m / 12;
			m = m % 12;
			this.carEnd = beginDate;
			this.carEnd.setFullYear(y);
			this.carEnd.setMonth(m);
			let newMonth = this.carEnd.getMonth();
			if (newMonth - m === 1 || newMonth - m === -11) {
				this.carEnd = new Date(newMonth - m === -11 ? y - 1 : y, newMonth === 0 ? 12 : newMonth, 0);
			}

			// 金额更改
			this.payMoney = this.bagPrice * val;
		},
		parking:function(){
			// console.log(this.parking);
			for(let i=0;i<this.resone.length;i++){
				if(this.resone[i].ParkName ==this.parking){
					this.bagPrice=this.resone[i].Bagprice;
					this.bagid = this.resone[i].Bagid;
					this.plateno = this.resone[i].plateNo;
					this.carBegin = this.resone[i].CardBegin;
					this.carEnd = this.resone[i].CardEnd;
					this.errormsg = this.resone[i].errorMsg;
				}
			}
		}
	},
	methods: {
		// 获取车辆信息
		showInfo() {
			// 车牌号改变，清空数据
			this.month = 0;
			this.parkingList=[];//车牌号改变停车场名称列表数据清空
			api.CallService('parking', 'parkingServer', 'getRechargeBagInfo', { plateNo: this.parkhao}, res => {
				for(var i=0;i<res.data.length;i++){
					this.parkingList.push(res.data[i].ParkName);//如果车牌号对应的有多个停车场，这个时候提取每个停车场名 集合到parlingList这个数组中
				}
				this.resone = res.data;
				// console.log(this.parkingList,"列表");
				// console.log(res,"nihao");
			})
		},
		//弹框函数
		tankuang(data){
			this.$vux.alert.show({
					content: data,
				})
		},
		// 支付跳转
		goPay() {
			if(this.parkhao && this.parking){
				if(this.bagid === "0"){
				this.tankuang(this.errormsg);
				}
				else{
					// console.log(this.bagid,this.plateno,this.parkname,this.month,this.payMoney);
					//BagNum:this.month,PayMoney:this.PayMoney 在请求数据时这两个值必须一样这是一个待解决的问题
					api.CallService('parking', 'parkingServer', 'postRechargeBagInfo', {Bagid:this.bagid,plateNo:this.plateno,BagNum:this.month,PayMoney:this.PayMoney,ParkName:this.parking,
					UserID:this.userid,UserName:this.username,AccountID:this.accountid}, res => {
						console.log(res,"充值返回数据");
					})
				}
			}
			else{
				this.tankuang(this.errormsg);
			}                                                                                                                                                                                                                                                                                                        
		},
		// 增加月份
		addMonth() {
			this.month++;
		},
		// 减少月份
		reduceMonth() {
			if (this.month > 0) {
				this.month--;
			} else {
				this.month = 0;
			}
		},
	},
	mounted() {
		this.showInfo();
		this.carList = this.$store.getters.user.carNumbers;  //获取传递过来的车牌号
	}
}
</script>
<style lang="less">
@import './recharge.less';
</style>
