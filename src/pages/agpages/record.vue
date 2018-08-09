<template>
  <div class="jilu_box">
  	<!--<div class="topbox">
  		<span>x</span>
  		伊顿物业停车管理
  		<span class="shenglue">...</span>
  	</div>-->
  	<div class="headerbox">
  		充值记录
  	</div>
  	<div class="jilu_content">
	  	<div class="jilu_zhongzhi">
	  		<p>今天</p>
	  		<div @click="goPage('/recordxiangqing')">
	  			<p><span>包期充值</span><span>-100.00</span></p>
	  			<p><span>云凯小区</span>-<span>一期停车场</span></p>
	  		</div>
	  	</div>
	  	<div class="jilu_zhongzhi">
	  		<p>今天</p>
	  		<div>
	  			<p><span>包期充值</span><span>-100.00</span></p>
	  			<p><span>云凯小区</span>-<span>一期停车场</span></p>
	  		</div>
	  	</div>
	  	<div class="jilu_zhongzhi">
	  		<p>今天</p>
	  		<div>
	  			<p><span>包期充值</span><span>-100.00</span></p>
	  			<p><span>云凯小区</span>-<span>一期停车场</span></p>
	  		</div>
	  	</div>
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
		goPage: function (name) {
			this.$router.push(name);
		}

	},
	mounted() {
		// alert('home');
	}
}
</script>

<style lang="less" scoped>
* {
  margin: 0px;
  padding: 0rem;
}
.jilu_box {
  height: 100%;
  background: #ebebeb;
  .topbox {
    position: relative;
    font-weight: 600;
    height: 4.761rem;
    text-align: center;
    line-height: 4.761rem;
    font-size: 1.619rem;
    color: #333333;
    /*background:red;*/
    span {
      height: 1.619rem;
      width: 1.619rem;
      /*background: yellow;*/
      line-height: 1.619rem;
      text-align: center;
      display: block;
      position: absolute;
      left: 0.952rem;
      top: 1.571rem;
    }
    .shenglue {
      margin-top: 1.19rem;
      height: 2.38rem;
      position: absolute;
      top: 0rem;
      left: 90%;
      display: block;
      width: 1.904rem;
    }
  }
  .headerbox {
    height: 4.761rem;
    line-height: 4.761rem;
    color: #fff;
    background: #00caa0;
    text-align: center;
    font-size: 1.428rem;
  }
  /*充值记录内容*/
  .jilu_content {
    .jilu_zhongzhi {
      p {
        height: 2.666rem;
        color: #666666;
        line-height: 2.666rem;
        font-size: 1.047rem;
        box-sizing: border-box;
        padding-left: 1.428rem;
        padding-right: 1.428rem;
      }
      div {
        height: 7.142rem;
        background: #fff;
        p {
          height: 3.571rem;
        }
        p:nth-of-type(1) {
          display: flex;
          justify-content: space-between;
          line-height: 3.571rem;
          span {
            display: block;
            color: #333333;
            font-size: 1.428rem;
            font-weight: 600;
          }
        }
        /*p:nth-of-type(2){
 						background: #fff;
 					}*/
      }
    }
  }
}
</style>
