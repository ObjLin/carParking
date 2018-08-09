<template>
  <div class="body_scroll">
    <view-box ref="viewBox" class="body_scroll_wrapper pray_bg">
        <h1 class="page_title_all">验证手机</h1>
        <!-- 表单区域 -->
        <div class="confirm_form">
            <group>
                <x-input placeholder="请输入你的手机号">
                    <img  slot="label" src="@/assets/images/icon/phone.png"/>
                </x-input>
            </group>
            <group class="confirm_code_total clearfix">
                <x-input placeholder="验证码" class="cofirm_code+_input">
                    <img  slot="label" src="@/assets/images/icon/confirm.png"/>
                </x-input>
                <x-button type="primary"  class="confirm_code_btn">获取验证码</x-button>
                <x-button type="default" class="confirm_code_time"  disabled v-show="false">56秒</x-button>
            </group>
            <p class="confirm_supply_text">
                点击下一步即表示您已阅读并同意
                <span>《使用规则与停车服务协议》</span>
            </p>
            <group class="confirm_bottom_total">
                <x-button type="primary" class="cofirm_submit_btn" disabled>下一步</x-button>
            </group>
        </div>
    </view-box>
  </div>
</template>

<script>
import { ViewBox, XInput, Group, XButton } from 'vux'

export default {
    name: 'loginConfirm',
    components: {
        ViewBox,
        XInput,
        Group,
        XButton
    },
    data() {
        return {
        }
    }
}
</script>

<style lang="less">
// 颜色样式
@white_color: #ffffff;
@green_color: #00caa0;
@black_color: #333333;
@pray_font_color: #999999;
@pray_btn_color: #b9b9b9;

// 字体样式
@small_sm_font: 1rem;
@small_md_font: 1.167rem;
@small_lg_font: 1.25rem;
@normal_sm_font: 1.333rem;
@normal_md_font: 1.5rem;
@large_md_font: 2.5rem;
@large_lg_font: 3.333rem;

// 表单区域样式
.confirm_form {
  width: 100%;
  box-sizing: border-box;
  padding: 20px 16px;
  .weui-cells {
    border-radius: 4px;
  }
  .weui-cells:before {
    border: none !important;
  }
  .weui-cells:after {
    border: none !important;
  }

  .weui-cell {
    box-sizing: border-box;
    padding: 6px 16px !important;
    img {
      width: 12px;
      margin-right: 10px;
      padding-top: 7px;
    }
    input {
      font-size: @normal_sm_font;
      color: @black_color;
    }
  }

  .confirm_code_total {
    .weui-cells {
      width: 100%;
      background: transparent !important;
      display: inline-flex;
      justify-content: space-between;
      width: 100%;
    }

    .weui-cell {
      background: @white_color;
      border-radius: 4px;
      margin-right: 20px;
      width: 100%;
    }
    .confirm_code_btn {
      float: left;
      margin: 0;
      padding: 0;
      width: 170px;
      text-align: center;
      box-sizing: border-box;
      font-size: @normal_sm_font;
      white-space: nowrap;
      border-radius: 4px;
      background: @green_color !important;
      border: none;
    }

    .weui-btn_disabled.confirm_code_time {
      float: left;
      margin: 0;
      padding: 0;
      width: 170px;
      text-align: center;
      box-sizing: border-box;
      font-size: @normal_sm_font;
      white-space: nowrap;
      border-radius: 4px;
      background: @pray_btn_color !important;
      border: none;
      color: @white_color;
    }

    .weui-btn:after {
      border: none !important;
    }
  }

  .confirm_bottom_total {
    margin-top: 100px;
    .weui-cells {
      background: transparent;
    }

    .cofirm_submit_btn {
      display: block;
      width: 85%;
      margin: 0 auto;
      background: @green_color;
      padding: 0;
      font-size: @normal_sm_font;
      height: 40px;
      line-height: 40px;
      border-radius: 4px;
      color: #ffffff;
    }

    .weui-btn_disabled.cofirm_submit_btn {
      background: rgba(0, 202, 160, 0.5);
    }

    .weui-btn:after {
      border: none !important;
    }
  }

  //   说明文区域样式
  .confirm_supply_text {
    margin-top: 10px;
    color: @pray_font_color;
    font-size: @small_sm_font;
    span {
      color: @green_color;
    }
  }
}
</style>
