<template>
  <div class="body_scroll">
    <view-box ref="viewBox" class="body_scroll_wrapper pray_bg">
        <!-- 车辆入场和出场消息通知 -->
        <div class="homeMsaage_list">
            <!-- 入场消息通知 -->
            <div class="homeMessage_list_content">
                <!-- 时间区域 -->
                <p class="homeMesaage_time">
                    <span>昨天 下午8:01</span>
                </p>
                <card>
                    <h2 class="homeMessage_card_title" slot="header">车辆入场通知</h2>
                    <div slot="content">
                        <p>车牌</p>
                        <h1 class="homeMessage_card_num">川A43568</h1>
                    </div>
                    <div class="homeMessage_card_bottom" slot="footer">
                        <ul class="homeMessage_bottom_list">
                            <li>
                                <label>编号</label>
                                <span>1942</span>
                            </li>
                            <li>
                                <label>入场时间</label>
                                <span>2018-07-11 16:52:03</span>
                            </li>
                        </ul>
                    </div>
                </card>
            </div>

            <!-- 出场消息通知 -->
            <div class="homeMessage_list_content">
                <!-- 时间区域 -->
                <p class="homeMesaage_time">
                    <span>星期日 下午8:01</span>
                </p>
                <card>
                    <h2 class="homeMessage_card_title" slot="header">车辆出场通知</h2>
                    <div slot="content">
                        <p>缴费金额</p>
                        <h1 class="homeMessage_pay clearfix"><span>￥</span>50.00</h1>
                    </div>
                    <div class="homeMessage_card_bottom" slot="footer">
                        <ul class="homeMessage_bottom_list">
                            <li>
                                <label>车牌</label>
                                <span>川A43568</span>
                            </li>
                            <li>
                                <label>编号</label>
                                <span>1942</span>
                            </li>
                            <li>
                                <label>停车时长</label>
                                <span>3小时42分钟</span>
                            </li>
                            <li>
                                <label>出场时间</label>
                                <span>2018-07-11 16:52:03</span>
                            </li>
                        </ul>
                    </div>
                </card>
            </div>
        </div>
    </view-box>
  </div>
</template>

<script>
import { ViewBox, Card } from 'vux'

export default {
    name: 'homeMessage',
    components: {
        ViewBox,
        Card
    },
    data() {
        return {

        }
    },
}
</script>

<style lang="less">
// 颜色样式
@white_color: #ffffff;
@green_color: #00caa0;
@black_color: #333333;
@pray_font_color: #999999;
@pray_bg_color: #ebebeb;
@pray_btn_color: #b9b9b9;
@pray_time_color: #cecece;

// 字体样式
@small_sm_font: 1rem;
@small_md_font: 1.167rem;
@small_lg_font: 1.25rem;
@normal_sm_font: 1.333rem;
@normal_md_font: 1.5rem;
@large_sm_font: 2.1667rem;
@large_md_font: 2.5rem;
@large_lg_font: 3.333rem;
// 中间列表样式
.homeMsaage_list {
  width: 100%;
  box-sizing: border-box;
  padding: 20px 16px;

  .homeMessage_list_content {
    width: 100%;
    margin-bottom: 30px;

    .homeMesaage_time {
      display: block;
      width: auto;
      margin: 0 auto 15px auto;
      text-align: center;
      span {
        display: inline-block;
        background: @pray_time_color;
        padding: 0 5px;
        line-height: 20px;
        border-radius: 4px;
        color: @white_color;
        font-size: @small_sm_font;
      }
    }

    // card内容
    .weui-panel {
      margin: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 10px 16px;
      border-radius: 4px;

      .homeMessage_card_title {
        font-weight: 500;
        color: @black_color;
        font-size: @normal_sm_font;
        line-height: 30px;
      }

      .vux-card-content {
        width: 100%;
        box-sizing: border-box;
        padding: 30px 0;
        text-align: center;
        p {
          color: @pray_font_color;
          font-size: @small_md_font;
          line-height: 20px;
        }
        h1 {
          color: @black_color;
        }
        .homeMessage_card_num {
          font-size: @large_sm_font;
        }
        .homeMessage_pay {
          font-size: @large_lg_font;
          display: flex;
          justify-content: center;
          span {
            float: left;
            font-size: @large_md_font;
          }
        }
      }

      //   底部内容区域
      .homeMessage_card_bottom {
        width: 100%;
        border-top: 1px solid @pray_bg_color;
        padding-top: 15px;

        .homeMessage_bottom_list {
          width: 100%;
          li {
            margin-bottom: 10px;
            font-size: @small_md_font;
            display: flex;
            label {
              color: @pray_font_color;
              display: inline-block;
              width: 30%;
            }
            span {
              display: inline-block;
              width: 70%;
              color: @black_color;
            }
          }
        }
      }
    }
  }
}
</style>
