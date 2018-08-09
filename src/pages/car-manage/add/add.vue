<template>
   <div class="body_scroll">
        <view-box ref="viewBox" class="body_scroll_wrapper">
            <!-- 未登录用户查询车辆 -->
            <div class="search_not_login car_content">
                <!-- 中间内容区域 -->
                <div class="search_license">
                    <p class="search_license_supply">请绑定真实有效的车牌号</p>
                    <license-input :carNumber.sync="car"  :isValid.sync="isDisabled"></license-input>
                </div>

                <!-- 提交按钮区域 -->
                <x-button type="primary" class="search_submit" :disabled="!isDisabled">添加车辆</x-button>
            </div>
        </view-box>
   </div>
</template>
<script>
import { ViewBox, XButton } from 'vux'
export default {
    name: 'carAdd',
    components: {
        ViewBox,
        XButton
    },
    data() {
        return {
            car: '',
            isDisabled: false
        }
    }
}
</script>


