/**
 * @author  wuyiccc
 * @date  2021/1/3 20:46
 * 岂曰无衣，与子同袍~
 */

export default {

    saveUserName(context, username) {
        context.commit('saveUserName', username); // 触发mutations的saveUserName方法
    },
    saveCartCount(context, cartCount) {
        context.commit('saveCartCount', cartCount);
    }
}