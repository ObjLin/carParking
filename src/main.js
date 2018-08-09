// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router/index'
import './components/index'
import Es6Promise from "es6-promise";
Es6Promise.polyfill();
import store from "./stroe/store";
import moment from "moment";
import VueScroller from "vue-scroller";

import {
  DatetimePlugin,
  BusPlugin,
  ConfigPlugin,
  ToastPlugin,
  AlertPlugin,
  ConfirmPlugin,
  LoadingPlugin,
  AjaxPlugin,
  AppPlugin
} from 'vux'

Vue.filter("momentformat", function momentformat(time, format) {
  if (!format) return moment(time).format("YYYY-MM-DD HH:mm");
  else return moment(time).format(format);
});

Vue.use(VueScroller);
Vue.use(ConfigPlugin, {
  $layout: "VIEW_BOX"
});
// plugins
Vue.use(ToastPlugin, { type: "text", position: "top" });
Vue.use(AlertPlugin);
Vue.use(ConfirmPlugin);
Vue.use(LoadingPlugin);
Vue.use(AjaxPlugin);
Vue.use(BusPlugin);
Vue.use(DatetimePlugin);

Vue.config.productionTip = false;
new Vue({
  store,
  router,
  render: h => h(App),
  mounted() {
    window["v"] = this;
    this.$nextTick(() => {
      window.scrollTo(0, 1);
      window.scrollTo(0, 0);
    });
  }
}).$mount("#app-box");
