/**
 * @author  wuyiccc
 * @date  2020/10/17 16:03
 * 岂曰无衣，与子同袍~
 */
import Vue from 'vue'
import Router from 'vue-router'
import home from './pages/first/home'
import index from './pages/first/index'
import product from "./pages/first/product";
import detail from "./pages/first/detail";
import order from "./pages/second/order";
import orderList from "./pages/second/orderList";
import orderConfirm from "./pages/second/orderConfirm";
import orderPay from "./pages/second/orderPay";
import alipay from "./pages/alipay";
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
            redirect: '/index',
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: index
                }, {
                    path: '/product/:id',
                    name: 'product',
                    component: product
                }, {
                    path: '/detail/:id',
                    name: 'detail',
                    component: detail
                }
            ]
        }, {
            path: '/order',
            name: 'order',
            component: order,
            children: [
                {
                    path: 'list',
                    name: 'order-list',
                    component: orderList,
                },
                {
                    path: 'confirm',
                    name: 'order-confirm',
                    component: orderConfirm,
                },
                {
                    path: 'pay',
                    name: 'order-pay',
                    component: orderPay,
                },
                {
                    path: 'alipay',
                    name: 'alipay',
                    component: alipay,
                }
            ]
        }

    ]
});
