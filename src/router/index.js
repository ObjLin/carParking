import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'

Vue.use(Router)
const routers = [
  {
    path: '/',
    name: 'home',
    component: function(resovle) {
      require(['@/pages/home/home-page/home.vue'], resovle)
    }
  },
  // 登录验证
  {
    path: '/loginConfirm',
    name: 'loginConfirm',
    component: function(resovle) {
      require(['@/pages/personal/confirm.vue'], resovle)
    }
  },
  // 登录后主页面
  {
    path: '/homeMessage',
    name: 'homeMessage',
    component: function(resovle) {
      require(['@/pages/home/home-message.vue'], resovle)
    }
  },
  // 车辆缴费车牌查询
  {
    path: '/licenseSearch/:carNum',
    name: 'licenseSearch',
    component: function(resovle) {
      require(['@/pages/parking-payment/search/search.vue'], resovle)
    }
  },
  // 停车缴费
  {
    path: '/parkingPayment/:carnum',
    name: 'parkingPayment',
    component: function(resovle) {
      require(['@/pages/parking-payment/payment/payment.vue'], resovle)
    }
  },
  // 车辆列表
  {
    path: '/carList',
    name: 'carList',
    component: function(resovle) {
      require(['@/pages/car-manage/list/list.vue'], resovle)
    }
  },
  // 车辆添加
  {
    path: '/carAdd',
    name: 'carAdd',
    component: function(resovle) {
      require(['@/pages/car-manage/add/add.vue'], resovle)
    }
  },
  // 车辆详情页
  {
    path: '/carDetails',
    name: 'carDetails',
    component: function(resovle) {
      require(['@/pages/car-manage/details/details.vue'], resovle)
    }
  },
  // 包期车充值
  {
    path: '/recharge',
    name: 'recharge',
    component: function(resovle) {
      require(['@/pages/recharge/recharge.vue'], resovle)
    }
  },
  // 停车记录
  {
    path: '/parking',
    name: 'parking',
    component: function(resovle) {
      require(['@/pages/agpages/parkingrecord.vue'], resovle)
    }
  },
  // 停车记录详情
  {
    path: '/parkingxiangqing',
    name: 'parkingxiangqing',
    component: function(resovle) {
      require(['@/pages/agpages/parkingrecordxiangqing.vue'], resovle)
    }
  },
  // 充值记录
  {
    path: '/record',
    name: 'record',
    component: function(resovle) {
      require(['@/pages/agpages/record.vue'], resovle)
    }
  },
  //锁车
  {
    path: '/lockcar',
    name: 'lockcar',
    component: function(resovle) {
      require(['@/pages/agpages/lockcar.vue'], resovle)
    }
  },
  // 充值记录详情
  {
    path: '/recordxiangqing',
    name: 'recordxiangqing',
    component: function(resovle) {
      require(['@/pages/agpages/recordxiangqi.vue'], resovle)
    }
  }
]

const router = new VueRouter({
  routes: routers
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
