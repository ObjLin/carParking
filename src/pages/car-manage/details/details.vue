<template>
   <div class="body_scroll">
        <view-box ref="viewBox" class="body_scroll_wrapper pray_bg">
            <!-- 包期车 -->
            <card class="car_details_card">
                <div slot="header" class="car_details_header">
                    <h1 class="clearfix">
                        <span>包期车</span>
                        <x-button type="default" v-show="false">
                            <img  src="@/assets/images/delete.png"/>
                        </x-button>
                    </h1>
                    <!-- 车辆列表 -->
                    <flexbox :gutter="0" wrap="wrap" class="car_details_list">
                        <flexbox-item :span="1/2">
                            <p><span></span>川A12345</p>
                        </flexbox-item>
                        <flexbox-item :span="1/2">
                            <p><span></span>川A12345</p>
                        </flexbox-item>

                         <flexbox-item :span="1/2">
                            <p><span></span>川A12345</p>
                        </flexbox-item>

                         <flexbox-item :span="1/2">
                            <p><span></span>川A12345</p>
                        </flexbox-item>
                    </flexbox>
                </div>
                <div slot="content" class="car_details_content">
                    <group>
                        <cell title="小区" value="湛江小区"></cell>
                        <cell title="停车场" value="一期停车场"></cell>
                        <cell title="产权人" value="张三"></cell>
                        <cell title="车位编号" value="001"></cell>
                        <cell title="包期时间" value="2018-07-15至2019-07-15"></cell>
                    </group>
                </div>
            </card>

            <!-- vip车 -->
             <card class="car_details_card">
                <div slot="header" class="car_details_header">
                    <h1 class="clearfix">
                        <span>VIP车</span>
                        <x-button type="default" v-show="false">
                            <img  src="@/assets/images/delete.png"/>
                        </x-button>
                    </h1>
                    <!-- 车辆列表 -->
                    <flexbox :gutter="0" wrap="wrap" class="car_details_list">
                        <flexbox-item :span="1/2">
                            <p><span></span>川A43568</p>
                        </flexbox-item>
                    </flexbox>
                </div>
                <div slot="content" class="car_details_content">
                    <group>
                        <cell title="小区" value="湛江小区"></cell>
                        <cell title="停车场" value="一期停车场"></cell>
                    </group>
                </div>
            </card>

            <!-- 固定临停车 -->
            <card class="car_details_card">
                <div slot="header" class="car_details_header">
                    <h1 class="clearfix">
                        <span>固定临停车</span>
                        <x-button type="default" v-show="false">
                            <img  src="@/assets/images/delete.png"/>
                        </x-button>
                    </h1>
                    <!-- 车辆列表 -->
                    <flexbox :gutter="0" wrap="wrap" class="car_details_list">
                        <flexbox-item :span="1/2">
                            <p><span></span>川A43568</p>
                        </flexbox-item>
                        <flexbox-item :span="1/2">
                            <p><span></span>川A43568</p>
                        </flexbox-item>
                        <flexbox-item :span="1/2">
                            <p><span></span>川A43568</p>
                        </flexbox-item>
                        <flexbox-item :span="1/2">
                            <p><span></span>川A43568</p>
                        </flexbox-item>
                    </flexbox>
                </div>
                <div slot="content" class="car_details_content">
                    <group>
                        <cell title="余额" value="100元"></cell>
                        <cell title="小区" value="湛江小区"></cell>
                        <cell title="停车场" value="一期停车场"></cell>
                    </group>
                </div>
            </card>

             <!-- 临停车 -->
            <card class="car_details_card">
                <div slot="header" class="car_details_header">
                    <h1 class="clearfix">
                        <span>临停车</span>
                        <x-button type="default" v-show="true" @click.native="showAlert()">
                            <img  src="@/assets/images/delete.png"/>
                        </x-button>
                    </h1>
                    <!-- 车辆列表 -->
                    <flexbox :gutter="0" wrap="wrap" class="car_details_list">
                        <flexbox-item :span="1/2">
                            <p><span></span>川A43568</p>
                        </flexbox-item>
                    </flexbox>
                </div>
            </card>
        </view-box>
   </div>
</template>
<script>
import { ViewBox, Card, Flexbox, FlexboxItem, Group, Cell, XButton, Confirm } from 'vux'
export default {
    name: 'carDetails',
    components: {
        ViewBox,
        Card,
        Flexbox,
        FlexboxItem,
        Group,
        Cell,
        XButton,
        Confirm
    },
    data() {
        return {

        }
    },
    methods: {
        showAlert() {
            this.$vux.confirm.show({
                content: '是否删除该临停车辆？'
            })
        }
    }
}
</script>

<style lang="less">
@import './details';
</style>

