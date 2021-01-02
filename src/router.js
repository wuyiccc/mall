/**
 * @author  wuyiccc
 * @date  2020/10/17 16:03
 * 岂曰无衣，与子同袍~
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/first/Home'
import Index from '@/pages/first/sub/Index'
import Product from "@/pages/first/sub/Product";
import Detail from "@/pages/first/sub/Detail";

import Cart from "@/pages/Cart";

import Order from "@/pages/second/Order";
import OrderList from "@/pages/second/sub/OrderList";
import OrderConfirm from "@/pages/second/sub/OrderConfirm";
import OrderPay from "@/pages/second/sub/OrderPay";
import AliPay from "@/pages/second/sub/AliPay";
import Login from "@/pages/Login";


Vue.use(Router);

export default new Router({
    routes: [
        {
            // 门户部分, 不需要登录
            path: '/home',
            name: 'home',
            component: Home,
            redirect: '/home/index',
            children: [
                {
                    path: '/home/index',
                    name: 'index',
                    component: Index
                }, {
                    path: '/home/product/:id',
                    name: 'product',
                    component: Product
                }, {
                    path: '/home/detail/:id',
                    name: 'detail',
                    component: Detail
                }
            ]
        }, {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            // 购物车 需要登录
            path: '/cart',
            name: 'cart',
            component: Cart
        }, {
            // 订单部分, 需要登录
            path: '/order',
            name: 'order',
            component: Order,
            children: [
                {
                    path: '/order/list',
                    name: 'order-list',
                    component: OrderList,
                },
                {
                    path: '/order/confirm',
                    name: 'order-confirm',
                    component: OrderConfirm,
                },
                {
                    path: '/order/pay',
                    name: 'order-pay',
                    component: OrderPay,
                },
                {
                    path: '/order/alipay',
                    name: 'ali-pay',
                    component: AliPay,
                }
            ]
        }

    ]
});
