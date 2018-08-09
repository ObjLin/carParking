<template>
   <div class="body_scroll">
        <view-box ref="viewBox" class="body_scroll_wrapper pray_bg">
            <h1 class="page_title_all">车辆管理</h1>
            <!-- 中间列表区域 -->
             <group class="car_list_total">
                <cell title="川A78332" value="临停车" is-link @click.native="goPage('/carDetails')">
                    <span slot="icon" class="list_border list_red_border"></span>
                </cell>
                <cell title="川A78332" value="VIP车" is-link @click.native="goPage('/carDetails')">
                    <span slot="icon" class="list_border list_green_border"></span>
                </cell>

                <cell title="川A78332" value="包期车" is-link @click.native="goPage('/carDetails')">
                    <span slot="icon" class="list_border list_blue_border"></span>
                </cell>

                <cell title="川A78332" value="固定临停车" is-link @click.native="goPage('/carDetails')">
                    <span slot="icon" class="list_border list_orange_border"></span>
                </cell>
             </group>

             <!-- 添加按钮区域 -->
             <div class="list_add_total">
                 <x-button type="default" @click.native="goPage('/carAdd')">+</x-button>
                 <p class="list_add_text">添加临停车辆</p>
             </div>
        </view-box>
   </div>
</template>
<script>
import { ViewBox, Group, Cell, XButton } from 'vux'
export default {
  name: 'carList',
  components: {
    ViewBox,
    Group,
    Cell,
    XButton
  },
  data() {
    return {

    }
  },
  methods: {
    // 跳转页面
    goPage(pageName) {
      this.$router.push(pageName);
    }
  }
}
</script>

<style lang="less">
@import './list.less';
</style>

