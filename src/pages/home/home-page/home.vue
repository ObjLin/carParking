<template>
  <div class="body_scroll">
    <view-box ref="viewBox" class="body_scroll_wrapper">
        <div class="home_head">
            <!-- 未登录区域 -->
            <div class="home_not">
                <p>登录后体验全部功能</p>
                <x-button type="primary" mini @click.native="goConfirm">登录</x-button>
            </div>

            <!-- 已登录区域 -->
            <div class="home_login" hidden>
                <p class="home_login_account">18883869729</p>
                <p class="home_login_pay clearfix">
                    <span>￥</span>
                    50.00
                </p>
                 <x-button type="primary" mini>零钱</x-button>
            </div>
        </div>

        <!-- 中间列表区域 -->
         <flexbox :gutter="0" wrap="wrap" class="home_list_total">
            <flexbox-item :span="1/3">
                <div class="home_list_content" @click="goPage('/licenseSearch/'+ ':1')">
                    <img  src="@/assets/images/icon/home_icon1.png"/>
                    <p>停车缴费</p>
                </div>
            </flexbox-item>

             <flexbox-item :span="1/3">
                <div class="home_list_content" @click="goPage('/carList/')">
                    <img  src="@/assets/images/icon/home_icon2.png"/>
                    <p>车辆管理</p>
                </div>
            </flexbox-item>

             <flexbox-item :span="1/3">
                <div class="home_list_content" @click="goPage('/recharge')">
                    <img  src="@/assets/images/icon/home_icon3.png"/>
                    <p>包期车充值</p>
                </div>
            </flexbox-item>

             <flexbox-item :span="1/3">
                <div class="home_list_content" @click="goPage('/parking')">
                    <img  src="@/assets/images/icon/home_icon4.png"/>
                    <p>停车记录</p>
                </div>
            </flexbox-item>

             <flexbox-item :span="1/3">
                <div class="home_list_content" @click="goPage('/record')">
                    <img  src="@/assets/images/icon/home_icon5.png"/>
                    <p>充值记录</p>
                </div>
            </flexbox-item>

             <flexbox-item :span="1/3">
                <div class="home_list_content">
                    <img  src="@/assets/images/icon/home_icon6.png"/>
                    <p>访客放行</p>
                </div>
            </flexbox-item>

             <flexbox-item :span="1/3">
                <div class="home_list_content" @click="goPage('/lockcar')">
                    <img  src="@/assets/images/icon/home_icon7.png"/>
                    <p>锁车</p>
                </div>
            </flexbox-item>
        </flexbox>
    </view-box>
  </div>
</template>

<script>
import { ViewBox, XHeader, XButton, Flexbox, FlexboxItem } from 'vux'

export default {
    name: 'home',
    components: {
        ViewBox,
        XHeader,
        XButton,
        Flexbox,
        FlexboxItem
    },
    data() {
        return {

        }
    },
    methods: {
        // 跳转确认页面
        goConfirm: function () {
            this.$router.push('/loginConfirm');
        },

        // 跳转页面
        goPage: function (name) {
            this.$router.push(name);
        }
    },
    mounted() {
        // alert('home');
    }
}
</script>

<style lang="less">
@import './home.less';
</style>
