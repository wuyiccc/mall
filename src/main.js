import Vue from 'vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueLazyload from "vue-lazyload";
import VueCookie from 'vue-cookie';

// 自定义的组件必须以@ 或者 . 开头，不能直接写组件名称，否则会被当作引入的依赖
import App from '@/App.vue'
import router from "@/router";
import store from '@/store';


// import env from '@/env';
Vue.use(VueLazyload, {
    // 指定懒加载预显示的图片
    loading: '/imgs/loading-svg/loading-bars.svg'
});
Vue.use(VueCookie);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false

// 根据前端的跨域方式进行调整
/**
 * 1. 代理
 * 2. jsonp
 * 3. cors: 对应后端服务器的url, 此处采用
 */
// axios.defaults.baseURL = env.baseURL;
axios.defaults.baseURL = '/api';

// 超时时间
axios.defaults.timeout = 8000;
/**
 * 为axios添加请求拦截器，对请求返回的信息进行过滤处理
 */
axios.interceptors.response.use(function (response) {

    /**
     * response.data 的后端信息格式
     *   {
     *       "status": 0,
     *       "data": dataInfos,
     *       "msg": msg
     *   }
     */

    let res = response.data; // 实际上我们后端接口返回的自定义数据信息
    let path = location.hash; // 获取当前页面的hash路由地址
    if (res.status === 0) { // 0 是成功
        return res.data;
    } else if (res.status === 10) { // 10 是未登录

        // 如果是未登录, 并且不是index页面，那么就需要跳转到登录页面
        if (path !== '#/home/index') {
            // 此处无法使用route进行跳转，只能在Vue实例中使用
            window.location.href = '/#/login';
        }
        return Promise.reject(res);

    } else {
        alert(res.msg);
        return Promise.reject(res);
    }
})

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
