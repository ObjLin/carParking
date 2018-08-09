<template>
  <div class="shuoche_box">
  	<div class="headerbox">
  		锁车
  	</div>
  	<div class="shuoche_content">
  		<p v-for="(item,index) in carpaione" :key="index">
  			<span>{{item.name}}</span>
  			<!--<mt-switch v-model="value"></mt-switch>-->
			  <!-- {{item.type}} -->
  			<x-switch class="x_switch" title="" v-model="item.type" @click.native="state(item.type,item.name)"></x-switch>
  		</p>
  	</div>
  </div>
</template>

<script>
//import { ViewBox, XHeader, XButton, Flexbox, FlexboxItem } from 'vux'
// import { Switch } from 'mint-ui';
import api from '../../commons/api/api'
import { XSwitch } from 'vux'
export default {
    components: {
      XSwitch
    },
    data() {
        return {
			value:true,
			valueone:false,	
			// carpai:[{name:"川zzzzzz",type:true},{name:"川zzdfsz",type:false},{name:"川zz12zzz",type:true},{name:"川zerwzzz",type:false}],
			carpai:[],//这个属性是接受用户登录传递过来的相应车牌号
			carpaione:[],	// 这里面是接收车牌号和相应的状态  循环到页面中
		 	phone:''

        }
    },
    methods: {
		//把值传递给锁车接口
		state(typedata,LicensePN){
			// console.log(data);
			if(typedata === true){
				// console.log('2 true');
				api.CallService('parking', 'ParkingServer', 'UpdateCartInfo', { CPHM:LicensePN,LockCommand:1,UserPhone:this.phone}, res => {
					console.log(res);
				})
			}
			else{
				// console.log('1 false');
				api.CallService('parking', 'ParkingServer', 'UpdateCartInfo', { CPHM:LicensePN,LockCommand:2,UserPhone:this.phone}, res => {
					console.log(res);
				})
			}
		},
    	//接口获取数据
		showList() {
			//这里for循环让每个车牌号都请求一次接口然后接收反馈的值
			this.carpaione = [];
			for(let i=0;i<this.carpai.length;i++){
				api.CallService('parking', 'ParkingServer', 'GetCarModelInfo', { CPHM:this.carpai[i]}, res => {
					//这里switch判断每一种状态，然后根据状态值显示相应的状态
					switch(res.data){
						case '未知':
						this.carpaione.push({name:this.carpai[i],type:false});break;
						case "锁车 ":
						this.carpaione.push({name:this.carpai[i],type:true});break;
						case '解锁':
						this.carpaione.push({name:this.carpai[i],type:false});break;
						default:
					}
					// console.log(res);
				})
			}
			// console.log(this.carpaione,"状态");
        }
    },
    mounted() {
		this.carpai=this.$store.getters.user.carNumbers;  //传递过来的车牌参数
		this.phone = this.$store.getters.user.phone;  //手机号参数
		this.showList();
    }
}
</script>

<style lang="less" >
*{
	margin: 0rem;
	padding: 0rem;
}

.weui-switch:checked, .weui-switch-cp__input:checked ~ .weui-switch-cp__box {
    border-color: #00CAA0 !important;
    background-color: #00CAA0 !important;
}
 	.shuoche_box{
 		height: 100%;
 		background:rgba(235,235,235,1);
 			.headerbox{
 			height: 4.761rem;
 			line-height: 4.761rem;
 			color: #fff;
 			background: #00caa0;
 			text-align: center;
 			font-size: 1.428rem;
 		}
 		.shuoche_content{
 			box-sizing: border-box;
 			padding: 0.38rem 1.142rem 0rem 1.142rem;
 			p{
 				height:4.761rem;
 				line-height: 4.761rem;
				background:rgba(255,255,255,1);
				border-radius:8px;
				box-sizing: border-box;
				padding: 0 2.285rem;
				display: flex;
				justify-content: space-between;
				margin-top: 1.142rem;
				span:nth-of-type(1){
					font-size:1.714rem;
					font-family:PingFang-SC-Bold;
					color:rgba(51,51,51,1);
				}
				.x_switch{
					/*background: red;*/
					box-sizing: border-box;
					padding-top: 1.19rem;
				}
				/*.switchone{
					width:5.142rem;
					height:2.666rem;
					background:rgba(0,202,160,1);
				}*/
 			}
 		}
 	}
</style>
