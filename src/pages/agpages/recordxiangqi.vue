<template>
  <div class="jiluxiangqing_box">
  	<div class="xqtop_box">
  		<p class="xqp_one">-50.00</p>
  		<p class="xqp_tow">交易成功</p>
  		<p class="xqp_there">有效期：<span>2018/07/15-2018/15/20</span></p>
  	</div>
  	<div class="xqtopcontent_box">
  		<p>
  			<span>小区</span>
  			<span>云凯小区</span>
  		</p>
  		<p>
  			<span>停车场</span>
  			<span>一期停车场</span>
  		</p>
  		<p>
  			<span>产权人</span>
  			<span>云凯云凯</span>
  		</p>
  		<p class="pguanlian">
  			<span>关联车辆</span>
  			<span class="spanguanlian"><i>川A87333</i><i>川A87333</i><i>川A87333</i><i>川A87333</i><i>川A87333</i><i>川A87333</i><i>川A87333</i></span>
  		</p>
  		<p>
  			<span>充值时间</span>
  			<span>2018-09-09<i>12:34</i></span>
  		</p>
  		<p>
  			<span>充值月份</span>
  			<span><i>12</i>个月</span>
  		</p>
  	</div>
  </div>
</template>

<script>
//import { ViewBox, XHeader, XButton, Flexbox, FlexboxItem } from 'vux'

export default {
    components: {
      
    },
    data() {
        return {

        }
    },
    methods: {
        // 跳转确认页面
      
    },
    mounted() {
        // alert('home');
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
