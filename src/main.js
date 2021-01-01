import Vue from 'vue'
import axios from 'axios';
import VueAxios from 'vue-axios';

import App from '@/App.vue'
import router from "@/router";

Vue.use(VueAxios, axios);
Vue.config.productionTip = false

// 根据前端的跨域方式进行调整
/**
 * 1. 代理
 * 2. jsonp
 * 3. cors
 */
axios.defaults.baseURL = '/api'
// 超时时间
axios.defaults.timeout = 8000;
/**
 * 为axios添加请求拦截器，对请求返回的信息进行过滤处理
 */
axios.interceptors.response.use(function (response){

    /**
     * response.data 的后端信息格式
     *   {
     *       "status": 0,
     *       "data": dataInfos,
     *       "msg": msg
     *   }
     */

    let res = response.data; // 实际上我们后端接口返回的自定义数据信息
    if (res.status === 0) { // 0 是成功
        return res.data;
    } else if (res.status === 10) { // 10 是未登录
        // 此处无法使用route进行跳转，只能在Vue实例中使用
        window.location.href = '/#/login';
    } else {
        alert(res.msg);
    }
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
