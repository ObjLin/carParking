<template>
    <div class="body_scroll">
    <view-box ref="viewBox" class="body_scroll_wrapper pray_bg">
        <!-- 缴费区域 -->
        <div class="payment_card">
            <card class="payment_card_main">
                <div slot="header" class="payment_card_head clearfix">
                    <h1>{{carNum}}</h1>
                    <img  src="@/assets/images/icon/edit.png" @click="goEdit()"/>
                </div>
                <div slot="content">
                    <!-- 入场车辆 -->
                    <div class="payment_card_details" v-if="res.result && res.data.IsPay">
                        <p class="payment_card_supply">停车费用</p>
                        <p class="payment_card_money">
                            <span>￥</span>
                            {{res.data.Payprice}}
                        </p>
                        <p class="payment_card_time">
                            <img  src="@/assets/images/payment_time.png"/>
                            {{res.data.Period}}小时
                        </p>
                        <x-button slot="footer" type="primary" class="payment_card_submit">去支付</x-button>
                    </div>
                    <!-- 未入场车辆 -->
                    <p class="payment_not_record" v-else-if="res.result && !res.data.IsPay">{{res.data.errorMsg}}</p>

                    <!-- 支付结果页面 -->
                    <div class="payment_result" v-if="res.data.Payprice==0">
                        <img  src="@/assets/images/payment_result.png"/>
                        <!-- <h3>14:28</h3> -->
                        <p>您已支付，<br />请尽快驶离停车场</p>
                    </div>
                </div>
            </card>
        </div>

        <!-- 车辆列表区域 -->
        <div class="payment_car">
            <group class="payment_car_list">
                <cell
                title="我的车辆"
                is-link
                :border-intent="false"
                :arrow-direction="showCar ? 'up' : 'down'"
                @click.native="showCar = !showCar"></cell>

                <template v-if="showCar">
                    <div class="payment_radio_total">
                        <radio :options="carList">
                            <template slot-scope="props" slot="each-item"><!-- use scope="props" when vue < 2.5.0 -->
                            <div class="payment_radio_content clearfix">
                                <span>{{props.index+1}}</span>
                                <p>{{ props.label }}</p>
                            </div>
                            </template>
                        </radio>
                    </div>
                </template>
            </group>
        </div>
    </view-box>
    </div>
</template>
<script>
import api from '../../../commons/api/api'
import { ViewBox, Card, XButton, Group, Cell, Radio } from 'vux'
export default {
    name: 'parkingPayment',
    components: {
        ViewBox,
        Card,
        XButton,
        Group,
        Cell,
        Radio
    },
    data() {
        return {
            showCar: false,
            carList: ['川A12345', '川A92345', '川A466262'],
            carNum: '', //车牌号,
            // data: {},
            res: {
                data: {
                    Payprice: 0
                }
            },
        }
    },
    mounted() {
        this.carNum = this.$route.params.carnum;
        this.showList();
    },
    methods: {
        showList() {
            // console.log(this.carNum)
            api.CallService('parking', 'ParkingServer', 'GetTempPayInfo', { HPHM: this.carNum }, res => {
                // this.data = res.data;
                this.res = res;
                this.payPrice = res.data.Payprice
                // console.log("nihao",this.payPrice);
            })
        },
        // 跳转编辑页面
        goEdit() {
            this.$router.push('/licenseSearch/' + this.carNum);
            console.log(this.carNum);
        }
    }
}
</script>

<style lang="less">
@import './payment.less';
</style>
