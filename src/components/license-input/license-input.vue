<template>
    <div class="license_content">
        <!-- 输入框区域 -->
        <div class="license_input">
            <x-input  type="text" placeholder="" :readonly="index === 0" @click.native="keyborad(index)" ref="carInput" @keydown.native="update($event,index)" :max="1" :show-clear="false" v-model="carNumberArray[index]" v-for="(num,index) in carNumberArray" :key="index"></x-input>
            <!-- <x-input placeholder="" :max="1" :show-clear="false"></x-input>
            <x-input placeholder="" :max="1" :show-clear="false"></x-input>
            <x-input placeholder="" :max="1" :show-clear="false"></x-input>
            <x-input placeholder="" :max="1" :show-clear="false"></x-input>
            <x-input placeholder="" :max="1" :show-clear="false"></x-input>
            <x-input placeholder="" :max="1" :show-clear="false"></x-input> -->
        </div>
        <p class="license_choose">
            <check-icon :value.sync="choose"  @click.native="changeVal()">新能源车牌</check-icon>
        </p>
        <div  class="license_keyboard" v-show="isShow">
            <ul class="license_city_list">
                <li @click="selectCity(item)" v-for="(item,index) in firstCityNums" :key="index">{{item}}</li>
            </ul>
            <ul class="license_city_list">
                <li @click="selectCity(item)" v-for="(item,index) in secondCityNums" :key="index">{{item}}</li>
            </ul>

            <ul class="license_city_list">
                <li @click="selectCity(item)" v-for="(item,index) in thirdCityNums" :key="index">{{item}}</li>
            </ul>

            <ul class="license_city_list">
                <li @click="selectCity(item)" v-for="(item,index) in fourCityNums" :key="index">{{item}}</li>
                <!-- 关闭按钮 -->
                <x-button type="default" class="license_city_close" @click.native="close()">关闭</x-button>
            </ul>
            <!-- <span @click="selectCity(item)"  v-for="(item,index) in cityNums" :key="index">{{item}}</span> -->
        </div>
    </div>
</template>

<script>
import { XInput, CheckIcon, XButton } from 'vux'
import { setTimeout } from 'timers';
export default {
    name: 'licenseInput',
    components: {
        XInput,
        CheckIcon,
        XButton
    },
    data: function () {
        return {
            choose: false,
            carNumberArray: ['川', '', '', '', '', '', ''], //初始化车牌,
            keyCode: 0, //键盘值
            firstCityNums: [], //车牌城市选择
            secondCityNums: [], //车牌城市选择
            thirdCityNums: [], //车牌城市选择
            fourCityNums: [], //车牌城市选择
            isShow: false  //车牌城市键盘弹出层显示隐藏
        }
    },
    props: {
        carNumber: {
            type: String,
            default: ""
        },
        isValid: Boolean,
    },
    watch: {
        carNumberArray: function (val, oldVal) {
            if (this.keyCode !== 0) {
                let _carnum = val.join('').toUpperCase();
                this.$emit('update:carNumber', _carnum);
                var express = /^$/;
                if (this.choose) express = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领]{1}[A-Z]{1}[A-Z0-9]{5}[A-Z0-9挂学警港澳]{1}$/;
                else express = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
                let result = express.test(_carnum);
                this.$emit('update:isValid', result);
            }
        },
        carNumber: function (val) {
            if (val && val.length > 6 && this.keyCode == 0) {
                this.carNumberArray = val.split("");
            }
        }
    },
    methods: {
        // 自动获取焦点
        update(event, index) {
            this.keyCode = event.keyCode;
            if (event.keyCode != 8) {
                if (!this.carNumberArray[index]) {
                    return;
                }
                if (index === this.carNumberArray.length - 1) {
                    this.$refs.carInput[index].blur()
                } else {
                    this.$refs.carInput[index + 1].focus()
                }
            } else {
                if (index > 0) {
                    if (!this.carNumberArray[index]) {
                        this.carNumberArray.splice(index - 1, 1, "");
                        this.$refs.carInput[index - 1].focus();
                    }
                }
            }
            console.log(this.carNumberArray, 'update')
        },
        // change(index) {
        //     console.log(this.carNumberArray[index]);
        //     let express = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Za-z0-9挂学警港澳]{1}$/;
        //     if (this.keyCode !== 8 && !express.test(this.carNumberArray[index])) {
        //         console.log(express.test(this.carNumberArray[index]), this.carNumberArray[index], 'upsuccess');
        //         this.carNumberArray.splice(index, 1, "");
        //         this.$refs.carInput[index].focus();
        //     }
        // },
        // 点击按钮，改变输入框长度
        changeVal() {
            if (this.choose) {
                this.carNumberArray.push('');
            } else {
                this.carNumberArray.pop('');
            }
        },
        selectCity(item) {
            this.carNumberArray.splice(0, 1, item);
            this.$refs.carInput[1].focus();
            this.isShow = false;
        },
        keyborad(index) {
            //弹出键盘
            this.isShow = (index == 0)
        },

        // 关闭弹出框
        close() {
            this.isShow = false;
        }
    },
    mounted() {
        let firstCityStr = '京津沪渝冀豫云辽黑湘';
        this.firstCityNums = firstCityStr.split('');
        let secondCityStr = '皖鲁新苏浙赣鄂桂甘';
        this.secondCityNums = secondCityStr.split('');
        let thirdCityStr = '晋蒙陕吉闽贵粤青藏';
        this.thirdCityNums = thirdCityStr.split('');
        let fourCityStr = '川宁琼使领';
        this.fourCityNums = fourCityStr.split('');
        console.log(this.carNumber, 'mounted')
    }
}

</script>

<style lang="less">
@import './license-input.less';
</style>

