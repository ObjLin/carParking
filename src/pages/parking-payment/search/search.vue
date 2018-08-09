<template>
   <div class="body_scroll">
        <view-box ref="viewBox" class="body_scroll_wrapper">
            <h1 class="page_title_all">停车缴费</h1>
            <!-- 未登录用户查询车辆 -->
            <div class="search_not_login">
                <!-- 中间内容区域 -->
                <div class="search_license">
                    <p class="search_license_supply">请输入车牌号码</p>
                    <license-input :carNumber.sync="car"  :isValid.sync="isDisabled"></license-input>
                </div>

                <!-- 提交按钮区域 -->
                <x-button type="primary" class="search_submit" :disabled="!isDisabled" @click.native="goPayment()">查询</x-button>
            </div>
        </view-box>
   </div>
</template>
<script>
import { ViewBox, XButton } from 'vux'
import { setTimeout } from 'timers';
export default {
    name: 'licenseSearch',
    components: {
        ViewBox,
        XButton
    },
    data() {
        return {
            car: '',
            isDisabled: false
        }
    },
    methods: {
        // 跳转支付页面
        goPayment: function () {
            // api.CallService("parking", "ParkingServer", "GetTempPayInfo", { HPHM: this.car }, res => {
            //     console.log(res);
            // });
            this.$router.push("/parkingPayment/" + this.car)
        }
    },
    watch: {
        isDisabled: function (val) {
            console.log(val, 'search')
        }
    },
    mounted() {
        this.car = this.$route.params.carNum
        console.log(this.car);
    }
}

</script>

