import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// 加载 element 组件库
import ElementUI from 'element-ui'

// 加载 element 组件库的样式
import 'element-ui/lib/theme-chalk/index.css'

// 加载全局样式文件
import './styles/index.less'

// 设置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

//  挂载axios
Vue.prototype.$http = axios

// 全局注册 element 组件库
Vue.use(ElementUI)

//  挂载消息提醒
// Vue.use(Message)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
