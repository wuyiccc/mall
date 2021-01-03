/**
 * @author  wuyiccc
 * @date  2021/1/3 20:46
 * 岂曰无衣，与子同袍~
 */
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './action';

Vue.use(Vuex);

const state = {
    username: '', // 登录用户名
    cartCount: 0, // 购物车的商品数量

}

export default new Vuex.Store({
    state, mutations, actions
});